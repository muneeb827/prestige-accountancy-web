# Actvise Accountancy & Tax Services Ltd - Monorepo

Complete Full-Stack codebase for Actvise Accountancy & Tax Services Ltd (`https://actvise-accountancy-web.vercel.app`).

## Project Structure

```
actvise-accountancy-web/
├── frontend/                 # Next.js 16 Web Application
│   ├── src/
│   │   ├── app/              # Next.js App Router (41 pre-rendered pages & SEO metadata)
│   │   ├── components/       # Responsive UI Components (Navbar, Footer, DynamicFavicon, Tools)
│   │   ├── lib/              # Email Dispatch Service (Nodemailer)
│   │   └── data/             # Site Data, Services Details, and Location Coverage
│   ├── public/               # Static Assets (Official SVG Logos, Favicons, Brand Identity)
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
│
├── backend/                  # Node.js & Express API Server
│   ├── src/
│   │   ├── config/           # Server and SMTP Configuration
│   │   ├── controllers/      # Contact & Lead Form Handlers
│   │   ├── models/           # Inquiry Schema & TypeScript Interfaces
│   │   ├── routes/           # RESTful Endpoints (/api/contact, /api/health)
│   │   ├── services/         # Email Notification Service (Nodemailer)
│   │   └── server.ts         # Express App Entrypoint
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
└── README.md                 # Project Overview & Architecture Guide
```

## Quick Start

### 1. Frontend (Next.js Website)
```bash
cd frontend
npm install
npm run dev
# Website opens at http://localhost:3000
```

To build for production:
```bash
npm run build
```

### 2. Backend (Express API Server)
```bash
cd backend
npm install
npm run dev
# API server runs at http://localhost:5000
```

## Production Deployment
- **Frontend:** Hosted and automatically deployed to Vercel via GitHub `main` branch with Root Directory configured to `frontend`.
- **Live URLs:** 
  - Production: [https://actvise.co.uk](https://actvise.co.uk)
  - Vercel Deployment: [https://actvise-accountancy-web.vercel.app](https://actvise-accountancy-web.vercel.app)
  - Secondary Alias: [https://actvise-accountancy-services.vercel.app](https://actvise-accountancy-services.vercel.app)
