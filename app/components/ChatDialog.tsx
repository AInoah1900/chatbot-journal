'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  createChatSession, 
  saveChatSession, 
  sendMessage, 
  Message, 
  ChatSession 
} from '../services/deepseekService';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

interface ChatDialogProps {
  onClose: () => void;
}

export default function ChatDialog({ onClose }: ChatDialogProps) {
  const [session, setSession] = useState<ChatSession>(createChatSession);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showingDialog, setShowingDialog] = useState(false);

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [session.messages]);

  // 在对话框出现时添加样式防止body滚动并聚焦输入框
  useEffect(() => {
    // 不再完全禁止滚动
    // document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    
    // 动画效果：先渲染，然后设置showingDialog为true触发动画
    requestAnimationFrame(() => {
      setShowingDialog(true);
    });
    
    return () => {
      // document.body.style.overflow = 'auto';
    };
  }, []);

  // 处理关闭对话框
  const handleClose = () => {
    setShowingDialog(false);
    // 等待淡出动画完成后再真正关闭对话框
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // 处理消息发送
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = { role: 'user', content: input };
    
    // 更新会话状态，添加用户消息
    setSession(prevSession => {
      const updatedSession = {
        ...prevSession,
        messages: [...prevSession.messages, userMessage],
        updatedAt: new Date()
      };
      return updatedSession;
    });
    
    setInput('');
    setIsLoading(true);
    
    try {
      // 调用API获取回复
      const assistantMessage = await sendMessage(
        input, 
        session.messages.filter(msg => msg.role !== 'system')
      );
      
      // 更新会话状态，添加助手回复
      setSession(prevSession => {
        const updatedSession = {
          ...prevSession,
          messages: [...prevSession.messages, assistantMessage],
          updatedAt: new Date()
        };
        
        // 保存会话到本地存储
        saveChatSession(updatedSession);
        
        return updatedSession;
      });
    } catch (error) {
      console.error('发送消息时出错:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 渲染消息气泡
  const renderMessage = (message: Message, index: number) => {
    // 忽略系统消息
    if (message.role === 'system') return null;
    
    const isUser = message.role === 'user';
    
    return (
      <div 
        key={index} 
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}
      >
        {/* 助手头像 */}
        {!isUser && (
          <div className="w-8 h-8 mr-2 flex-shrink-0 relative rounded-full overflow-hidden bg-blue-50">
            <Image
              src="/logo-journal.svg"
              alt="Assistant"
              fill
              sizes="32px"
              className="object-contain p-1"
            />
          </div>
        )}
        
        <div 
          className={`rounded-2xl px-4 py-3 max-w-[80%] shadow-sm ${
            isUser 
              ? 'bg-primary text-white rounded-tr-none' 
              : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
          }`}
        >
          {message.role === 'assistant' ? (
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>
                {message.content}
              </ReactMarkdown>
            </div>
          ) : (
            <p>{message.content}</p>
          )}
        </div>
        
        {/* 用户头像 */}
        {isUser && (
          <div className="w-8 h-8 ml-2 flex-shrink-0 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
            用户
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        showingDialog ? 'bg-black/30 backdrop-blur-[2px]' : 'bg-transparent'
      }`}
      onClick={handleClose} // 点击背景关闭对话框
    >
      <div 
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-xl md:max-w-2xl h-[75vh] md:h-[85vh] flex flex-col 
          transition-all duration-300 ${
          showingDialog 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
        style={{
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()} // 阻止点击事件冒泡
      >
        {/* 对话框标题 */}
        <div className="border-b px-6 py-4 flex justify-between items-center bg-gradient-to-r from-blue-50 to-white rounded-t-2xl">
          <div className="flex items-center">
            <div className="relative w-8 h-8 mr-3">
              <Image
                src="/logo-journal.svg"
                alt="Journal Assistant"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg">兵器装备工程学报助手</h3>
              <p className="text-xs text-gray-500">随时为您解答相关问题</p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="关闭对话框"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* 对话内容区域 */}
        <div 
          ref={chatContentRef}
          className="flex-1 overflow-y-auto p-6 bg-gray-50"
        >
          {/* 欢迎消息 */}
          <div className="flex justify-start mb-5 animate-fadeIn">
            <div className="w-8 h-8 mr-2 flex-shrink-0 relative rounded-full overflow-hidden bg-blue-50">
              <Image
                src="/logo-journal.svg"
                alt="Assistant"
                fill
                sizes="32px"
                className="object-contain p-1"
              />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] shadow-sm border border-gray-100">
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown>
                  {session.messages[0].content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
          
          {/* 对话消息 */}
          {session.messages.slice(1).map(renderMessage)}
          
          {/* 加载指示器 */}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="w-8 h-8 mr-2 flex-shrink-0 relative rounded-full overflow-hidden bg-blue-50">
                <Image
                  src="/logo-journal.svg"
                  alt="Assistant"
                  fill
                  sizes="32px"
                  className="object-contain p-1"
                />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100">
                <div className="flex space-x-2 items-center h-5">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-75 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-75 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-75 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* 输入区域 */}
        <form onSubmit={handleSendMessage} className="border-t p-4 bg-white rounded-b-2xl">
          <div className="flex space-x-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="输入您的问题..."
              className="flex-1 border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className={`bg-primary text-white rounded-full p-3 flex-shrink-0 transition-all ${
                !input.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#004077] hover:shadow-md'
              }`}
              aria-label="发送"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 