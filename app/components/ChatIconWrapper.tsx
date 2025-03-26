'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ChatDialog from './ChatDialog';

export default function ChatIconWrapper() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownDialog, setHasShownDialog] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
    setHasShownDialog(true);
    // 打开对话框时隐藏tooltip
    setShowTooltip(false);
  };
  
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // 检查是否是首次访问，如果是则在一段时间后显示tooltip
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited && !hasShownDialog) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000); // 5秒后自动隐藏
      }, 3000); // 页面加载3秒后显示

      // 标记用户已访问
      localStorage.setItem('hasVisitedBefore', 'true');
      
      return () => clearTimeout(timer);
    }
  }, [hasShownDialog]);

  return (
    <>
      {/* 浮动聊天图标 */}
      <div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 cursor-pointer group"
        onClick={openDialog}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          {/* 当鼠标悬浮时显示的文字说明 */}
          <div className={`bg-white shadow-md rounded-lg px-3 py-2 mr-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5 pointer-events-none'
          }`}>
            <p className="text-primary font-medium whitespace-nowrap">智能编辑助手</p>
          </div>
          
          {/* 自动显示的提示文字 */}
          <div className={`absolute right-full mr-4 bg-white shadow-md rounded-lg px-3 py-2 transition-all duration-300 w-48 ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5 pointer-events-none'
          }`}>
            <div className="relative">
              <p className="text-primary text-sm">有问题随时点击咨询，我们的智能助手会为您解答</p>
              <div className="absolute -right-7 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
          </div>
          
          {/* 聊天图标 */}
          <div className="bg-primary p-3 rounded-full shadow-lg transform transition-all duration-300 
            hover:shadow-xl hover:scale-110 flex flex-col items-center relative">
            <div className="relative w-12 h-12">
              <Image
                src="/logo-journal.svg"
                alt="Chat with Journal Assistant"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <span className="text-white text-xs mt-1 font-medium">点击咨询</span>
            
            {/* 脉冲动画效果 */}
            <span className="absolute inset-0 rounded-full animate-ping bg-primary opacity-30"></span>
          </div>
        </div>
      </div>

      {/* 聊天对话框 */}
      {isDialogOpen && <ChatDialog onClose={closeDialog} />}
    </>
  );
} 