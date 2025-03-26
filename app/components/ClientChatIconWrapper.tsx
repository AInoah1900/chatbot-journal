'use client';

import dynamic from 'next/dynamic';

// 使用动态导入避免服务器端渲染ChatIconWrapper
const ChatIconWrapper = dynamic(() => import('./ChatIconWrapper'), {
  ssr: false,
});

export default function ClientChatIconWrapper() {
  return <ChatIconWrapper />;
} 