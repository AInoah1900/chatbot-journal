# 兵器装备工程学报网站

本项目是基于Next.js 15.2.4开发的兵器装备工程学报网站，旨在提供一个现代化、用户友好的学术期刊网站。

## 功能特点

- 响应式设计，适配各种设备屏幕
- 现代化UI界面，参考兵器装备工程学报官网风格
- 期刊信息展示
- 文章浏览和检索功能
- 下载和阅读PDF文章
- 基于DeepSeek API的智能聊天助手

## 技术栈

- [Next.js 15.2.4](https://nextjs.org/) - React框架
- [React 19](https://react.dev/) - 用户界面库
- [TailwindCSS 4](https://tailwindcss.com/) - CSS框架
- [DeepSeek API](https://platform.deepseek.com/) - 智能聊天功能

## Next.js 15 兼容性说明

本项目使用Next.js 15.2.4版本，有以下重要变更需要注意：

1. **页面参数变更**：在Next.js 15中，`searchParams`和`params`属性现在是Promise类型，必须使用async/await或React的use函数来访问值。例如：

```tsx
export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { filter } = await searchParams;
  // 使用filter值...
}
```

2. **ESLint规则**：请确保遵循项目的ESLint规则，特别是：
   - 不要使用未声明的变量
   - 在JSX中使用`&quot;`或`&#34;`转义引号
   - 避免使用`any`类型，应指定更具体的类型

## 环境变量配置

在项目根目录创建`.env.local`文件，并配置以下环境变量：

```
NEXT_PUBLIC_DEEPSEEK_API_KEY=你的DeepSeek API密钥
```

如果不配置API密钥，聊天助手将使用模拟响应。

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站效果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm run start
```

## 页面结构

- 首页：展示期刊最新信息、重要公告
- 期刊介绍：提供期刊背景、影响因子等信息
- 编委会：展示编辑委员会成员信息
- 投稿指南：提供论文投稿相关说明
- 文章检索：支持按关键词、作者、年份等检索文章
- 在线阅读：提供文章在线阅读功能

## 智能聊天助手

网站右下角提供了基于DeepSeek API的智能聊天助手功能，可以回答用户关于期刊的各类问题：

- 期刊简介和范围
- 投稿流程和要求
- 论文格式规范
- 审稿周期和流程
- 联系方式和相关资源

要启用完整的聊天助手功能，需要在`.env.local`文件中配置有效的DeepSeek API密钥。如未配置，将使用预设的模拟响应。

## 项目规划与维护记录

### 项目规划

- 第一阶段：完成网站基础框架和首页设计
- 第二阶段：实现期刊介绍、编委会等静态页面
- 第三阶段：开发文章检索和在线阅读功能
- 第四阶段：优化用户体验和性能
- 第五阶段：集成DeepSeek API智能聊天助手

### 维护记录

- **2023-03-26**: 修复Next.js 15兼容性问题
  - 更新`app/search/page.tsx`以支持Promise版本的searchParams
  - 移除未使用的Image导入（layout.tsx, page.tsx, about/page.tsx）
  - 修复HTML转义引号问题
  - 修复TypeScript any类型问题

## 项目维护

如有任何问题或建议，请提交issue或联系项目管理员。

## 故障排除

### 端口冲突问题

如果你在启动应用时遇到以下错误：

```
Error: listen EADDRINUSE: address already in use :::3000
```

这表示3000端口已被占用，解决方法有：

1. **查找并关闭占用端口的进程**:
   ```bash
   # macOS/Linux
   lsof -i :3000
   # 找到PID后终止进程
   kill -9 <PID>
   
   # Windows
   netstat -ano | findstr :3000
   # 找到PID后终止进程
   taskkill /F /PID <PID>
   ```

2. **使用不同的端口**:
   ```bash
   # 开发环境
   PORT=3001 npm run dev
   
   # 生产环境
   PORT=3001 npm run start
   ```

3. **确保正确关闭服务器**:
   开发时，请使用`Ctrl+C`完全关闭服务器，而不是直接关闭终端窗口。

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
