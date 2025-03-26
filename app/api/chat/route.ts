import { NextRequest, NextResponse } from 'next/server';
import { Message } from '../../services/deepseekService';

// 模拟响应
const mockResponses: Record<string, string> = {
  '默认': '我是兵器装备工程学报的AI助手，很高兴能帮助您。如果您有任何关于期刊投稿、论文查询或其他问题，请随时向我咨询。',
  '你好': '您好！我是兵器装备工程学报的智能助手。我可以回答您关于期刊投稿、论文格式、审稿流程等问题。请问有什么可以帮助您的吗？',
  '投稿': '关于投稿，您需要准备符合我们期刊格式要求的论文，可以通过我们的在线投稿系统提交。投稿前，请确保您的论文符合《兵器装备工程学报》的研究领域和格式要求。您可以在"投稿指南"页面查看详细的投稿要求和流程。',
  '审稿': '我们的审稿流程包括：初审（编辑部对稿件进行形式审查）、外审（由领域专家进行同行评议）、终审（编委会根据外审结果做出最终决定）。整个过程通常需要8-12周。您可以通过投稿系统查询您的稿件状态。',
  '期刊信息': '《兵器装备工程学报》是由中国兵器工业集团有限公司主管、重庆理工大学和中国兵器装备研究院共同主办的学术期刊。我们主要发表兵器装备工程领域的最新研究成果，ISSN编号为2096-2304（印刷版），CN编号为50-1230/TJ。',
  '联系方式': '您可以通过以下方式联系我们：\n地址：重庆市巴南区红光大道69号\n邮编：400054\n电话：023-62563083\n邮箱：bzxb@cqut.edu.cn',
};

// 获取模拟回复的函数
const getMockResponse = async (message: string): Promise<Message> => {
  await new Promise(resolve => setTimeout(resolve, 500)); // 轻微延迟，模拟响应时间
  
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
};

export async function POST(request: NextRequest) {
  try {
    // 解析请求体
    const { message, history } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: '缺少消息内容' },
        { status: 400 }
      );
    }
    
    // 获取API密钥 - 在服务器端安全地处理
    const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;
    
    // 如果没有API密钥，使用模拟响应
    if (!apiKey || apiKey.trim() === '') {
      console.log('未检测到DeepSeek API密钥，使用模拟响应');
      const mockResponse = await getMockResponse(message);
      return NextResponse.json(mockResponse);
    }
    
    // 准备发送到DeepSeek API的消息历史
    const messages = [...(history || []), { role: 'user', content: message }];
    
    // 添加超时控制
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时
    
    try {
      // 从服务器端调用DeepSeek API
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
        signal: controller.signal
      }).finally(() => clearTimeout(timeoutId));
      
      // 如果响应不成功，抛出错误
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: response.statusText } }));
        console.error('API请求失败:', errorData);
        throw new Error(`API请求失败: ${errorData.error?.message || response.statusText}`);
      }
      
      // 解析并返回响应
      const data = await response.json();
      return NextResponse.json(data.choices[0].message);
      
    } catch (apiError) {
      console.error('与DeepSeek API通信时出错:', apiError);
      
      // API请求失败，回退到模拟响应
      const mockResponse = await getMockResponse(message);
      return NextResponse.json({
        role: 'assistant',
        content: '很抱歉，我目前无法连接到DeepSeek服务。以下是预设回复，希望能帮到您：\n\n' + mockResponse.content
      });
    }
    
  } catch (error) {
    console.error('处理请求时出错:', error);
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    );
  }
} 