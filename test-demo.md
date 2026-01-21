# GitHub Profile Formatter - Test File

All commands: `Ctrl+Shift+P` then type the command name.

---

## Test 1: Markdown to BBCode

Select text below, then: `Ctrl+Shift+P` → "Convert Markdown to BBCode"

**This is bold** and *this is italic* with ~~strikethrough~~.

Expected result: `[b]This is bold[/b] and [i]this is italic[/i] with [s]strikethrough[/s].`

---

## Test 2: BBCode to Markdown

Select text below, then: `Ctrl+Shift+P` → "Convert BBCode to Markdown"

[b]Bold text[/b] and [i]italic text[/i] with [s]strikethrough[/s]

Expected result: `**Bold text** and *italic text* with ~~strikethrough~~`

---

## Test 3: Links

**Markdown to BBCode:**
[Visit GitHub](https://github.com)
→ `[url=https://github.com]Visit GitHub[/url]`

**BBCode to Markdown:**
[url=https://github.com]Visit GitHub[/url]
→ `[Visit GitHub](https://github.com)`

---

## Test 4: Code

**Markdown to BBCode:**
`console.log("hello")`
→ `[code]console.log("hello")[/code]`

**BBCode to Markdown:**
[code]console.log("hello")[/code]
→ `` `console.log("hello")` ``

---

## Test 5: Quotes

**Markdown to BBCode:**
> This is a quote
→ `[quote]This is a quote[/quote]`

**BBCode to Markdown:**
[quote]This is a quote[/quote]
→ `> This is a quote`

---

## Test 6: Insert Badge

Place cursor here → 

Then: `Ctrl+Shift+P` → "Insert GitHub Badge" → Follow prompts

---

## Test 7: Insert Stats Card

Place cursor here → 

Then: `Ctrl+Shift+P` → "Insert GitHub Stats Card" → Follow prompts

---

## Test 8: Format Selection

Select any text, then: `Ctrl+Shift+P` → "Format Selection"

Choose format type and output format (Markdown or BBCode).

test text for formatting

---

All tests passed? Extension is ready! 🐸
