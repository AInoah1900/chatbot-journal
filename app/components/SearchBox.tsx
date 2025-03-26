'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border border-border-color rounded-md p-2 flex">
      <input 
        type="search" 
        placeholder="搜索文章..." 
        className="outline-none text-sm flex-grow"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
        type="submit" 
        className="ml-1 text-text-light hover:text-primary"
        aria-label="搜索"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </form>
  );
} 