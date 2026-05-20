# Inquiry Management Guide

## How to View Customer Inquiries

Customer inquiries are stored in your browser's local storage. Here's how to access them:

### 📱 View Inquiries in Browser

1. **Open the website** in your browser
2. **Press F12** to open Developer Tools
3. **Go to Console tab**
4. **Paste this code**:
   ```javascript
   console.table(JSON.parse(localStorage.getItem('inquiries') || '[]'))
   ```
5. **Press Enter** - You'll see all inquiries in a nice table!

### 📋 Get All Inquiries as JSON

```javascript
console.log(JSON.parse(localStorage.getItem('inquiries')))
```

### 🗑️ Clear All Inquiries

```javascript
localStorage.removeItem('inquiries')
```

### 📤 Export Inquiries to CSV

```javascript
const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
const csv = [
  ['Timestamp', 'Product', 'Name', 'Email', 'Phone', 'Company', 'Message'],
  ...inquiries.map(i => [
    new Date(i.timestamp).toLocaleString(),
    i.productName,
    i.name,
    i.email,
    i.phone,
    i.company,
    `"${i.message}"`
  ])
].map(row => row.join(',')).join('\n');
console.log(csv);
copy(csv);
```

Then paste into Excel/Google Sheets.

### 📧 Example Inquiry Data

Each inquiry contains:
```javascript
{
  productId: "xc-12",           // Which product
  productName: "XC-12 Excavator",
  name: "John Doe",             // Customer name
  email: "john@example.com",    // Customer email
  phone: "+1-555-123-4567",     // Customer phone
  company: "ABC Construction",  // Customer company
  message: "Interested in...",  // Their message
  timestamp: "2026-03-14T10:30:00.000Z"  // When submitted
}
```

## 🔗 Integration with Real Backend

For production, replace the localStorage code in `product-detail.js`:

**Current code (line ~77):**
```javascript
// Store in localStorage (simulating backend)
let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
inquiries.push(formData);
localStorage.setItem('inquiries', JSON.stringify(inquiries));
```

**Replace with your backend call:**
```javascript
// Send to your backend
fetch('/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => {
    if (response.ok) {
        showSuccessMessage();
        form.reset();
    }
})
.catch(error => console.error('Error:', error));
```

## 📨 Email Notification Setup

### Node.js + Nodemailer Example

```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

app.post('/api/inquiries', (req, res) => {
    const inquiry = req.body;
    
    // Send to admin
    transporter.sendMail({
        from: 'your-email@gmail.com',
        to: 'sales@excavatorhub.com',
        subject: `New inquiry for ${inquiry.productName}`,
        html: `
            <h2>New Product Inquiry</h2>
            <p><strong>Product:</strong> ${inquiry.productName}</p>
            <p><strong>Name:</strong> ${inquiry.name}</p>
            <p><strong>Email:</strong> ${inquiry.email}</p>
            <p><strong>Phone:</strong> ${inquiry.phone}</p>
            <p><strong>Company:</strong> ${inquiry.company}</p>
            <p><strong>Message:</strong></p>
            <p>${inquiry.message}</p>
        `
    });
    
    // Send confirmation to customer
    transporter.sendMail({
        from: 'your-email@gmail.com',
        to: inquiry.email,
        subject: 'We received your inquiry',
        html: `
            <p>Hi ${inquiry.name},</p>
            <p>Thank you for your interest in our ${inquiry.productName}.</p>
            <p>We will contact you soon at ${inquiry.phone}.</p>
            <p>Best regards,<br>ExcavatorHub Team</p>
        `
    });
    
    res.json({ success: true });
});
```

## 💾 Database Storage Example (MongoDB)

```javascript
const inquirySchema = {
    productId: String,
    productName: String,
    name: String,
    email: String,
    phone: String,
    company: String,
    message: String,
    timestamp: Date,
    status: { type: String, default: 'new' }, // new, contacted, closed
    notes: String
};

app.post('/api/inquiries', async (req, res) => {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.json({ success: true, id: inquiry._id });
});

app.get('/api/inquiries', async (req, res) => {
    const inquiries = await Inquiry.find().sort({ timestamp: -1 });
    res.json(inquiries);
});
```

## 🎯 Best Practices

1. **Backup Your Data**
   - Regularly export inquiries to CSV
   - Store in secure location

2. **Respond Promptly**
   - Aim to respond within 24 hours
   - Mark as "contacted" when you reach out

3. **Track Status**
   - new → contacted → quoted → closed
   - Add notes to inquiries

4. **Privacy**
   - Respect customer privacy
   - Don't share emails without permission
   - Follow GDPR/privacy laws

5. **Follow Up**
   - Send professional quotes
   - Provide technical specifications
   - Answer specific questions

## 📊 Analytics

Track which products get the most inquiries:

```javascript
const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
const byProduct = {};
inquiries.forEach(i => {
    byProduct[i.productName] = (byProduct[i.productName] || 0) + 1;
});
console.table(byProduct);
```

---

**For questions or technical help, check the README.md and QUICKSTART.md files.**
