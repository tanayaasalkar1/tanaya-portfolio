# 🚀 Tanaya Asalkar — MERN Stack Portfolio

A professional portfolio built with the **MERN Stack**:  
**M**ongoDB · **E**xpress.js · **R**eact.js (Vite) · **N**ode.js

---

## 📁 Project Structure

```
tanaya-portfolio/
├── client/                  ← React (Vite) frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx       ← Particle canvas + typewriter
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Contact.jsx    ← Hits Express API
│   │   │   ├── Footer.jsx
│   │   │   └── shared.jsx     ← Reveal animations, Tags
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── vite.config.js
│
├── server/                  ← Node.js + Express backend
│   ├── models/
│   │   └── Contact.js       ← Mongoose schema
│   ├── controllers/
│   │   └── contactController.js
│   ├── routes/
│   │   └── contact.js
│   ├── index.js             ← Express entry point
│   └── .env.example
│
├── package.json             ← Root scripts (runs both)
└── README.md
```

---

## ⚙️ Local Development Setup

### Step 1 — Clone & Install

```bash
git clone https://github.com/yourusername/tanaya-portfolio.git
cd tanaya-portfolio
npm run install-all
```

### Step 2 — MongoDB Atlas Setup

1. Go to **https://cloud.mongodb.com** → Sign up / Log in
2. Create a **free cluster** (M0)
3. Create a **database user** (username + password)
4. Add your IP to **Network Access** (or use `0.0.0.0/0` for all)
5. Click **Connect → Drivers** → copy the connection string

### Step 3 — Server Environment Variables

```bash
cd server
cp .env.example .env
# Edit .env with your values:
```

```env
PORT=5000
MONGO_URI=mongodb+srv://youruser:yourpass@cluster0.xxxxx.mongodb.net/tanaya_portfolio
CLIENT_URL=http://localhost:5173
```

### Step 4 — Run Both Servers

```bash
# From root directory
npm run dev
```

This runs:
- **Frontend** → http://localhost:5173
- **Backend API** → http://localhost:5000

---

## 🌐 Deploy to Vercel (Frontend) + Render (Backend)

### Backend → Render (Free)

1. Push project to GitHub
2. Go to **https://render.com** → New → **Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
5. Add **Environment Variables**:
   ```
   MONGO_URI = mongodb+srv://...
   NODE_ENV = production
   CLIENT_URL = https://your-vercel-url.vercel.app
   PORT = 5000
   ```
6. Click **Deploy** → Copy your Render URL (e.g. `https://tanaya-api.onrender.com`)

---

### Frontend → Vercel

1. Go to **https://vercel.com** → New Project → Import GitHub repo
2. Configure:
   - **Root Directory**: `client`
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add **Environment Variable**:
   ```
   VITE_API_URL = https://tanaya-api.onrender.com
   ```
4. In `client/vite.config.js`, update proxy for production:
   ```js
   // The proxy only works in dev. In production, use VITE_API_URL
   ```
   And in `Contact.jsx` update axios call:
   ```js
   const API = import.meta.env.VITE_API_URL || ''
   await axios.post(`${API}/api/contact`, form)
   ```
5. Click **Deploy** → Your site is live! 🎉

---

### Auto-Deploy on Push

Both Vercel and Render auto-deploy on every `git push` to `main`:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
# → Frontend live in ~30s on Vercel
# → Backend live in ~90s on Render
```

---

## 🎨 Customization

| What | Where |
|---|---|
| Colors | `client/src/index.css` → `:root` variables |
| Projects | `client/src/components/Projects.jsx` |
| Skills | `client/src/components/Skills.jsx` |
| Experience | `client/src/components/Experience.jsx` |
| Personal info | `client/src/components/Hero.jsx` |
| Contact API | `server/controllers/contactController.js` |

---

Built with ❤️ by **Tanaya Asalkar**
