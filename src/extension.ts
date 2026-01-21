/**
 * GitHub Profile Formatter - VS Code Extension
 * Converts between Markdown and BBCode, generates GitHub badges.
 * @author LAZYFROG (kindware.dev)
 * @license MIT
 */

import * as vscode from 'vscode';

// ============================================================================
// MARKDOWN TO BBCODE
// ============================================================================

function markdownToBBCode(text: string): string {
    if (!text) { return ''; }
    
    let result = text;
    
    // Code blocks with language
    result = result.replace(/```(\w+)?\n([\s\S]*?)```/g, (_m, lang, code) => {
        return lang ? `[code=${lang}]${code.trim()}[/code]` : `[code]${code.trim()}[/code]`;
    });
    
    // Inline code
    result = result.replace(/`([^`]+)`/g, '[code]$1[/code]');
    
    // Headers
    result = result.replace(/^######\s+(.+)$/gm, '[size=2][b]$1[/b][/size]');
    result = result.replace(/^#####\s+(.+)$/gm, '[size=3][b]$1[/b][/size]');
    result = result.replace(/^####\s+(.+)$/gm, '[size=4][b]$1[/b][/size]');
    result = result.replace(/^###\s+(.+)$/gm, '[size=5][b]$1[/b][/size]');
    result = result.replace(/^##\s+(.+)$/gm, '[size=6][b]$1[/b][/size]');
    result = result.replace(/^#\s+(.+)$/gm, '[size=7][b]$1[/b][/size]');
    
    // Horizontal rule
    result = result.replace(/^(-{3,}|\*{3,}|_{3,})$/gm, '[hr]');
    
    // Images
    result = result.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '[img]$2[/img]');
    
    // Links
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '[url=$2]$1[/url]');
    
    // Bold + Italic
    result = result.replace(/(\*\*\*|___)(.+?)\1/g, '[b][i]$2[/i][/b]');
    
    // Bold
    result = result.replace(/(\*\*|__)(.+?)\1/g, '[b]$2[/b]');
    
    // Italic
    result = result.replace(/(\*|_)([^*_]+)\1/g, '[i]$2[/i]');
    
    // Strikethrough
    result = result.replace(/~~(.+?)~~/g, '[s]$1[/s]');
    
    // Blockquotes
    result = result.replace(/^>\s?(.*)$/gm, '[quote]$1[/quote]');
    
    return result;
}

// ============================================================================
// BBCODE TO MARKDOWN
// ============================================================================

function bbcodeToMarkdown(text: string): string {
    if (!text) { return ''; }
    
    let result = text;
    
    // Code blocks with language
    result = result.replace(/\[code=(\w+)\]([\s\S]*?)\[\/code\]/gi, '```$1\n$2\n```');
    
    // Code blocks without language
    result = result.replace(/\[code\]([\s\S]*?)\[\/code\]/gi, (_m, code) => {
        const trimmed = code.trim();
        return trimmed.includes('\n') ? '```\n' + trimmed + '\n```' : '`' + trimmed + '`';
    });
    
    // Horizontal rule
    result = result.replace(/\[hr\]/gi, '\n---\n');
    
    // Quote blocks
    result = result.replace(/\[quote\]([\s\S]*?)\[\/quote\]/gi, '> $1');
    
    // Images
    result = result.replace(/\[img\](.*?)\[\/img\]/gi, '![]($1)');
    
    // Links with text
    result = result.replace(/\[url=([^\]]+)\](.*?)\[\/url\]/gi, '[$2]($1)');
    
    // Links without text
    result = result.replace(/\[url\](.*?)\[\/url\]/gi, '[$1]($1)');
    
    // Bold
    result = result.replace(/\[b\](.*?)\[\/b\]/gi, '**$1**');
    
    // Italic
    result = result.replace(/\[i\](.*?)\[\/i\]/gi, '*$1*');
    
    // Underline (no markdown equivalent, use underscore)
    result = result.replace(/\[u\](.*?)\[\/u\]/gi, '_$1_');
    
    // Strikethrough
    result = result.replace(/\[s\](.*?)\[\/s\]/gi, '~~$1~~');
    
    // Remove unsupported tags but keep content
    result = result.replace(/\[color=[^\]]+\](.*?)\[\/color\]/gi, '$1');
    result = result.replace(/\[size=[^\]]+\](.*?)\[\/size\]/gi, '$1');
    result = result.replace(/\[font=[^\]]+\](.*?)\[\/font\]/gi, '$1');
    
    return result;
}

// ============================================================================
// BADGE GENERATOR
// ============================================================================

function generateBadge(type: string, username: string, repo: string, style: string): string {
    const base = 'https://img.shields.io/github';
    switch (type) {
        case 'stars': return `![Stars](${base}/stars/${username}/${repo}?style=${style})`;
        case 'forks': return `![Forks](${base}/forks/${username}/${repo}?style=${style})`;
        case 'license': return `![License](${base}/license/${username}/${repo}?style=${style})`;
        case 'issues': return `![Issues](${base}/issues/${username}/${repo}?style=${style})`;
        case 'language': return `![Language](${base}/languages/top/${username}/${repo}?style=${style})`;
        default: return `![Badge](${base}/stars/${username}/${repo}?style=${style})`;
    }
}

function generateStatsCard(username: string, theme: string): string {
    return `![${username}'s GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme})`;
}

