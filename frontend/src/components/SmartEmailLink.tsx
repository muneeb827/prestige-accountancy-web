"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteData";

interface SmartEmailLinkProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

/**
 * SmartEmailLink handles professional email routing seamlessly across devices:
 * 
 * 1. Mobile (Android & iOS):
 *    Directs to `mailto:info@actvise.co.uk?subject=...` which triggers the native Gmail
 *    (or Apple Mail / Outlook) app directly in COMPOSE mode with To and Subject pre-filled.
 *    Avoids opening mobile web browser inbox (which doesn't support ?view=cm).
 * 
 * 2. Laptop / Desktop Web:
 *    Directs to `https://mail.google.com/mail/?view=cm&fs=1&to=info@actvise.co.uk&su=...`
 *    in a fresh browser tab so users without configured desktop mail clients get the
 *    full Gmail Web Compose window.
 */
export default function SmartEmailLink({ children, className, title }: SmartEmailLinkProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mobileDetected = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    setIsMobile(mobileDetected);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const mobileDetected = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (mobileDetected) {
      // On mobile, trigger native Gmail / Mail App compose
      window.location.href = siteConfig.mailtoUrl;
      e.preventDefault();
    } else {
      // On desktop, open Gmail Web compose in a new tab
      window.open(siteConfig.gmailComposeUrl, "_blank", "noopener,noreferrer");
      e.preventDefault();
    }
  };

  const currentHref = isMobile ? siteConfig.mailtoUrl : siteConfig.gmailComposeUrl;

  return (
    <a
      href={currentHref}
      onClick={handleClick}
      target={isMobile ? undefined : "_blank"}
      rel={isMobile ? undefined : "noopener noreferrer"}
      className={className}
      title={title || "Compose email to Actvise Accountancy"}
    >
      {children || siteConfig.email}
    </a>
  );
}
