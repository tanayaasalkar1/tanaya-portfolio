# 🚀 Tanaya Asalkar Portfolio — MERN Stack Deploy Guide

## Project Structure
```
tanaya-portfolio/
├── client/              ← React (Vite) frontend
│   ├── src/
│   │   ├── components/  ← Navbar, Hero, Skills, Projects…
│   │   ├── data/        ← portfolio.js  (edit your info here)
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
├── server/              ← Express + MongoDB backend
│   ├── index.js
│   └── .env             (create from .env.example)
└── package.json
```

---

## 🖥️ Local Development

### 1. Install dependencies
```bash
cd tanaya-portfolio
npm run install:all
```

### 2. Configure backend environment
```bash
cp server/.env.example server/.env
# Edit server/.env with your values:
# MONGO_URI=mongodb+srv://...
# SMTP_USER=tanayaasalkar@gmail.com
# SMTP_PASS=your_gmail_app_password
```

### 3. Get MongoDB Atlas URI (free)
1. Go to https://cloud.mongodb.com → Create free cluster
2. Database Access → Add user + password
3. Network Access → Allow all IPs (0.0.0.0/0)
4. Connect → Drivers → Copy connection string
5. Paste in server/.env as MONGO_URI

### 4. Run both servers
```bash
npm run dev
# Frontend → http://localhost:5173
# Backend  → http://localhost:5000
```

---

## ☁️ Deploy Frontend to Vercel

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
# Create repo on github.com, then:
git remote add origin https://github.com/tanayaasalkar1/tanaya-portfolio.git
git push -u origin main
```

### Step 2 — Import to Vercel
1. Go to **https://vercel.com** → Sign in with GitHub
2. Click **"Add New Project"** → Import your repo
3. Set **Root Directory** to `client`
4. Framework: **Vite** (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy** ✅

### Step 3 — Frontend lives at:
```
https://tanaya-portfolio.vercel.app
```

---

## ☁️ Deploy Backend to Render (free)

### Step 1 — Go to https://render.com → New Web Service

### Step 2 — Connect GitHub repo
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `node index.js`
- Environment: **Node**

### Step 3 — Add Environment Variables in Render dashboard:
```
PORT=5000
MONGO_URI=mongodb+srv://...
CLIENT_URL=https://tanaya-portfolio.vercel.app
SMTP_USER=tanayaasalkar@gmail.com
SMTP_PASS=your_gmail_app_password
```

### Step 4 — Get your backend URL, e.g.:
```
https://tanaya-portfolio-api.onrender.com
```

---

## 🔗 Connect Frontend to Backend on Vercel

In Vercel dashboard → your project → **Settings → Environment Variables**:
```
VITE_API_URL=https://tanaya-portfolio-api.onrender.com
```

Update `client/src/components/Contact.jsx` line:
```js
// Change:
const res = await fetch("/api/contact", ...);
// To:
const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, ...);
```

Redeploy Vercel → done! 🎉

---

## 🔄 Auto-Deploy

Every `git push` to `main` auto-redeploys both Vercel & Render. Zero config.

```bash
git add . && git commit -m "Update" && git push origin main
```

---

## 🎨 Customization

| What to change | File |
|---|---|
| Personal info, links, stats | `client/src/data/portfolio.js` |
| Colors / theme | `client/src/index.css` → `:root` CSS variables |
| Add a project | `client/src/data/portfolio.js` → projects array |
| Update skills | `client/src/data/portfolio.js` → skills array |
| Contact form backend | `server/index.js` |

---

## 📦 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Vite, CSS3 |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas + Mongoose |
| Email | Nodemailer (Gmail) |
| Deploy (FE) | Vercel |
| Deploy (BE) | Render |
