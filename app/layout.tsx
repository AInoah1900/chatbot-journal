import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import JournalLogo from "./components/JournalLogo";
import SearchBox from "./components/SearchBox";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ClientChatIconWrapper from "./components/ClientChatIconWrapper";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "兵器装备工程学报",
  description: "兵器装备工程学报官方网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistMono.variable} antialiased`}>
        <header className="navbar">
          <div className="container mx-auto py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <JournalLogo />
                <div>
                  <h1 className="text-xl font-bold text-primary">兵器装备工程学报</h1>
                  <p className="text-sm text-text-light">Journal of Ordnance Equipment Engineering</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <div className="btn btn-primary">
                  <Link href="/submit" className="text-white">
                    在线投稿
                  </Link>
                </div>
                <SearchBox />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          <nav className="bg-primary text-white">
            <div className="container mx-auto">
              <ul className="flex flex-wrap">
                <li className="px-4 py-3 hover:bg-[#004077]">
                  <Link href="/">首页</Link>
                </li>
                <li className="px-4 py-3 hover:bg-[#004077]">
                  <Link href="/about">期刊介绍</Link>
                </li>
                <li className="px-4 py-3 hover:bg-[#004077]">
                  <Link href="/editorial">编委会</Link>
                </li>
                <li className="px-4 py-3 hover:bg-[#004077]">
                  <Link href="/guide">投稿指南</Link>
                </li>
                <li className="px-4 py-3 hover:bg-[#004077]">
                  <Link href="/issues">期刊目录</Link>
                </li>
                <li className="px-4 py-3 hover:bg-[#004077]">
                  <Link href="/search">文章检索</Link>
                </li>
                <li className="px-4 py-3 hover:bg-[#004077]">
                  <Link href="/download">下载中心</Link>
                </li>
                <li className="px-4 py-3 hover:bg-[#004077]">
                  <Link href="/contact">联系我们</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-light-gray py-8 mt-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">关于我们</h3>
                <p className="text-sm text-text-light">
                  兵器装备工程学报是由中国兵器工业集团有限公司主管、重庆理工大学和中国兵器装备研究院共同主办的学术期刊。
                </p>
                <p className="text-sm text-text-light mt-2">
                  ISSN: 2096-2304 (印刷版)<br />
                  CN: 50-1230/TJ
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">快速链接</h3>
                <ul className="text-sm space-y-2">
                  <li><Link href="/privacy" className="hover:text-primary">隐私政策</Link></li>
                  <li><Link href="/terms" className="hover:text-primary">使用条款</Link></li>
                  <li><Link href="/copyright" className="hover:text-primary">版权信息</Link></li>
                  <li><Link href="/faq" className="hover:text-primary">常见问题</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">联系方式</h3>
                <ul className="text-sm space-y-2 text-text-light">
                  <li>地址：重庆市巴南区红光大道69号</li>
                  <li>邮编：400054</li>
                  <li>电话：023-62563083</li>
                  <li>邮箱：bzxb@cqut.edu.cn</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border-color mt-8 pt-4 text-sm text-center text-text-light">
              <p>© {new Date().getFullYear()} 兵器装备工程学报 版权所有</p>
            </div>
          </div>
        </footer>

        {/* 添加聊天图标 */}
        <ClientChatIconWrapper />
      </body>
    </html>
  );
}
