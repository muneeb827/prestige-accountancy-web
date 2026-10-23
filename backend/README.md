# Prestige Accountancy Services - Backend API

Express & TypeScript Backend API server for handling leads, inquiries, and future database/CRM integrations.

## Features
- **RESTful Endpoints:**
  - `GET /api/health` - Server health and uptime check
  - `POST /api/contact` - Captures inquiries from the frontend Contact form
  - `POST /api/quote` - Captures inquiries from hero quote forms
- **CORS Configured:** Allows requests from `http://localhost:3000` and the production Vercel app.
- **Email Notifications:** Ready for SMTP (Gmail, Outlook, SendGrid, Resend) to automatically email leads to `info@prestigeaccountancy.co.uk`.
- **TypeScript:** Strict type-safe models and controllers.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment:
   ```bash
   cp .env.example .env
   ```

3. Run in development mode:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   npm start
   ```
