# Actvise Accountancy & Tax Services Ltd
## Final Production Hosting & Email Activation Guide (Roman Urdu)

> [!NOTE]
> **Is Document Ka Maqsad:**  
> Jab client aapko unki real hosting (Hostinger, cPanel, ya VPS) ka login dega aur website ko final live domain (`https://actvise.co.uk`) par chalana hoga, to email aur deployment ke liye kya kya steps karne hain, yeh document aapko step-by-step guide karega. Is tarike se client ki sensitive information (passwords) bhi 100% secure rahegi aur website bhi smoothly live ho jayegi.

---

## 1. Codebase Ki Current Position (Sab Kuch Already Ready Hai)

Website ke code ke andar Nodemailer aur security ka saara setup **already 100% complete** ho chuka hai. Code me aapko ek line bhi change nahi karni padegi:

- ✅ **Nodemailer Service Ready:** Code direct `info@actvise.co.uk` par email bhejne ke liye set hai.
- ✅ **Actvise Branded Email Design:** Lead notification ka email Actvise ke official Navy Blue (`#00368C`) aur Electric Blue (`#2B7EFE`) colors me designed hai, jisme client ka name, phone, email, service aur message table form me aata hai.
- ✅ **1-Click Direct Reply:** Email me `replyTo` customer ka email set hota hai. Actvise team apne inbox me sirf "Reply" ka button dabayegi to direct customer ko jawab chala jayega.
- ✅ **Spam & Hacker Protection:** 
  - Fake emails ko rokne ke liye strict validation.
  - Bots ko block karne ke liye invisible honeypot field.
  - Spamming rokne ke liye Rate Limiting (har IP par 10 minutes me maximum 5 messages).
- ✅ **Gmail Web Compose:** Website par email text par click karne se direct Gmail Compose open hota hai.

---

## 2. Wo 5 Variables Jo Production Server Par Chahiye Honge

Jab aap client ke server par website deploy karenge, to server ke `.env` file me sirf yeh **5 lines** add karni hain:

```env
# ===================================================
# ACTVISE ACCOUNTANCY - SECURE PRODUCTION EMAIL CONFIG
# ===================================================
SMTP_HOST=mail.actvise.co.uk
SMTP_PORT=465
SMTP_USER=info@actvise.co.uk
SMTP_PASS=Aapka_Email_Password_Yahan_Aayega
NOTIFICATION_RECEIVER=info@actvise.co.uk
```

### In 5 Lines Ka Matlab:

| Key (Naam) | Value (Setting) | Asaan Matlab |
| :--- | :--- | :--- |
| **`SMTP_HOST`** | `mail.actvise.co.uk` | Yeh Hostinger cPanel ka outgoing mail server hai. |
| **`SMTP_PORT`** | `465` | Yeh secure SSL encrypted port hai (emails safe transfer hoti hain). |
| **`SMTP_USER`** | `info@actvise.co.uk` | Official email address jiske zariye email send hogi. |
| **`SMTP_PASS`** | *(Client ka password)* | Wahi password jo email banate waqt cPanel me lagaya gaya tha. |
| **`NOTIFICATION_RECEIVER`** | `info@actvise.co.uk` | Wo email jahan website ki saari leads pohnchengi. |

---

## 3. Client Ke Hostinger / cPanel Par Deploy Karne Ka Step-by-Step Tarika

### Step 1: cPanel Me Node.js App Setup Karein
1. Client ke **cPanel** me login karein.
2. **Software** section me ja kar **"Setup Node.js App"** par click karein.
3. **"Create Application"** ka button dabayein:
   - **Node.js Version:** `20.x` ya `22.x` select karein.
   - **Application Mode:** `Production` select karein.
   - **Application Root:** e.g. `actvise-web` (ya jo folder name aap rakhein).
   - **Application URL:** `actvise.co.uk` select karein.
4. **Create** par click kar dein.

---

### Step 2: Website Files Upload Karein
1. cPanel ke **File Manager** me jayein.
2. Apne project folder me website ka build aur files upload karein.
3. **Khas Khayal:** `.git` folder upload na karein taake size light rahe aur secure rahe.

---

