# 🚀 Step-by-Step Deployment Guide for Funnel-IQ

## ✅ Overview
We'll deploy your Funnel-IQ landing page to https://aykaa.me/funnel-iq/ in 3 simple steps.

**Total Time:** 10-15 minutes

---

## 📦 STEP 1: Download Your Code

### Option A: Download from Emergent
1. In the Emergent interface, look for a download or export option
2. Download the entire `/app/frontend` folder
3. Extract the ZIP file on your computer

### Option B: If no download option
I'll create a public link for you to download the code.

**What you need:** A folder named `frontend` with all the code inside.

---

## 🌐 STEP 2: Deploy to Vercel (5 minutes)

### 2.1 Login to Vercel
1. Open browser and go to: **https://vercel.com/login**
2. Login with your email: **aykaa.me@gmail.com**
3. You'll see the Vercel dashboard

### 2.2 Create New Project
1. Click the **"Add New..."** button (top right)
2. Select **"Project"** from dropdown
3. You'll see "Import Git Repository" page

### 2.3 Deploy Without Git (Manual Upload)
1. Look for **"Deploy without Git"** or **"Browse"** button
2. Click it
3. A file picker will open

### 2.4 Upload Your Code
1. Navigate to where you downloaded the `frontend` folder
2. **Important:** Select the ENTIRE `frontend` folder (not individual files inside it)
3. Click "Select" or "Open"
4. Vercel will start uploading (may take 30-60 seconds)

### 2.5 Configure Project Settings
Vercel will auto-detect Create React App. Verify these settings:

```
Project Name: funnel-iq
Framework Preset: Create React App
Root Directory: ./
Build Command: yarn build (or npm run build)
Output Directory: build
```

**Leave everything as default** - Vercel is smart!

### 2.6 Deploy!
1. Click the **"Deploy"** button
2. Wait 2-3 minutes while Vercel builds your site
3. You'll see a progress screen with logs
4. When done, you'll see: **"Congratulations! Your project has been deployed"**
5. Vercel will give you a URL like: `https://funnel-iq-abc123.vercel.app`

### 2.7 Test the Vercel URL
1. Click on the URL Vercel provided
2. Add `/funnel-iq/` at the end
3. Example: `https://funnel-iq-abc123.vercel.app/funnel-iq/`
4. You should see your Funnel-IQ landing page!

**If it works, proceed to Step 3! 🎉**

---

## 🌍 STEP 3: Connect aykaa.me Domain (5 minutes)

### 3.1 Add Domain in Vercel
1. In Vercel, go to your project
2. Click **"Settings"** (top menu)
3. Click **"Domains"** (left sidebar)
4. Type: **aykaa.me**
5. Click **"Add"**

### 3.2 Vercel Shows DNS Records
Vercel will display records you need to add. It will show:

**For aykaa.me (root domain):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www.aykaa.me:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Keep this page open** - we'll need these values!

### 3.3 Update GoDaddy DNS
1. Open a new tab and go to: **https://dcc.godaddy.com/**
2. Login with your GoDaddy credentials
3. Click **"My Products"**
4. Find **"Domains"** section
5. Click **"DNS"** button next to **aykaa.me**

### 3.4 Delete Old Records (If Any)
1. Look for existing **A** records with Name **@**
2. Look for existing **CNAME** records with Name **www**
3. Click the **3 dots** or **pencil icon** → **Delete** (for each old record)

### 3.5 Add New DNS Records

**Add Record 1:**
1. Click **"Add"** button
2. Select Type: **A**
3. Name: **@** (@ means root domain)
4. Value: **76.76.21.21**
5. TTL: **600** (or 1 hour)
6. Click **"Save"**

**Add Record 2:**
1. Click **"Add"** button again
2. Select Type: **CNAME**
3. Name: **www**
4. Value: **cname.vercel-dns.com**
5. TTL: **600** (or 1 hour)
6. Click **"Save"**

### 3.6 Save All Changes
1. Make sure both records are saved
2. GoDaddy will show "DNS changes saved" message

---

## ⏰ STEP 4: Wait for DNS Propagation (10-30 minutes)

### 4.1 What is DNS Propagation?
DNS changes take time to spread across the internet. Usually 10-30 minutes, sometimes up to 1 hour.

### 4.2 Check Progress
1. Go to: **https://dnschecker.org/**
2. Enter: **aykaa.me**
3. Check if it shows: **76.76.21.21**
4. When most locations show green checkmarks → DNS is ready!

### 4.3 Meanwhile, in Vercel
1. Go back to Vercel → Domains page
2. You'll see aykaa.me with status "Pending"
3. Once DNS propagates, status changes to "Valid"

---

## ✅ STEP 5: Test Your Live Site!

Once DNS is ready, visit these URLs:

**Main Pages:**
- ✅ https://aykaa.me/funnel-iq/
- ✅ https://www.aykaa.me/funnel-iq/
- ✅ https://aykaa.me/funnel-iq/checkout
- ✅ https://aykaa.me/funnel-iq/thank-you

**Legal Pages:**
- ✅ https://aykaa.me/funnel-iq/privacy-policy
- ✅ https://aykaa.me/funnel-iq/terms-of-use
- ✅ https://aykaa.me/funnel-iq/refund-policy

**Test on Mobile Too!**

---

## 🎉 SUCCESS! What's Next?

After deployment, you need to:

### 1. Share URL with Razorpay
Send them: https://aykaa.me/funnel-iq/ for API approval

### 2. Get Razorpay Keys
Once approved, you'll get:
- Key ID
- Key Secret

### 3. Add Razorpay Keys to Vercel
1. Vercel → Project → Settings → Environment Variables
2. Add:
   - `REACT_APP_RAZORPAY_KEY_ID` = [Your Key ID]
3. Redeploy the site

### 4. Add Analytics (Optional)
- Google Analytics
- Facebook Pixel
- Any tracking code you want

---

## ❓ Troubleshooting

**Issue: "Cannot find /funnel-iq"**
- Solution: Wait for DNS propagation OR try the Vercel URL first

**Issue: "Page not found"**
- Solution: Make sure you're adding `/funnel-iq/` at the end of the URL

**Issue: "Styling looks broken"**
- Solution: Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

**Issue: DNS not updating**
- Solution: Wait longer (up to 1 hour) OR clear your browser cache

---

## 📞 Need Help?

If you get stuck at any step:
1. Take a screenshot
2. Tell me which step you're on
3. I'll help you immediately!

**Ready? Let's start with Step 1 - downloading the code!**
