'use client';

import { useEffect } from 'react';
import { detectIncognito } from 'detectincognitojs';

export default function DynamicFavicon() {
  useEffect(() => {
    let isCancelled = false;

    async function applyDynamicFavicon() {
      try {
        const res = await detectIncognito();
        if (isCancelled) return;

        const isIncognito = Boolean(res && res.isPrivate);

        // When in Incognito (Dark tab strip) -> pure solid white icon
        // When in normal browser (White tab strip) -> official colored icon
        const targetHref = isIncognito
          ? '/icon-dark.png?v=white_clean'
          : '/icon.png?v=color_clean';

        const links = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
        let updated = false;

        links.forEach((link) => {
          if (!link.hasAttribute('data-apple')) {
            link.href = targetHref;
            link.type = 'image/png';
            updated = true;
          }
        });

        if (!updated) {
          const newLink = document.createElement('link');
          newLink.rel = 'icon';
          newLink.type = 'image/png';
          newLink.href = targetHref;
          document.head.appendChild(newLink);
        }
      } catch (e) {
        // Fallback: ensure normal mode displays the colored emblem
        const links = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
        links.forEach((link) => {
          if (!link.hasAttribute('data-apple')) {
            link.href = '/icon.png?v=color_clean';
            link.type = 'image/png';
          }
        });
      }
    }

    applyDynamicFavicon();

    return () => {
      isCancelled = true;
    };
  }, []);

  return null;
}

