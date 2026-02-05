# 🌅 DuskSpendr

**AI-powered personal finance app designed for Indian students**

DuskSpendr helps college students (18-25) track expenses, manage budgets, and build smart financial habits with the power of AI.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=three.js)

## ✨ Features

- **Smart Expense Tracking** - AI-powered categorization and insights
- **Budget Management** - Set and track spending goals
- **Financial Analytics** - Visual reports and spending patterns
- **Student-Focused** - Designed for college lifestyle and budgets

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yashvinthan/DuskSpendr-website.git

# Navigate to the project
cd DuskSpendr-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   └── privacy/           # Privacy policy
├── components/
│   ├── 3d/                # Three.js 3D components
│   ├── animations/        # Animation components
│   ├── layout/            # Navbar, Footer, PageLoader
│   ├── sections/          # Landing page sections
│   └── ui/                # Reusable UI components
├── data/                  # Static data
├── hooks/                 # Custom React hooks
└── lib/                   # Utilities
```

## 🎨 Design

The design follows a **Dusk/Twilight theme** with:
- Deep purples fading to warm oranges
- Glass morphism effects
- Smooth micro-interactions
- 3D elements and particle effects

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🚢 Deployment

### Self-Hosted (Proxmox LXC / VPS)

```bash
# Clone and install
git clone https://github.com/yashvinthan/DuskSpendr-website.git
cd DuskSpendr-website
npm install

# Build for production
npm run build

# Start production server (runs on port 3000)
npm run start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "duskspendr" -- start
pm2 save
pm2 startup
```

**Nginx reverse proxy** (for duskspendr.in):
```nginx
server {
    listen 80;
    server_name duskspendr.in www.duskspendr.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Then enable SSL with: `certbot --nginx -d duskspendr.in -d www.duskspendr.in`

### Vercel (Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yashvinthan/DuskSpendr-website)

## 📄 License

This project is private and proprietary.

---

Built with 💜 for Indian students
