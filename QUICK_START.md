# JustHex - Quick Start Guide

## 🚀 Getting Started

### Open the Website
Simply open `index.html` in your web browser:
- Windows: Double-click `index.html`
- Mac/Linux: Double-click or right-click → Open with Browser
- Or drag the file into your browser

### No Installation Required
- ✅ No dependencies to install
- ✅ No build process needed
- ✅ No server setup required
- ✅ Works completely offline
- ✅ All features work in any modern browser

---

## 🎯 Features Overview

### Home Page
1. **Logo & Navigation**: Click logo to return home anytime
2. **Search Bar**: Type to filter tools by name/description
3. **Theme Toggle**: Click 🌙 to switch between light/dark mode
4. **Tool Grid**: Browse all 10 tools with descriptions
5. **Footer**: Quick links to other tools

### Tool Pages
Each tool page has:
- **Clear Title**: What the tool does
- **Description**: When and why to use it
- **Input Area**: Where you paste/enter content
- **Action Buttons**: Perform conversions/transformations
- **Output Area**: See instant results
- **Help Tips**: Learning tips and information

---

## 📋 The 10 Tools Explained

### 1. **Base64 Encoder/Decoder**
**Use for:** APIs, authentication, email attachments, data URLs
- Paste text → Click "Encode to Base64"
- Paste Base64 → Click "Decode from Base64"

### 2. **SHA256 Hash Generator**
**Use for:** Password hashing, blockchain, data integrity
- Enter text → Click "Generate SHA256"
- Copy the 64-character hash

### 3. **MD5 Generator**
**Use for:** File checksums, quick hashing
- Enter text → Click "Generate MD5"
- Copy the 32-character hash

### 4. **JSON Formatter**
**Use for:** API debugging, configuration files
- Paste messy JSON → Click "Format JSON"
- Or click "Minify JSON" to compress

### 5. **URL Encoder/Decoder**
**Use for:** API parameters, special characters in URLs
- Enter URL → Click "Encode URL" (adds %20 etc)
- Enter encoded URL → Click "Decode URL"

### 6. **Password Generator**
**Use for:** Creating strong passwords
- Set length (4-128 characters)
- Check/uncheck "Include Symbols"
- Click "Generate Password"
- Copy and use immediately

### 7. **UUID Generator**
**Use for:** Database IDs, unique tracking, APIs
- Set quantity (1-100)
- Click "Generate UUID"
- Perfect for database primary keys

### 8. **Binary Converter**
**Use for:** Learning, encoding debugging
- Enter text → Click "Text to Binary"
- Enter binary → Click "Binary to Text"

### 9. **Case Converter**
**Use for:** Code naming conventions, text formatting
- 7 formats: UPPERCASE, lowercase, Title Case, camelCase, PascalCase, snake_case, kebab-case
- Choose format and click button

### 10. **Timestamp Converter**
**Use for:** Debugging logs, time calculations
- Two tabs:
  - **Timestamp to Date**: Paste UNIX timestamp
  - **Date to Timestamp**: Pick date/time
- Shows multiple date formats

---

## 💡 Pro Tips

### Dark Mode
- Click the 🌙 moon icon in top-right
- Your preference is saved automatically
- Works on all pages

### Fast Search
- Click the search box in navbar
- Start typing tool name
- Results filter instantly
- Great for finding tools

### Copy Output
- Every tool has a "Copy Output" button
- Copies to clipboard automatically
- Works on all browsers
- Shows success notification

### Clear Data
- Every tool has a "Clear All" button
- Removes input and output
- Privacy-friendly
- No data is saved

---

## 🔧 Customization

### Change Colors
Edit `css/style.css` and modify these variables at the top:
```css
:root {
  --color-primary: #6366f1;      /* Main color */
  --color-secondary: #ec4899;    /* Accent color */
  --color-accent: #f59e0b;       /* Highlight color */
}
```

