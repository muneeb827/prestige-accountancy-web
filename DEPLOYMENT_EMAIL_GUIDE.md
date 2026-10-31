# Actvise Accountancy & Tax Services Ltd
## Final Production Hosting & Email Activation Guide

> [!NOTE]
> **Purpose of this Document:**  
> This guide is a complete, step-by-step handover and execution reference for when you deploy the **Actvise Accountancy Services** website onto the client's real production hosting (Hostinger, cPanel, VPS, or Cloud). It outlines the exact steps to connect the official inbox (`info@actvise.co.uk`) via Nodemailer while keeping all confidential credentials 100% secure.

---

## 1. Executive Summary & Current Status

The website codebase is already **100% prepared and pre-wired for Nodemailer**. No code modifications are needed. When moving to the client's live hosting, email delivery only requires creating a secure `.env` file with their credentials.

### What is Already Completed in Code:
- ✅ **Built-in Nodemailer Dispatch:** Located in `frontend/src/lib/email.ts` and `frontend/src/app/api/contact/route.ts`.
- ✅ **Branded Email Template:** Sends rich HTML emails styled in Actvise corporate colors (`#00368C` Corporate Navy + `#2B7EFE` Electric Blue).
- ✅ **1-Click Reply-To:** Client's inquiry email is automatically set as `replyTo`, allowing Actvise staff to click "Reply" directly in their mail client.
- ✅ **Security & Anti-Abuse:**
  - Strict RFC email validation.
  - HTML character escaping to prevent injection attacks.
  - Header newline stripping to prevent email header injection.
  - Hidden honeypot field (`company_website_url`) to block automated bot spam.
  - Rate limiting (maximum 5 submissions per 10 minutes per IP).
- ✅ **Gmail Web Compose Redirect:** All email text links (`info@actvise.co.uk`) on the website redirect directly to Gmail Web Compose in a new tab.

---

## 2. The 5 Production Environment Variables

When deploying on the client's live hosting, these 5 variables must be defined in the production environment:

```env
# ===================================================
# ACTVISE ACCOUNTANCY - SECURE PRODUCTION EMAIL CONFIG
# ===================================================
SMTP_HOST=mail.actvise.co.uk
SMTP_PORT=465
SMTP_USER=info@actvise.co.uk
SMTP_PASS=YOUR_ACTVISE_EMAIL_PASSWORD_HERE
NOTIFICATION_RECEIVER=info@actvise.co.uk
```

### Parameter Reference Table:

