'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ApnaaiLogoProps {
  size?: number;
}
export function ApnaaiLogo({ size = 24 }: ApnaaiLogoProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mount, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldInvert = mounted && (
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
  );

  return (
    <Image
        src="/kortix-symbol.svg"
        alt="ApnaAI"
        width={size}
        height={size}
        className={`${shouldInvert ? 'invert' : ''} flex-shrink-0`}
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      />
  );
}
