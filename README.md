<p align="center">
  <img src="https://img.shields.io/badge/VS%20Code-Extension-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code Extension">
  <img src="https://img.shields.io/badge/TypeScript-100%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Dependencies-Zero-success?style=for-the-badge" alt="Zero Dependencies">
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/Brutus1066/GitHub-Profile-Formatter?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/stars/Brutus1066/GitHub-Profile-Formatter?style=flat-square" alt="Stars">
  <img src="https://img.shields.io/github/forks/Brutus1066/GitHub-Profile-Formatter?style=flat-square" alt="Forks">
  <img src="https://img.shields.io/github/issues/Brutus1066/GitHub-Profile-Formatter?style=flat-square" alt="Issues">
  <img src="https://img.shields.io/github/last-commit/Brutus1066/GitHub-Profile-Formatter?style=flat-square" alt="Last Commit">
  <img src="https://img.shields.io/github/actions/workflow/status/Brutus1066/GitHub-Profile-Formatter/ci.yml?style=flat-square&label=CI" alt="CI">
</p>

<h1 align="center">🎨 GitHub Profile Formatter</h1>

<p align="center">
  <strong>Convert Markdown ↔ BBCode and generate beautiful GitHub profile badges instantly</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-examples">Examples</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 💡 Why This Extension?

**The Problem:** You write documentation in Markdown for GitHub, but need to share it on forums that use BBCode. Or vice versa. Manual conversion is tedious and error-prone.

**The Solution:** Select text, run one command, done. Works offline, no external services, zero dependencies.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔄 **Markdown → BBCode** | Convert GitHub README content to forum-friendly BBCode |
| 🔄 **BBCode → Markdown** | Convert forum content to GitHub-ready Markdown |
| 🏷️ **Badge Generator** | Create shields.io badges with custom colors |
| 📊 **Stats Cards** | Insert GitHub stats, top languages, and streak cards |
| 🎯 **Format Selection** | Quick-wrap selected text with formatting |

### Supported Conversions

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

### Badge Generator

Insert shields.io badges:

![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

### Stats Cards

Insert GitHub readme-stats cards with themes: `dark`, `radical`, `tokyonight`, `dracula`, `gruvbox`

---

## 📦 Installation

### Option 1: From VSIX

1. Download `github-profile-formatter-1.0.0.vsix` from [Releases](https://github.com/Brutus1066/GitHub-Profile-Formatter/releases)
2. Open VS Code → Press `Ctrl+Shift+P`
3. Type `Extensions: Install from VSIX`
4. Select the downloaded file

### Option 2: From Source

```bash
git clone https://github.com/Brutus1066/GitHub-Profile-Formatter.git
cd GitHub-Profile-Formatter
npm install
npm run compile
npx @vscode/vsce package
```

---

## 🚀 Usage

All commands via Command Palette (`Ctrl+Shift+P`):

| Command | Description |
|---------|-------------|
| `GitHub Formatter: Markdown to BBCode` | Convert selection to BBCode |
| `GitHub Formatter: BBCode to Markdown` | Convert selection to Markdown |
| `GitHub Formatter: Insert Badge` | Generate a shields.io badge |
| `GitHub Formatter: Insert Stats Card` | Insert GitHub stats card |
| `GitHub Formatter: Format Selection` | Wrap selection with formatting |

---

## 📝 Examples

### Example 1: Share README on a Forum

**Input (Markdown):**
```markdown
## Features

**Fast** and *reliable* with `zero dependencies`.

- Easy installation
- Cross-platform support

[View Documentation](https://example.com/docs)
```

**Output (BBCode):**
```
[size=6][b]Features[/b][/size]

[b]Fast[/b] and [i]reliable[/i] with [code]zero dependencies[/code].

[list]
[*]Easy installation
[*]Cross-platform support
[/list]

[url=https://example.com/docs]View Documentation[/url]
```

### Example 2: Generate Repository Badges

Run `Insert GitHub Badge` → Select type, username, repo, style:

```markdown
![Stars](https://img.shields.io/github/stars/Brutus1066/GitHub-Profile-Formatter?style=for-the-badge)
```

![Stars](https://img.shields.io/github/stars/Brutus1066/GitHub-Profile-Formatter?style=for-the-badge)

### Example 3: GitHub Stats Cards

Run `Insert GitHub Stats Card` → Enter username, select theme:

```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=Brutus1066&show_icons=true&theme=tokyonight)
```

---

## ⚙️ Configuration

Access via `File → Preferences → Settings`:

| Setting | Description | Default |
|---------|-------------|---------|
| `githubProfileFormatter.defaultBadgeStyle` | Badge style | `flat-square` |
| `githubProfileFormatter.statsTheme` | Stats card theme | `radical` |

---

## 📊 Technical Details

| Aspect | Detail |
|--------|--------|
| **Dependencies** | Zero (VS Code API only) |
| **Activation** | On-demand (no startup overhead) |
| **Offline** | All conversions work without internet |
| **Clipboard** | Auto-copies result after conversion |

---

## 🔗 Related Projects

This extension pairs with [KZ BBCode Generator](https://github.com/Brutus1066/KZ-BBCode-Generator) - a Windows desktop app for comprehensive BBCode generation across 10+ forum platforms.

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md).

1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request

---

## 📄 License

MIT © [Kindware](https://kindware.dev) - see [LICENSE](LICENSE) file.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Brutus1066">Brutus1066</a> at <a href="https://kindware.dev">kindware.dev</a>
</p>

<p align="center">
  <a href="https://github.com/Brutus1066/GitHub-Profile-Formatter/stargazers">⭐ Star this repo</a> if you find it useful!
</p>