// ============================================================================
// EXTENSION ACTIVATION
// ============================================================================

export function activate(context: vscode.ExtensionContext): void {
    
    // Command 1: Markdown to BBCode
    const cmd1 = vscode.commands.registerCommand(
        'githubProfileFormatter.markdownToBBCode',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor');
                return;
            }
            
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            
            if (!text) {
                vscode.window.showWarningMessage('No text selected');
                return;
            }
            
            const converted = markdownToBBCode(text);
            
            await editor.edit(editBuilder => {
                editBuilder.replace(selection, converted);
            });
            
            await vscode.env.clipboard.writeText(converted);
            vscode.window.showInformationMessage('Converted to BBCode ✓');
        }
    );
    
    // Command 2: BBCode to Markdown
    const cmd2 = vscode.commands.registerCommand(
        'githubProfileFormatter.bbcodeToMarkdown',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor');
                return;
            }
            
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            
            if (!text) {
                vscode.window.showWarningMessage('No text selected');
                return;
            }
            
            const converted = bbcodeToMarkdown(text);
            
            await editor.edit(editBuilder => {
                editBuilder.replace(selection, converted);
            });
            
            await vscode.env.clipboard.writeText(converted);
            vscode.window.showInformationMessage('Converted to Markdown ✓');
        }
    );
    
    // Command 3: Insert Badge
    const cmd3 = vscode.commands.registerCommand(
        'githubProfileFormatter.insertBadge',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor');
                return;
            }
            
            const badgeType = await vscode.window.showQuickPick(
                ['stars', 'forks', 'license', 'issues', 'language'],
                { placeHolder: 'Select badge type' }
            );
            if (!badgeType) { return; }
            
            const username = await vscode.window.showInputBox({
                prompt: 'GitHub username',
                placeHolder: 'e.g., Brutus1066'
            });
            if (!username) { return; }
            
            const repo = await vscode.window.showInputBox({
                prompt: 'Repository name',
                placeHolder: 'e.g., KZ-BBCode-Generator'
            });
            if (!repo) { return; }
            
            const style = await vscode.window.showQuickPick(
                ['flat', 'flat-square', 'plastic', 'for-the-badge'],
                { placeHolder: 'Select style' }
            ) || 'flat';
            
            const badge = generateBadge(badgeType, username, repo, style);
            
            await editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, badge);
            });
            
            vscode.window.showInformationMessage('Badge inserted ✓');
        }
    );
    
    // Command 4: Insert Stats Card
    const cmd4 = vscode.commands.registerCommand(
        'githubProfileFormatter.insertStatsCard',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor');
                return;
            }
            
            const username = await vscode.window.showInputBox({
                prompt: 'GitHub username',
                placeHolder: 'e.g., Brutus1066'
            });
            if (!username) { return; }
            
            const theme = await vscode.window.showQuickPick(
                ['dark', 'radical', 'tokyonight', 'dracula', 'gruvbox'],
                { placeHolder: 'Select theme' }
            ) || 'dark';
            
            const card = generateStatsCard(username, theme);
            
            await editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, card);
            });
            
            vscode.window.showInformationMessage('Stats card inserted ✓');
        }
    );
    
    // Command 5: Format Selection
    const cmd5 = vscode.commands.registerCommand(
        'githubProfileFormatter.wrapSelection',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor');
                return;
            }
            
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            
            if (!text) {
                vscode.window.showWarningMessage('No text selected');
                return;
            }
            
            const format = await vscode.window.showQuickPick(
                ['bold', 'italic', 'code', 'strikethrough', 'link'],
                { placeHolder: 'Select format' }
            );
            if (!format) { return; }
            
            const outputType = await vscode.window.showQuickPick(
                ['Markdown', 'BBCode'],
                { placeHolder: 'Output format' }
            );
            if (!outputType) { return; }
            
            const isBBCode = outputType === 'BBCode';
            let result = text;
            
            switch (format) {
                case 'bold':
                    result = isBBCode ? `[b]${text}[/b]` : `**${text}**`;
                    break;
                case 'italic':
                    result = isBBCode ? `[i]${text}[/i]` : `*${text}*`;
                    break;
                case 'code':
                    result = isBBCode ? `[code]${text}[/code]` : `\`${text}\``;
                    break;
                case 'strikethrough':
                    result = isBBCode ? `[s]${text}[/s]` : `~~${text}~~`;
                    break;
                case 'link':
                    result = isBBCode ? `[url=${text}]${text}[/url]` : `[${text}](${text})`;
                    break;
            }
            
            await editor.edit(editBuilder => {
                editBuilder.replace(selection, result);
            });
            
            vscode.window.showInformationMessage('Formatted ✓');
        }
    );
    
    // Register all commands
    context.subscriptions.push(cmd1, cmd2, cmd3, cmd4, cmd5);
}

export function deactivate(): void {}
