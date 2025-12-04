# Funnel-IQ Deployment Guide for aykaa.me

## 📋 Overview
This guide will help you deploy the Funnel-IQ landing page to your domain: **aykaa.me/funnel-iq**

## ✅ What's Complete
- ✅ 3 Main Pages: Home, Checkout, Thank You
- ✅ 3 Legal Pages: Privacy Policy, Terms of Use, Refund Policy
- ✅ All content optimized with proper CTAs
- ✅ Mobile responsive design
- ✅ Logo updated and visible
- ✅ Mock payment flow (Razorpay integration ready)
- ✅ Tally form integration on Thank You page
- ✅ Legal disclaimer in footer
- ✅ All emails updated to support@aykaa.me

## 🎯 Current Routes
- `/` → Home page
- `/checkout` → Checkout page
- `/thank-you` → Thank You page
- `/privacy-policy` → Privacy Policy
- `/terms-of-use` → Terms of Use
- `/refund-policy` → Refund Policy

## 🚀 Deployment Options

### Option 1: Deploy to aykaa.me with /funnel-iq prefix

**Step 1: Update React Router Basename**
We need to update `App.js` to use `/funnel-iq` as the base path.

**Step 2: Build the Application**
```bash
cd /app/frontend
yarn build
```

**Step 3: Deploy Files**
Copy the `build` folder contents to your web server at `aykaa.me/funnel-iq/`

**Step 4: Configure Web Server**
Ensure your web server (Apache/Nginx) is configured to:
- Serve static files from `/funnel-iq/`
- Redirect all `/funnel-iq/*` requests to `/funnel-iq/index.html` for client-side routing

### Option 2: Use Subdomain (Recommended)
Deploy to `funnel-iq.aykaa.me` instead:
- Easier to manage
- No routing conflicts
- Cleaner URLs

### Option 3: Deploy Directly to aykaa.me Root
If Funnel-IQ is the primary site, deploy to root domain directly.

## 🔧 Required Changes for /funnel-iq Path

If you want to use `www.aykaa.me/funnel-iq/*` paths:

1. **Update App.js** - Add basename to BrowserRouter:
```javascript
<BrowserRouter basename="/funnel-iq">
  <Routes>
    <Route path="/" element={<Home />} />
    // ... other routes
  </Routes>
</BrowserRouter>
```

2. **Update .env** - If needed, adjust REACT_APP_BACKEND_URL

3. **Web Server Configuration**

**For Nginx:**
```nginx
location /funnel-iq {
    alias /var/www/aykaa.me/funnel-iq;
    try_files $uri $uri/ /funnel-iq/index.html;
}
```

**For Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /funnel-iq/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /funnel-iq/index.html [L]
```

## 📝 Post-Deployment Setup

### 1. Add Razorpay Keys
Once you have Razorpay approval:
- Store keys in environment variables
- Update backend to process real payments
- Test payment flow thoroughly

### 2. Add Analytics Tracking Code
Insert your tracking code in `public/index.html`:
```html
<!-- Google Analytics / Facebook Pixel / etc -->
```

### 3. Test All Links
- ✅ All navigation links work
- ✅ Policy pages accessible
- ✅ Tally form opens correctly
- ✅ Email links work (support@aykaa.me)
- ✅ Mobile responsive

### 4. SSL Certificate
Ensure SSL is properly configured for:
- www.aykaa.me
- aykaa.me

## 🌐 Hosting Platforms

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set base path to `/funnel-iq` in settings
4. Deploy

### Netlify
Similar to Vercel with custom domain configuration

### Traditional Hosting (cPanel, VPS)
1. Build locally: `yarn build`
2. Upload `build/` folder contents
3. Configure web server as shown above

## 📞 Support
For deployment issues, contact support@aykaa.me

## 🎉 Next Steps After Deployment
1. Share the live URL for Razorpay API key approval
2. Add Razorpay keys to backend
3. Implement real payment processing
4. Add analytics tracking
5. Set up email notifications for orders
6. Create WhatsApp notification system
7. Generate and deliver PDF reports

---

**Ready to Deploy?** Let me know your hosting setup and I'll provide specific instructions!
