# GitHub Profile Formatter

Convert between Markdown and BBCode. Generate GitHub profile badges instantly.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![VS Code](https://img.shields.io/badge/VS%20Code-1.85%2B-007ACC)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Why This Extension?

**Problem:** You write documentation in Markdown for GitHub, but need to share it on forums that use BBCode. Or vice versa. Manual conversion is tedious and error-prone.

**Solution:** Select text, run one command, done. Works offline, no external services.

---

## Features

### Markdown ↔ BBCode Conversion

| Markdown | BBCode |
|----------|--------|
| `**bold**` | `[b]bold[/b]` |
| `*italic*` | `[i]italic[/i]` |
| `~~strike~~` | `[s]strike[/s]` |
| `` `code` `` | `[code]code[/code]` |
| `[text](url)` | `[url=url]text[/url]` |
| `![alt](url)` | `[img]url[/img]` |
| `> quote` | `[quote]quote[/quote]` |
| `# Heading` | `[size=7][b]Heading[/b][/size]` |
| `---` | `[hr]` |

### GitHub Badge Generator

Insert shields.io badges for any repository:

- ⭐ Stars
- 🍴 Forks  
- 📋 License
- 🐛 Open Issues
- 💻 Top Language

### GitHub Stats Cards

Insert readme-stats cards for GitHub profiles:

- Contribution statistics
- Most used languages
- Multiple themes (dark, radical, tokyonight, dracula, gruvbox)

---

## Installation

### Option 1: From VSIX File

1. Download `github-profile-formatter-1.0.0.vsix`
2. Open VS Code
3. Press `Ctrl+Shift+P`
4. Type `Extensions: Install from VSIX`
5. Select the downloaded file
6. Reload VS Code

### Option 2: From Source

```bash
git clone https://github.com/Brutus1066/github-profile-formatter
cd github-profile-formatter
npm install
npm run compile
npx @vscode/vsce package
```

Then install the generated `.vsix` file.

---

## Usage

All commands are accessed via the Command Palette.

### Step 1: Select Text

Highlight the text you want to convert or format.

### Step 2: Open Command Palette

Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).

### Step 3: Type Command

| Type... | Action |
|---------|--------|
| `Convert Markdown to BBCode` | Markdown → BBCode |
| `Convert BBCode to Markdown` | BBCode → Markdown |
| `Insert GitHub Badge` | Add a shields.io badge |
| `Insert GitHub Stats Card` | Add a profile stats card |
| `Format Selection` | Quick wrap with bold/italic/code/etc |

### Step 4: Done

Text is converted in-place and copied to clipboard.

---

## Examples

### Example 1: Share README on a Forum

You have this in your GitHub README:

```markdown
## Features

**Fast** and *reliable* with `zero dependencies`.

- Easy installation
- Cross-platform support

[View Documentation](https://example.com/docs)
```

Select it, run `Convert Markdown to BBCode`, paste on your forum:

```
[size=6][b]Features[/b][/size]

[b]Fast[/b] and [i]reliable[/i] with [code]zero dependencies[/code].

[list]
[*]Easy installation
[*]Cross-platform support
[/list]

[url=https://example.com/docs]View Documentation[/url]
```

### Example 2: Add Badges to Profile README

1. Place cursor where you want the badge
2. Run `Insert GitHub Badge`
3. Select badge type (e.g., "stars")
4. Enter username: `Brutus1066`
5. Enter repo: `KZ-BBCode-Generator`
6. Select style: `for-the-badge`

Result:

```markdown
![Stars](https://img.shields.io/github/stars/Brutus1066/KZ-BBCode-Generator?style=for-the-badge)
```

### Example 3: Add Stats Card to Profile

1. Run `Insert GitHub Stats Card`
2. Enter username: `Brutus1066`
3. Select theme: `tokyonight`

Result:

```markdown
![Brutus1066's GitHub Stats](https://github-readme-stats.vercel.app/api?username=Brutus1066&show_icons=true&theme=tokyonight)
```

---

## Supported Conversions

### Markdown to BBCode

| Element | Supported |
|---------|-----------|
| Headers (H1-H6) | ✓ |
| Bold / Italic / Strikethrough | ✓ |
| Inline code | ✓ |
| Code blocks (with language) | ✓ |
| Links | ✓ |
| Images | ✓ |
| Blockquotes | ✓ |
| Horizontal rules | ✓ |
| Unordered lists | ✓ |
| Ordered lists | ✓ |

### BBCode to Markdown

| Element | Supported |
|---------|-----------|
| `[b]`, `[i]`, `[u]`, `[s]` | ✓ |
| `[code]`, `[code=lang]` | ✓ |
| `[url]`, `[url=]` | ✓ |
| `[img]` | ✓ |
| `[quote]` | ✓ |
| `[hr]` | ✓ |
| `[color]`, `[size]`, `[font]` | ✓ (stripped) |

---

## Technical Details

- **Dependencies:** None (VS Code API only)
- **Activation:** On-demand (no startup overhead)
- **Offline:** All conversions work without internet
- **Clipboard:** Auto-copies result after conversion

---

## Use Cases

1. **Cross-posting:** Share GitHub project updates on forums
2. **Documentation:** Convert forum tutorials to GitHub wikis
3. **Profile building:** Add badges and stats to GitHub profile README
4. **Quick formatting:** Wrap text in bold/italic/code without typing syntax

---

## Companion Tool

This extension pairs with [KZ BBCode Generator](https://github.com/Brutus1066/KZ-BBCode-Generator) - a Windows desktop app for comprehensive BBCode generation across 10+ forum platforms.

---

## License

MIT License - see [LICENSE](LICENSE) file.

---

## Author

**LAZYFROG** · [kindware.dev](https://kindware.dev) · [GitHub](https://github.com/Brutus1066)
