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

// DeepSeek API响应接口
interface DeepSeekResponse {
  id: string;
  choices: {
    message: Message;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
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

// 模拟DeepSeek API的响应
const mockResponses: Record<string, string> = {
  '默认': '我是兵器装备工程学报的AI助手，很高兴能帮助您。如果您有任何关于期刊投稿、论文查询或其他问题，请随时向我咨询。',
  '你好': '您好！我是兵器装备工程学报的智能助手。我可以回答您关于期刊投稿、论文格式、审稿流程等问题。请问有什么可以帮助您的吗？',
  '投稿': '关于投稿，您需要准备符合我们期刊格式要求的论文，可以通过我们的在线投稿系统提交。投稿前，请确保您的论文符合《兵器装备工程学报》的研究领域和格式要求。您可以在"投稿指南"页面查看详细的投稿要求和流程。',
  '审稿': '我们的审稿流程包括：初审（编辑部对稿件进行形式审查）、外审（由领域专家进行同行评议）、终审（编委会根据外审结果做出最终决定）。整个过程通常需要8-12周。您可以通过投稿系统查询您的稿件状态。',
  '期刊信息': '《兵器装备工程学报》是由中国兵器工业集团有限公司主管、重庆理工大学和中国兵器装备研究院共同主办的学术期刊。我们主要发表兵器装备工程领域的最新研究成果，ISSN编号为2096-2304（印刷版），CN编号为50-1230/TJ。',
  '联系方式': '您可以通过以下方式联系我们：\n地址：重庆市巴南区红光大道69号\n邮编：400054\n电话：023-62563083\n邮箱：bzxb@cqut.edu.cn',
};

// 发送消息到DeepSeek API，或在没有API密钥时提供模拟响应
export async function sendMessage(message: string, history: Message[]): Promise<Message> {
  // 检查环境变量中是否有API密钥
  const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;

  // 如果没有API密钥，使用模拟响应
  if (!apiKey || apiKey.trim() === '') {
    console.log('未检测到DeepSeek API密钥，使用模拟响应');
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟网络延迟
    
    // 根据用户消息提供相关回复
    const messageLower = message.toLowerCase();
    let response = '';
    
    if (messageLower.includes('你好') || messageLower.includes('hello')) {
      response = mockResponses['你好'];
    } else if (messageLower.includes('投稿')) {
      response = mockResponses['投稿'];
    } else if (messageLower.includes('审稿') || messageLower.includes('审核')) {
      response = mockResponses['审稿'];
    } else if (messageLower.includes('期刊') || messageLower.includes('杂志') || messageLower.includes('关于')) {
      response = mockResponses['期刊信息'];
    } else if (messageLower.includes('联系') || messageLower.includes('电话') || messageLower.includes('地址') || messageLower.includes('邮箱')) {
      response = mockResponses['联系方式'];
    } else {
      response = mockResponses['默认'];
    }
    
    return {
      role: 'assistant',
      content: response
    };
  }
  
  // 如果有API密钥，使用DeepSeek API
  try {
    // 准备发送到DeepSeek API的消息历史
    const messages = [...history, { role: 'user', content: message }];
    
    // DeepSeek API请求配置
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API请求失败: ${errorData.error?.message || response.statusText}`);
    }

    const data: DeepSeekResponse = await response.json();
    return data.choices[0].message;
  } catch (error) {
    console.error('与DeepSeek API通信时出错:', error);
    return {
      role: 'assistant',
      content: '非常抱歉，我遇到了技术问题。请稍后再试，或者通过页面底部的联系方式与编辑部取得联系。'
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
        return sessions.map((session: any) => ({
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