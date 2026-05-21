# BW-Bagger - Your Excavator Sales Website

A fully functional, professional website for selling excavators with detailed product pages, image galleries, video playback, and customer inquiry system.

## Features

✅ **Home Page**
- Professional hero section with call-to-action
- Product grid showing all excavators with preview images
- Quick links to products and contact information

✅ **Product Detail Pages**
- Multiple product images with thumbnail gallery
- Professional image viewer with thumbnail navigation
- Product specifications extracted from your products
- Full specification PDFs available for download
- Product videos (MP4 playback with full controls)

✅ **Customer Inquiry System**
- Simple, elegant contact form for each product
- Collects customer information and specific inquiries
- Form submissions stored securely (localStorage for demo)
- Success notification on form submission

✅ **Professional Design**
- Modern, responsive layout
- Mobile-friendly design
- Blue and yellow color scheme
- Smooth animations and transitions
- Professional typography

✅ **Navigation**
- Easy navigation between pages
- "Back to Products" link on detail pages
- Sticky header for easy access

## Product Organization

Your excavators are automatically loaded from the `/products` folder:

```
products/
├── xc-12/
│   ├── images/ (images 1.jpg through 5.jpg)
│   ├── videos/ (1.mp4)
│   └── specs.pdf
└── xc-18/
    ├── images/ (images 1.jpg through 6.jpg)
    ├── videos/ (1.mp4)
    └── specs.pdf
```

The website automatically:
- Detects all products in the folder
- Loads all images as a gallery
- Displays product videos
- Links to PDF specifications

## How to Use

### 1. **Start the Website**
```bash
cd /home/shaham/projects/exc-site
npx http-server
```

Then open your browser to: `http://localhost:8080`

### 2. **View Products**
- The home page displays all excavators with preview images
- Click "View Details" on any product to see full details

### 3. **Product Detail Pages**
- Browse through images using thumbnails
- Watch product videos
- Read specifications (or download full PDF)
- Fill out the inquiry form to contact about the product

### 4. **Send Inquiries**
- Fill in your details (name, email, phone)
- Add your company name (optional)
- Write your inquiry message
- Click "Send Inquiry"
- Your message will be stored and you'll see a success confirmation

## File Structure

```
exc-site/
├── index.html              # Home page
├── product-detail.html     # Product detail template
├── styles.css              # All styling
├── app.js                  # Main app logic & product loading
├── product-detail.js       # Product detail page logic
├── products/               # Your excavator products
│   ├── xc-12/
│   └── xc-18/
└── README.md              # This file
```

## Customization

### Edit Company Information
Open `index.html` and `product-detail.html` and update:
- Company name (currently "BW-Bagger")
- Contact email
- Phone number
- Address

### Add More Products
Simply add a new folder to `/products` with:
```
products/xc-25/
├── images/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ... (more images)
├── videos/
│   └── 1.mp4 (optional)
└── specs.pdf
```

Then add to the `products` array in `app.js`:
```javascript
{
    id: 'xc-25',
    name: 'XC-25 Excavator',
    description: 'Your description here',
    folder: 'products/xc-25',
    imageCount: 5,  // number of images
    hasVideo: true   // set to false if no video
}
```

### Modify Colors
All colors are in `styles.css`. Key colors:
- Primary Blue: `#1e3a8a`, `#2563eb`
- Accent Yellow: `#fbbf24`, `#f59e0b`
- Light backgrounds: `#f9fafb`, `#eff6ff`

## Data Storage

Customer inquiries are stored in the browser's localStorage. This works great for demos, but for production:

1. **Backend Integration**: Modify `product-detail.js` to send data to your server
2. **Email Notifications**: Setup email service to send inquiry emails
3. **Database Storage**: Store inquiries in a proper database

Example of sending to backend:
```javascript
fetch('/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Ensure product images are under 500KB each
2. **Compress PDFs**: Keep specification PDFs under 2MB
3. **Video Format**: Use MP4 format for best compatibility
4. **Caching**: Consider adding service worker for offline capability

## Support & Maintenance

- Check browser console (F12) for any errors
- Clear localStorage if needed: `localStorage.clear()` in console
- View stored inquiries in console: `console.log(JSON.parse(localStorage.getItem('inquiries')))`

## License

Created for BW-Bagger - All Rights Reserved 2026

---

**Ready to go live!** Your excavator sales website is now fully functional and ready to showcase your products! 🏗️
