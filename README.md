# Run+ Plans Website

Landing page for Run+ Plans - Training plans designed for ElliptiGO and Cyclete owners.

## 🚀 Quick Start

This is a static HTML/CSS/JavaScript website ready for deployment to GitHub Pages.

### Local Development

1. Open `index.html` in your browser, or
2. Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000`

## 📦 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `runplusplans-website`
3. Set to **Public**
4. Do NOT initialize with README (we already have one)
5. Click **Create repository**

### Step 2: Push Code to GitHub

Open terminal in this directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Run+ Plans landing page"
git branch -M main
git remote add origin https://github.com/bradherren/runplusplans-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: `https://github.com/bradherren/runplusplans-website`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://bradherren.github.io/runplusplans-website/`

### Step 4: Add Custom Domain (runplusplans.com)

#### In GitHub:

1. Go to **Settings → Pages**
2. Under **Custom domain**, enter: `runplusplans.com`
3. Click **Save**
4. Check **Enforce HTTPS** (wait for DNS to propagate first)

#### In Your Domain Registrar:

Add these DNS records (replace existing A/CNAME records if necessary):

**A Records (for apex domain):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**CNAME Record (for www subdomain):**
```
Type: CNAME
Name: www
Value: bradherren.github.io
```

**DNS Propagation:**
- Changes can take 24-48 hours (usually faster)
- Check status: [dnschecker.org](https://dnschecker.org)
- Test: `dig runplusplans.com` or `nslookup runplusplans.com`

### Step 5: Enable HTTPS

1. Wait for DNS propagation to complete
2. Go to **Settings → Pages**
3. Check **Enforce HTTPS**
4. GitHub will automatically provision SSL certificate (Let's Encrypt)

## 📋 Before Launch Checklist

### Required Setup:

- [ ] Push code to GitHub
- [ ] Enable GitHub Pages
- [ ] Configure DNS records
- [ ] Wait for DNS propagation
- [ ] Enable HTTPS
- [ ] Test live site on mobile and desktop

### Form Configuration:

- [ ] Sign up for [Formspree](https://formspree.io) (free tier)
- [ ] Create new form in Formspree dashboard
- [ ] Copy your Form ID (e.g., `xvoeabcd`)
- [ ] Update `script.js` line 49: Replace `YOUR_FORM_ID` with your actual ID
- [ ] Commit and push changes
- [ ] Test form submission

### Images:

- [ ] Replace placeholder images in `/images/` directory
- [ ] See `/images/README.md` for specifications
- [ ] Optimize images (compress, use WebP if possible)
- [ ] Test page load speed

### Optional Enhancements:

- [ ] Add Google Analytics (if desired)
- [ ] Add favicon (create `favicon.ico` in root)
- [ ] Replace social media placeholder links in footer
- [ ] Set up custom email forwarding for brad@runplusplans.com

## 📁 Project Structure

```
runplusplans-website/
├── index.html          # Main landing page (all 7 sections)
├── styles.css          # All styling (responsive, mobile-first)
├── script.js           # Form handling, smooth scroll, interactions
├── images/             # Image assets
│   ├── placeholder-hero.jpg
│   ├── placeholder-al-1.jpg
│   ├── placeholder-al-2.jpg
│   ├── placeholder-facebook.jpg
│   ├── placeholder-garmin.jpg
│   └── README.md       # Image replacement instructions
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## 🎨 Design Details

**Color Scheme:**
- Primary Blue: `#2563eb`
- Secondary Green: `#10b981`
- Accent Orange: `#f59e0b`
- Background: `#ffffff`
- Text: `#1f2937`
- Light Background: `#f3f4f6`

**Typography:**
- Font Family: Inter (with system font fallbacks)
- Responsive font sizes
- Mobile-first breakpoint: 768px

## 🔧 Customization Guide

### Update Form Email:

1. Edit `script.js`
2. Replace `YOUR_FORM_ID` on line 49
3. Commit and push

### Change Colors:

1. Edit `styles.css`
2. Update CSS variables in `:root` (lines 29-36)
3. Save and test

### Add Google Analytics:

1. Get your GA tracking ID
2. Add this to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Update Content:

- All content is in `index.html`
- Sections are clearly labeled with HTML comments
- Edit text directly in HTML
- No build step required

## 🐛 Troubleshooting

### Site not loading after DNS change:

- DNS can take up to 48 hours to propagate
- Clear your browser cache
- Try incognito/private browsing mode
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)

### Form not submitting:

- Check that you've replaced `YOUR_FORM_ID` in `script.js`
- Verify Formspree account is active
- Check browser console for errors (F12)
- Test with a simple email first

### HTTPS not working:

- Ensure DNS has fully propagated first
- Wait 10-15 minutes after enabling HTTPS
- GitHub Pages auto-provisions certificate
- Check GitHub Pages settings for errors

### Images not displaying:

- Verify file paths are correct
- Check that images exist in `/images/` directory
- Ensure proper file extensions (.jpg, .png, .svg)
- Check browser console for 404 errors

## 📞 Support

**Questions or Issues?**
- Email: brad@runplusplans.com
- GitHub Issues: [github.com/bradherren/runplusplans-website/issues](https://github.com/bradherren/runplusplans-website/issues)

## 📄 License

© 2025 Run+ Plans. All rights reserved.

---

**Built with conversations with AI**

Ready to capture beta signups for the future of ElliptiGO and Cyclete training!