| Key | Value | Purpose |
| :--- | :--- | :--- |
| `SMTP_HOST` | `mail.actvise.co.uk` | The outgoing cPanel Exim mail server for the domain. |
| `SMTP_PORT` | `465` | SSL secure encrypted connection port. |
| `SMTP_USER` | `info@actvise.co.uk` | Official authorized mailbox user. |
| `SMTP_PASS` | *(Client's email password)* | The mailbox password created in cPanel / Hostinger. |
| `NOTIFICATION_RECEIVER` | `info@actvise.co.uk` | Destination address where new client leads are delivered. |

---

## 3. Step-by-Step Deployment Instructions

### Scenario A: cPanel / Hostinger Cloud (Setup via Node.js App)

If deploying to cPanel or Hostinger hPanel Node.js Selector:

1. **Upload Project Files:**
   - Upload the project build files to the client's `public_html` or application directory.
   - Ensure the `.git` folder and sensitive files are **not** publicly accessible.
2. **Setup Node.js Environment:**
   - In cPanel, click **"Setup Node.js App"**.
   - Select Node.js version **20.x** or **22.x LTS**.
   - Application Root: e.g. `/home/username/actvise-web`
   - Application URL: `https://actvise.co.uk`
3. **Configure Environment Variables Securely:**
   - In the cPanel Node.js App dashboard, locate **"Environment Variables"** section.
   - Add the 5 keys (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `NOTIFICATION_RECEIVER`).
   - *Alternative:* Create a `.env` file in the application root directory (above `public_html` so it can never be downloaded by web visitors).
4. **Run Production Build:**
   - Open Terminal or cPanel SSH:
     ```bash
     npm install --production=false
     npm run build
     ```
5. **Restart Application:**
   - Click **"Restart"** in the cPanel Node.js manager.

---

### Scenario B: Cloud Platform (Vercel / Railway / Render on Client's Account)

If the client prefers managed cloud hosting:

1. Import the repository into the client's team account.
2. Go to **Project Settings** $\rightarrow$ **Environment Variables**.
3. Add the 5 variables:
   - `SMTP_HOST` = `mail.actvise.co.uk`
   - `SMTP_PORT` = `465`
   - `SMTP_USER` = `info@actvise.co.uk`
   - `SMTP_PASS` = *(Client's password)*
   - `NOTIFICATION_RECEIVER` = `info@actvise.co.uk`
4. Trigger a **Redeploy**.

---

### Scenario C: Linux VPS (Ubuntu / Nginx / PM2)

If deploying on a dedicated VPS:

1. Create a secure `.env.production` file:
   ```bash
   nano /var/www/actvise-web/.env.production
   ```
2. Paste the 5 environment variables.
3. Lock down file permissions so only the Node user can read it:
   ```bash
   chmod 600 /var/www/actvise-web/.env.production
   ```
4. Start Next.js with PM2:
   ```bash
   pm2 start npm --name "actvise-web" -- start
   pm2 save
   ```

---

## 4. Security & Confidentiality Best Practices

> [!IMPORTANT]
> **Zero Credential Exposure Guarantee:**
> - **Never commit `.env` to Git:** The `.gitignore` file is already configured to prevent `.env`, `.env.local`, and `.env.production` from ever being pushed to GitHub.
> - **Client Handover Protocol:** When handing over to the client, you can either:
>   1. Ask the client to type their password directly into the cPanel / hosting environment settings screen during a screen-share session.
>   2. Or enter the password once on their live hosting and immediately delete any temporary notes.
> - **Change Password After Setup:** The client can always change their mailbox password in cPanel if they ever suspect credentials were shared.

---

## 5. DNS Deliverability Checklist (Prevent Emails Going to Spam)

To ensure notifications and outgoing emails achieve **100% inbox delivery** (and never end up in the Spam / Junk folder), verify these DNS records in Hostinger / cPanel Zone Editor for `actvise.co.uk`:

| Record Type | Host | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **MX** | `@` | `mail.actvise.co.uk` (Priority 0) | Directs incoming mail to the Hostinger server. |
| **TXT (SPF)** | `@` | `v=spf1 +a +mx +ip4:149.255.62.171 ~all` | Authorizes the server IP (`149.255.62.171`) to send mail for the domain. |
| **TXT (DKIM)** | `default._domainkey` | *(Generated automatically by cPanel Email Deliverability tool)* | Cryptographically signs outgoing emails. |
| **TXT (DMARC)** | `_dmarc` | `v=DMARC1; p=none; sp=none; rua=mailto:info@actvise.co.uk` | Email authentication protocol. |

> [!TIP]
> In cPanel, navigate to **Email** $\rightarrow$ **Email Deliverability**. If you see a green badge saying **"Valid"** next to `actvise.co.uk`, SPF and DKIM are already working perfectly!

---

## 6. Post-Deployment Verification & Testing Plan

Once the variables are configured and the site is live:

1. Navigate to `https://actvise.co.uk/contact`.
2. Fill out the consultation form with test data:
   - **Name:** Test Inquirer
   - **Email:** your personal email
   - **Phone:** +44 7949 446368
   - **Service:** Company Annual Accounts
   - **Message:** "This is a live deployment verification test for Actvise email dispatch."
3. Click **"Send Message"**.
4. Check the following:
   - Website displays green success banner: *"Thank you! Your inquiry has been sent to Actvise Accountancy & Tax Services."*
   - Within 5-15 seconds, check `info@actvise.co.uk` inbox (on webmail or mobile).
   - Confirm receipt of the branded HTML lead email.
   - Click "Reply" in the mail client to confirm the reply-to address points to the inquirer's email.

---

## 7. Quick Reference Card for Final Handover

```
Website Domain:     https://actvise.co.uk
Staging / Demo URL: https://actvise-accountancy-web.vercel.app
Business Inbox:     info@actvise.co.uk
Mail Server (SMTP): mail.actvise.co.uk (Port 465 SSL)
Codebase Status:    100% Ready (Nodemailer pre-configured)
Action Required:    Inject the 5 SMTP environment variables upon final hosting deployment.
```