### Step 3: Secure `.env` File Banayein (Password Yahan Save Hoga)
1. Project ke main root folder me ek new file create karein jiska naam rakhein: **`.env`**
2. Is file ke andar Section 2 wali 5 lines paste kar dein:
   ```env
   SMTP_HOST=mail.actvise.co.uk
   SMTP_PORT=465
   SMTP_USER=info@actvise.co.uk
   SMTP_PASS=client_ka_real_password
   NOTIFICATION_RECEIVER=info@actvise.co.uk
   ```
3. File **Save** kar dein.

> [!IMPORTANT]
> **Client Data Security Tip:**  
> Yeh `.env` file server ke andar private rehti hai. Bahir se koi bhi visitor ya browser is file ko open ya download nahi kar sakta. Aur kyunki yeh file Git me commit nahi hoti, is liye password internet par kahin leak nahi hoga.

---

### Step 4: Dependencies Install Aur Run Karein
1. cPanel Node.js App page par wapas jayein.
2. Top par jo **"Enter to the virtual environment"** wali command di hoti hai, use cPanel Terminal me run karein.
3. Yeh commands chalayein:
   ```bash
   npm install --production
   npm run build
   ```
4. cPanel Node.js page par **"Restart"** ka button daba dein.
5. Ab website `https://actvise.co.uk` par live start ho jayegi!

---

## 4. Agar Client Vercel / Cloud Account Use Karein (Doosra Tarika)

Agar client chahe ke website Vercel par hi unke apne account se live ho:

1. Client ke Vercel account me project import karein.
2. Project ke **Settings** $\rightarrow$ **Environment Variables** me jayein.
3. Wahan yeh 5 variables daal dein:
   - `SMTP_HOST` = `mail.actvise.co.uk`
   - `SMTP_PORT` = `465`
   - `SMTP_USER` = `info@actvise.co.uk`
   - `SMTP_PASS` = *(Client ka password)*
   - `NOTIFICATION_RECEIVER` = `info@actvise.co.uk`
4. Domain settings me ja kar client ka official domain `actvise.co.uk` connect kar dein.
5. **Redeploy** dabayein, website unke official domain par live ho jayegi.

---

## 5. Email Deliverability Check (Spam Me Na Jaye)

Hostinger cPanel me ensure karein ke website se bheji gayi emails Inbox me hi jayein:

1. cPanel me **Email** section me jayein $\rightarrow$ **Email Deliverability** par click karein.
2. Wahan `actvise.co.uk` ke samne check karein ke **DKIM** aur **SPF** ke aage green color me **"Valid"** likha ho.
3. Agar green "Valid" likha hai, to iska matlab hai Hostinger se bheji gayi saari emails 100% direct Primary Inbox me jayengi, Spam folder me nahi jayengi!

---

## 6. Live Testing Ka Quick Checklist (Deployment Ke Baad)

Jab aap final live server par yeh setup kar lein, to check karne ke liye:

1. Apni website open karein: `https://actvise.co.uk/contact`
2. Form me test data dalein:
   - **First Name:** Test User
   - **Email:** Apna koi personal email (e.g. Gmail)
   - **Phone:** +44 7949 446368
   - **Message:** "Live deployment testing lead."
3. **Submit Inquiry** dabayein.
4. Green message show hoga: *"Thank you! Your inquiry has been sent to Actvise Accountancy & Tax Services."*
5. Apne mobile ya Webmail par **`info@actvise.co.uk`** ka inbox refresh karein.
6. **Result:** 10 se 15 seconds ke andar Actvise ke branded format me lead ka email receive ho jayega!
7. Email ke andar **"Reply Directly to Client"** par click karein aur check karein ke wo customer ko reply bhej raha hai.

---

## 7. Short Summary (Quick Yad-Dihani)

```
Official Website Domain:  https://actvise.co.uk
Demo / Testing URL:       https://actvise-accountancy-web.vercel.app
Official Business Inbox:  info@actvise.co.uk
Outgoing Mail Server:     mail.actvise.co.uk (Port 465 SSL)
Code Ka Status:           100% Complete & Ready
Hosting Pe Kaam:          Sirf 5 lines .env file me add karke restart karna hai.
```
