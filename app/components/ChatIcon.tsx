'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ChatDialog from './ChatDialog';

export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="fixed right-5 bottom-20 z-40 cursor-pointer shadow-lg rounded-full bg-white p-2 hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-12 h-12">
          <Image 
            src="/logo-journal.svg" 
            alt="兵器装备工程学报" 
            fill
            sizes="3rem"
            className="object-contain"
          />
        </div>
      </div>

      {isOpen && (
        <ChatDialog onClose={() => setIsOpen(false)} />
      )}
    </>
  );
} 