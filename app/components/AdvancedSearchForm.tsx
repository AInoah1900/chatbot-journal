'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdvancedSearchForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    keywords: '',
    yearFrom: '',
    yearTo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 构建查询参数
    const queryParams = new URLSearchParams();
    
    if (formData.author) queryParams.append('author', formData.author);
    if (formData.title) queryParams.append('title', formData.title);
    if (formData.keywords) queryParams.append('keywords', formData.keywords);
    if (formData.yearFrom) queryParams.append('yearFrom', formData.yearFrom);
    if (formData.yearTo) queryParams.append('yearTo', formData.yearTo);

    // 构建URL并导航
    const queryString = queryParams.toString();
    router.push(`/search${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            作者
          </label>
          <input 
            type="text" 
            name="author"
            className="w-full border border-border-color rounded-md p-2" 
            placeholder="输入作者姓名"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            标题
          </label>
          <input 
            type="text" 
            name="title"
            className="w-full border border-border-color rounded-md p-2" 
            placeholder="输入文章标题关键词"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            关键词
          </label>
          <input 
            type="text" 
            name="keywords"
            className="w-full border border-border-color rounded-md p-2" 
            placeholder="输入关键词，用逗号分隔"
            value={formData.keywords}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            发表年份
          </label>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              name="yearFrom"
              className="w-full border border-border-color rounded-md p-2" 
              placeholder="起始年份"
              min="1991"
              max={new Date().getFullYear()}
              value={formData.yearFrom}
              onChange={handleChange}
            />
            <span>-</span>
            <input 
              type="number" 
              name="yearTo"
              className="w-full border border-border-color rounded-md p-2" 
              placeholder="终止年份"
              min="1991"
              max={new Date().getFullYear()}
              value={formData.yearTo}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <button type="submit" className="btn btn-primary px-8">
          搜索
        </button>
      </div>
    </form>
  );
} 