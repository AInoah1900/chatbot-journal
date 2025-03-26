'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function JournalLogo() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="mr-4">
      <div className="relative w-[60px] h-[60px]">
        {!imageError ? (
          <Image 
            src="/logo-journal.svg" 
            alt="兵器装备工程学报" 
            width={60} 
            height={60}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary rounded-full">
            <span className="text-xs text-white font-bold text-center">兵器装备工程学报</span>
          </div>
        )}
      </div>
    </div>
  );
} 