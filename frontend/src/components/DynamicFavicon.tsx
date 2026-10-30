'use client';

import { useEffect } from 'react';

export default function DynamicFavicon() {
  useEffect(() => {
    try {
      const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
      const updateFavicon = (isDark: boolean) => {
        // Find existing icon link or create new one
        let link = document.querySelector<HTMLLinkElement>("link[data-dynamic-fav]");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          link.setAttribute('data-dynamic-fav', 'true');
          document.head.appendChild(link);
        }
        link.type = 'image/png';
        link.href = isDark ? '/icon-dark.png?v=white_clean' : '/icon.png?v=color_clean';
      };

      if (mq) {
        updateFavicon(mq.matches);
        if (mq.addEventListener) {
          mq.addEventListener('change', (e) => updateFavicon(e.matches));
        }
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  return null;
}
