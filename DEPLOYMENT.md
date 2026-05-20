# 🚀 Deployment Guide - ExcavatorHub Website

## Local Development (Current Setup)

### Running Locally
```bash
cd /home/shaham/projects/exc-site
npx http-server -p 8888
```
Visit: http://localhost:8888

---

## 🌍 Deploy to Production

### Option 1: Netlify (Recommended - Free & Easy)

1. **Sign up at netlify.com**

2. **Connect GitHub repository** (if you have one)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Deploy on Netlify**
   - Go to netlify.com
   - Click "New site from Git"
   - Connect your repository
   - Build command: (leave empty)
   - Publish directory: /
   - Click Deploy

4. **Custom Domain** (Optional)
   - In Netlify dashboard
   - Domain settings → Add custom domain
   - Follow DNS instructions

### Option 2: Vercel (Free & Fast)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /home/shaham/projects/exc-site
   vercel
   ```

3. **Follow prompts** to complete deployment

### Option 3: AWS S3 + CloudFront

1. **Create S3 bucket**
   ```bash
   aws s3 mb s3://excavatorhub-website
   ```

2. **Upload files**
   ```bash
   aws s3 sync . s3://excavatorhub-website --exclude ".git*"
   ```

3. **Enable static website hosting**
   - AWS Console → S3 → Bucket → Properties
   - Enable Static website hosting
   - Index document: index.html

4. **Setup CloudFront** for CDN and SSL

### Option 4: Traditional Hosting (cPanel, etc.)

1. **FTP/SFTP Upload**
   - Connect via FTP client
   - Upload all files to public_html
   - Ensure index.html is in root

2. **Set permissions**
   - index.html: 644
   - product-detail.html: 644
   - All other files: 644
   - Folders: 755

---

## 📧 Setup Email Integration

### Option 1: FormSubmit (Easiest)

Replace form submission in `product-detail.js`:

```javascript
// OLD CODE - Remove this section (around line 77-83)
let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
inquiries.push(formData);
localStorage.setItem('inquiries', JSON.stringify(inquiries));

// REPLACE WITH:
fetch('https://formsubmit.co/your-email@example.com', {
    method: 'POST',
    body: new FormData(form),
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => {
    if (response.ok) {
        showSuccessMessage();
        form.reset();
    }
})
.catch(error => console.error('Error:', error));
```

### Option 2: Firebase Functions

```javascript
// In product-detail.js
const sendInquiry = async (formData) => {
    try {
        const response = await fetch(
            'https://your-region-project.cloudfunctions.net/sendInquiry',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }
        );
        if (response.ok) {
            showSuccessMessage();
            form.reset();
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
```

### Option 3: Backend API (Node.js Example)

```javascript
// backend/app.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/inquiries', async (req, res) => {
    const { productName, name, email, phone, company, message } = req.body;
    
    try {
        // Send to admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'sales@excavatorhub.com',
            subject: `New inquiry for ${productName}`,
            html: `
                <h2>New Product Inquiry</h2>
                <p><strong>Product:</strong> ${productName}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });
        
        // Send confirmation to customer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We received your inquiry - ExcavatorHub',
            html: `
                <p>Hi ${name},</p>
                <p>Thank you for your interest in our ${productName}.</p>
                <p>We will contact you soon at ${phone}.</p>
                <p>Best regards,<br>ExcavatorHub Team</p>
            `
        });
        
        res.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to send inquiry' });
    }
});

app.listen(process.env.PORT || 3000);
```

---

## 🔒 Security Considerations

### 1. HTTPS/SSL Certificate
- Get free certificate from Let's Encrypt
- Enable auto-renewal
- Update `<head>` with security headers

### 2. CORS Headers
```javascript
// If using backend
res.header('Access-Control-Allow-Origin', 'https://excavatorhub.com');
res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
```

### 3. Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5 // limit each IP to 5 requests per windowMs
});
app.post('/api/inquiries', limiter, ...);
```

### 4. Data Validation
```javascript
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (phone) => {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone);
};
```

### 5. Sanitize User Input
```javascript
const sanitizeHtml = require('sanitize-html');
const cleanMessage = sanitizeHtml(message, {
    allowedTags: [],
    allowedAttributes: {}
});
```

---

## 📊 Add Analytics

### Google Analytics
Add to `index.html` and `product-detail.html` in `<head>`:
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

### Track Custom Events
```javascript
// Track inquiry submissions
gtag('event', 'inquiry_submitted', {
    'product_id': product.id,
    'product_name': product.name
});
```

---

## 🔍 SEO Optimization

### 1. Meta Tags
Update in `index.html` and `product-detail.html`:
```html
<meta name="description" content="Premium excavators for construction. XC-12 and XC-18 models available.">
<meta name="keywords" content="excavators, construction equipment, heavy machinery">
<meta property="og:title" content="ExcavatorHub - Premium Excavators">
<meta property="og:description" content="Professional excavators for your project">
<meta property="og:image" content="path-to-image.jpg">
```

### 2. Sitemap
Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://excavatorhub.com/index.html</loc>
    <lastmod>2026-03-14</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://excavatorhub.com/product-detail.html?product=xc-12</loc>
    <lastmod>2026-03-14</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://excavatorhub.com/product-detail.html?product=xc-18</loc>
    <lastmod>2026-03-14</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3. Robots.txt
Create `robots.txt`:
```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://excavatorhub.com/sitemap.xml
```

---

## 🔄 Continuous Deployment

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod
      env:
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

---

## 📈 Performance Optimization

### Image Optimization
```bash
# Compress images before deployment
imagemin images/ --out-dir=images/ --plugin=jpegtran
```

### Lazy Loading
```html
<img src="image.jpg" loading="lazy" alt="Product">
```

### Service Worker for Caching
Create `sw.js`:
```javascript
const CACHE_NAME = 'excavatorhub-v1';
const urls = [
  '/',
  '/index.html',
  '/product-detail.html',
  '/styles.css',
  '/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urls))
  );
});
```

---

## 🔧 Maintenance Checklist

- [ ] Backup website files regularly
- [ ] Monitor server uptime
- [ ] Check for broken links monthly
- [ ] Update product information
- [ ] Monitor inquiry submissions
- [ ] Review and respond to inquiries
- [ ] Update SSL certificate before expiry
- [ ] Monitor analytics
- [ ] Test website on different browsers
- [ ] Check mobile responsiveness

---

## 🆘 Deployment Troubleshooting

### 404 Errors
- Ensure index.html is in root directory
- Check file paths are relative, not absolute
- Verify product folder structure

### Images Not Loading
- Check image paths in HTML
- Ensure images are in correct folder
- Verify file permissions

### Forms Not Working
- Check console for CORS errors
- Verify API endpoint URL
- Check form data is valid JSON
- Test with browser developer tools

### Performance Issues
- Optimize image sizes
- Minify CSS/JS
- Enable gzip compression
- Use CDN for static files
- Reduce API response times

---

## 📞 Support Resources

- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- AWS Documentation: https://docs.aws.amazon.com
- MDN Web Docs: https://developer.mozilla.org

---

**Your website is ready to go live!** 🎉
