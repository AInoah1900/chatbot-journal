// DeepSeek API服务
import { v4 as uuidv4 } from 'uuid';

// 定义消息类型
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// 聊天会话接口
export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

// 创建一个新的聊天会话
export function createChatSession(): ChatSession {
  return {
    id: uuidv4(),
    messages: [
      {
        role: 'system',
        content: '您好，我是兵器装备工程学报的智能助手，可以回答您关于投稿、论文查询、期刊信息等问题。请问有什么可以帮助您的吗？'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

// 注意：原先的mockResponses已经被删除，因为现在所有响应都是通过API代理来处理的
// 如果需要离线回退响应，我们直接在sendMessage函数中定义

// 发送消息到DeepSeek API，或在没有API密钥时提供模拟响应
export async function sendMessage(message: string, history: Message[]): Promise<Message> {
  try {
    // 调用我们的服务器端API代理，而不是直接调用DeepSeek API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(`API请求失败: ${errorData.error || response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('发送消息时出错:', error);
    
    // 如果API调用失败，返回本地模拟响应作为后备
    const messageLower = message.toLowerCase();
    let response = '';
    
    // 简单的离线回退响应逻辑
    if (messageLower.includes('你好') || messageLower.includes('hello')) {
      response = '您好！我是兵器装备工程学报的智能助手。由于网络问题，我正在使用离线模式。';
    } else if (messageLower.includes('投稿')) {
      response = '关于投稿的离线回复：请准备符合期刊格式要求的论文，可以通过在线投稿系统提交。详细要求请参阅"投稿指南"页面。';
    } else if (messageLower.includes('审稿') || messageLower.includes('审核')) {
      response = '关于审稿的离线回复：我们的审稿流程包括初审、外审和终审，整个过程通常需要8-12周。';
    } else {
      response = '很抱歉，我遇到了网络问题，无法连接到服务器。请稍后再试，或者通过页面底部的联系方式与编辑部取得联系。';
    }
    
    return {
      role: 'assistant',
      content: response
    };
  }
}

// 将会话存储到本地存储
export function saveChatSession(session: ChatSession): void {
  if (typeof window !== 'undefined') {
    const sessions = getChatSessions();
    const existingIndex = sessions.findIndex(s => s.id === session.id);
    
    if (existingIndex !== -1) {
      sessions[existingIndex] = session;
    } else {
      sessions.push(session);
    }
    
    localStorage.setItem('chatSessions', JSON.stringify(sessions));
  }
}

// 从本地存储获取会话列表
export function getChatSessions(): ChatSession[] {
  if (typeof window !== 'undefined') {
    const sessionsJson = localStorage.getItem('chatSessions');
    if (sessionsJson) {
      try {
        const sessions = JSON.parse(sessionsJson);
        // 确保日期被正确解析
        return sessions.map((session: {
          id: string;
          messages: Message[];
          createdAt: string | Date;
          updatedAt: string | Date;
        }) => ({
          ...session,
          createdAt: new Date(session.createdAt),
          updatedAt: new Date(session.updatedAt)
        }));
      } catch (e) {
        console.error('解析会话数据时出错:', e);
      }
    }
  }
  return [];
}

// 根据ID获取会话
export function getChatSessionById(sessionId: string): ChatSession | null {
  const sessions = getChatSessions();
  return sessions.find(session => session.id === sessionId) || null;
}

// 删除会话
export function deleteChatSession(sessionId: string): void {
  if (typeof window !== 'undefined') {
    const sessions = getChatSessions();
    const updatedSessions = sessions.filter(session => session.id !== sessionId);
    localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
  }
} 