### Add More Tools
1. Create new `tools/myTool.html` file
2. Copy structure from existing tool
3. Add function to `js/tools.js`
4. Add card to `index.html` grid

### Deploy Online
1. Zip the entire `JustHex` folder
2. Upload to:
   - Netlify (drag & drop)
   - GitHub Pages (git push)
   - Vercel (connect repo)
   - Any web server (FTP upload)
3. No server code needed!

---

## 📱 Mobile Usage

- **Responsive Design**: All tools work perfectly on phones
- **Touch Friendly**: Large buttons for easy tapping
- **Mobile Navigation**: Menu adapts to small screens
- **Readable Text**: Proper font sizes on mobile
- **Fast Loading**: Optimized for mobile networks

---

## 🔒 Privacy & Security

✅ **Your Data is Private**
- All processing happens in your browser
- Nothing is sent to servers
- No cookies or tracking
- No data collection
- 100% safe and secure

✅ **Hashing is Secure**
- SHA256 uses Web Crypto API
- Same algorithm used by banks
- Industry standard
- Cryptographically strong

---

## 🐛 Troubleshooting

### "Tool not working"
- Refresh the page (Ctrl+R or Cmd+R)
- Try a different browser
- Clear browser cache
- Make sure JavaScript is enabled

### "Copy button not working"
- Check browser permissions
- Some browsers require HTTPS
- Try keyboard shortcut (Ctrl+C)

### "Dark mode not saving"
- Check if localStorage is enabled
- Clear browser cache and try again
- Make sure cookies are allowed

### "Search not working"
- Check browser console (F12)
- Make sure JavaScript is enabled
- Try typing slower

---

## 📚 Learning Resources

### Understanding the Tools

**Base64**
- Text encoding for safe transmission
- 33% larger file size
- Used in SMTP email
- Used in data URLs

**Hashing**
- One-way encryption
- Same input = same hash
- Used for passwords
- Used for verification

**JSON**
- JavaScript Object Notation
- Standard API format
- Human readable
- Machine parseable

**URLs**
- Special characters need encoding
- Spaces become %20
- & = ? need escaping
- Used in query strings

**Passwords**
- Longer is better (12+ characters)
- Mix upper/lower/numbers/symbols
- Unique per account
- Use password manager

**UUIDs**
- Globally unique identifiers
- 36 characters long
- Database primary keys
- Session tokens

**Binary**
- Base-2 number system
- 8-bit = 1 byte
- Character encoding
- Computer language

**Case Formats**
- camelCase: JavaScript variables
- PascalCase: JavaScript classes
- snake_case: Python, databases
- kebab-case: HTML/CSS

**Timestamps**
- Seconds since Jan 1, 1970
- Called "Unix Epoch"
- Timezone independent
- Used everywhere in code

---

## 🎨 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Yes |
| Firefox | ✅ Yes |
| Safari | ✅ Yes |
| Edge | ✅ Yes |
| Opera | ✅ Yes |
| IE 11 | ⚠️ Limited |

---

## 📞 Need Help?

### Issues?
1. Check browser console (F12)
2. Make sure JavaScript enabled
3. Try different browser
4. Refresh the page

### Want to Contribute?
- This is open source
- Feel free to fork and customize
- Add your own tools
- Share improvements

### Report Bugs?
- Check existing issues first
- Include browser info
- Describe steps to reproduce
- Share expected vs actual behavior

---

## 🚀 Next Steps

1. ✅ Open `index.html` in browser
2. ✅ Try different tools
3. ✅ Toggle dark mode
4. ✅ Search for tools
5. ✅ Copy results
6. ✅ Share with friends
7. ✅ Deploy online
8. ✅ Customize for your needs

---

## 🎉 You're All Set!

JustHex is ready to use. Enjoy the tools!

**Questions?** All tools have help tips (💡) with quick facts.

**Happy converting, encoding, and hashing!** 🚀
