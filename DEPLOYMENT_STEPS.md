# 🚀 Funnel-IQ Deployment Steps for aykaa.me

## ✅ Pre-Deployment Checklist
- ✅ Code updated for `/funnel-iq` path
- ✅ GitHub account ready: aykaa.me@gmail.com
- ✅ Vercel account ready: aykaa.me@gmail.com
- ✅ GoDaddy domain: aykaa.me

---

## 📦 Step 1: Push Code to GitHub

### 1.1 Initialize Git Repository (In Emergent Terminal)

I'll run these commands for you:

```bash
cd /app/frontend
git init
git add .
git commit -m "Initial commit - Funnel-IQ landing page"
```

### 1.2 Create GitHub Repository

**You need to do this part:**

1. Go to: https://github.com/new
2. Login with: aykaa.me@gmail.com
3. Repository name: `funnel-iq-landing`
4. Description: `Funnel-IQ conversion audit landing page`
5. Set to: **Public** (or Private, your choice)
6. **DO NOT** check "Add README", "Add .gitignore", or "Choose license"
7. Click "Create repository"

### 1.3 Connect and Push

After creating the repository, GitHub will show you commands. You'll need to provide me with:
- Your GitHub personal access token (I'll guide you to create one)

OR I'll prepare a ZIP file you can upload.

---

## 🔧 Step 2: Deploy to Vercel

### 2.1 Connect Vercel to GitHub

1. Go to: https://vercel.com/login
2. Login with: aykaa.me@gmail.com
3. Click "Add New..." → "Project"
4. Click "Import Git Repository"
5. Select your `funnel-iq-landing` repository
6. Click "Import"

### 2.2 Configure Build Settings

Vercel will auto-detect React. Verify these settings:
- **Framework Preset**: Create React App
- **Root Directory**: `frontend`
- **Build Command**: `yarn build`
- **Output Directory**: `build`

### 2.3 Environment Variables (Optional for now)
Skip this for now - we'll add Razorpay keys later

### 2.4 Deploy
Click "Deploy" button and wait 2-3 minutes

You'll get a URL like: `https://funnel-iq-landing.vercel.app`

---

## 🌐 Step 3: Connect aykaa.me Domain

### 3.1 Add Domain in Vercel

1. After deployment, go to your project settings
2. Click "Domains" tab
3. Add domain: `aykaa.me`
4. Vercel will show you DNS records to add

### 3.2 Update GoDaddy DNS

1. Login to GoDaddy: https://dcc.godaddy.com/
2. Go to: My Products → Domains → aykaa.me → DNS
3. Add these records (Vercel will provide exact values):

**For Root Domain (aykaa.me):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)
- TTL: 600

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: 600

### 3.3 Wait for DNS Propagation
- Takes 5-60 minutes
- Check status: https://dnschecker.org

---

## ✅ Step 4: Verify Deployment

Once DNS propagates, test these URLs:
- ✅ https://aykaa.me/funnel-iq/
- ✅ https://aykaa.me/funnel-iq/checkout
- ✅ https://aykaa.me/funnel-iq/thank-you
- ✅ https://aykaa.me/funnel-iq/privacy-policy

---

## 🔑 Alternative: Direct File Upload Method

If GitHub is too complex, I can:
1. Create a production build
2. Give you a ZIP file
3. You upload to Vercel directly

Would you prefer this simpler method?

---

## 📞 Next Steps After Deployment

1. ✅ Share live URL with Razorpay for approval
2. ✅ Get Razorpay API keys
3. ✅ Add keys to Vercel environment variables
4. ✅ Implement real payment processing
5. ✅ Add Google Analytics tracking code
6. ✅ Test payment flow end-to-end

---

**Ready to start? Let me know and I'll begin with Step 1!**
