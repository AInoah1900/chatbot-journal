import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import AdvancedSearchForm from '../components/AdvancedSearchForm';

export const metadata: Metadata = {
  title: '文章检索 - 兵器装备工程学报',
  description: '兵器装备工程学报文章检索页面，支持按关键词、作者、年份等检索文章',
};

// 模拟搜索结果数据
const mockSearchResults = [
  {
    id: '1',
    title: '基于深度学习的小型武器目标智能识别技术研究',
    authors: '张三, 李四, 王五',
    journal: '兵器装备工程学报',
    year: '2023',
    volume: '30',
    issue: '6',
    pages: '123-134',
    doi: '10.xxxx/xxxx.xxxx.xx',
    abstract: '本文提出了一种基于深度学习的小型武器目标智能识别方法，通过改进的YOLOv8网络结构提高了识别精度和速度，在复杂战场环境下取得了良好的识别效果。',
    keywords: ['深度学习', '武器目标识别', 'YOLO', '计算机视觉']
  },
  {
    id: '2',
    title: '某型坦克炮塔动态特性分析与优化',
    authors: '赵六, 钱七, 孙八',
    journal: '兵器装备工程学报',
    year: '2023',
    volume: '30',
    issue: '5',
    pages: '78-89',
    doi: '10.xxxx/xxxx.xxxx.xx',
    abstract: '针对某型坦克炮塔在高速机动条件下的稳定性问题，本文通过建立多体动力学模型，分析了影响稳定性的关键因素，并提出了优化设计方案。',
    keywords: ['坦克炮塔', '动态特性', '多体动力学', '优化设计']
  },
  {
    id: '3',
    title: '装甲车辆防护结构抗弹性能数值仿真分析',
    authors: '周九, 吴十, 郑十一',
    journal: '兵器装备工程学报',
    year: '2022',
    volume: '29',
    issue: '4',
    pages: '45-56',
    doi: '10.xxxx/xxxx.xxxx.xx',
    abstract: '本文采用有限元方法对装甲车辆防护结构的抗弹性能进行了数值仿真分析，研究了不同弹丸冲击参数对防护结构变形与能量吸收特性的影响，为装甲防护结构优化设计提供了理论依据。',
    keywords: ['装甲车辆', '防护结构', '抗弹性能', '数值仿真']
  }
];

export default function SearchPage({ searchParams }: { searchParams: { q?: string, author?: string, title?: string, keywords?: string, yearFrom?: string, yearTo?: string } }) {
  const { q: searchQuery, author, title, keywords, yearFrom, yearTo } = searchParams;
  
  // 在实际应用中，这里会根据所有搜索参数调用API获取搜索结果
  // 这里简单模拟一下搜索结果
  let searchResults = [...mockSearchResults];
  
  // 简单的筛选逻辑
  if (searchQuery) {
    searchResults = searchResults.filter(result => 
      result.title.includes(searchQuery) || 
      result.abstract.includes(searchQuery) ||
      result.authors.includes(searchQuery) ||
      result.keywords.some(kw => kw.includes(searchQuery))
    );
  }
  
  if (author) {
    searchResults = searchResults.filter(result => result.authors.includes(author));
  }
  
  if (title) {
    searchResults = searchResults.filter(result => result.title.includes(title));
  }
  
  if (keywords) {
    const keywordList = keywords.split(',').map(k => k.trim());
    searchResults = searchResults.filter(result => 
      keywordList.some(k => result.keywords.some(kw => kw.includes(k)))
    );
  }
  
  if (yearFrom) {
    searchResults = searchResults.filter(result => parseInt(result.year) >= parseInt(yearFrom));
  }
  
  if (yearTo) {
    searchResults = searchResults.filter(result => parseInt(result.year) <= parseInt(yearTo));
  }

  // 构建查询摘要文本
  const buildQuerySummary = () => {
    const parts = [];
    
    if (searchQuery) parts.push(`关键词: "${searchQuery}"`);
    if (author) parts.push(`作者: "${author}"`);
    if (title) parts.push(`标题包含: "${title}"`);
    if (keywords) parts.push(`关键词包含: "${keywords}"`);
    
    if (yearFrom && yearTo) {
      parts.push(`发表年份: ${yearFrom} - ${yearTo}`);
    } else if (yearFrom) {
      parts.push(`发表年份: 从 ${yearFrom} 起`);
    } else if (yearTo) {
      parts.push(`发表年份: 至 ${yearTo} 止`);
    }
    
    return parts.join(', ');
  };

  const hasAnyQuery = searchQuery || author || title || keywords || yearFrom || yearTo;
  const querySummary = hasAnyQuery ? buildQuerySummary() : '';

  return (
    <div className="min-h-screen">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">文章检索</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="hover:underline">首页</Link>
            <span className="mx-2">&gt;</span>
            <span>文章检索</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">搜索结果</h2>
          
          {hasAnyQuery && (
            <div className="mb-6">
              <p>
                搜索条件: <span className="font-medium">{querySummary}</span>
              </p>
              <p className="mt-1 text-text-light">
                找到 {searchResults.length} 条结果
              </p>
            </div>
          )}

          {searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map(result => (
                <div key={result.id} className="border-b border-border-color pb-6 last:border-b-0">
                  <h3 className="font-bold text-lg hover:text-primary">
                    <Link href={`/articles/${result.id}`}>
                      {result.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-text-light mt-1">
                    作者: {result.authors}
                  </p>
                  <p className="text-sm text-text-light">
                    {result.journal}, {result.year}, {result.volume}({result.issue}): {result.pages}
                  </p>
                  <p className="mt-2">
                    {result.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {result.keywords.map((keyword, index) => (
                      <Link 
                        key={index} 
                        href={`/search?q=${encodeURIComponent(keyword)}`}
                        className="bg-light-gray text-text-light px-2 py-1 rounded-md text-xs hover:bg-primary hover:text-white transition-colors"
                      >
                        {keyword}
                      </Link>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-3">
                    <Link 
                      href={`/articles/${result.id}`}
                      className="text-primary text-sm"
                    >
                      阅读全文
                    </Link>
                    <Link 
                      href={`/articles/${result.id}/pdf`}
                      className="text-primary text-sm"
                    >
                      下载PDF
                    </Link>
                    <span className="text-text-light text-sm">
                      DOI: {result.doi}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-lg text-text-light">未找到符合条件的文章</p>
              <p className="mt-2 text-sm">
                尝试调整搜索关键词或浏览我们的 
                <Link href="/issues" className="text-primary ml-1">
                  期刊目录
                </Link>
              </p>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">高级检索</h2>
          <AdvancedSearchForm />
        </div>
      </div>
    </div>
  );
} 