import React from 'react';
import Link from 'next/link';

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">投稿指南</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="hover:underline">首页</Link>
            <span className="mx-2">&gt;</span>
            <span>投稿指南</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        {/* 投稿流程 */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">投稿流程</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="border border-border-color rounded-md p-4 text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="font-bold">注册与登录</h3>
              <p className="text-sm mt-2">在线注册作者账号并登录投稿系统</p>
            </div>
            
            <div className="border border-border-color rounded-md p-4 text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="font-bold">填写信息</h3>
              <p className="text-sm mt-2">完善作者及稿件相关信息</p>
            </div>
            
            <div className="border border-border-color rounded-md p-4 text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="font-bold">上传稿件</h3>
              <p className="text-sm mt-2">上传符合要求的稿件及附件</p>
            </div>
            
            <div className="border border-border-color rounded-md p-4 text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">4</span>
              </div>
              <h3 className="font-bold">提交审核</h3>
              <p className="text-sm mt-2">确认信息并提交稿件审核</p>
            </div>
            
            <div className="border border-border-color rounded-md p-4 text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">5</span>
              </div>
              <h3 className="font-bold">跟踪稿件</h3>
              <p className="text-sm mt-2">在线跟踪稿件审核进度</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              href="/submit" 
              className="btn btn-primary"
            >
              在线投稿
            </Link>
          </div>
        </div>
        
        {/* 稿件要求 */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">稿件要求</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">选题范围</h3>
              <p className="mb-2">
                本刊主要刊登兵器装备工程领域的原创性研究成果，包括但不限于以下方向：
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>武器系统与装备</li>
                <li>弹药与爆炸技术</li>
                <li>火控与制导技术</li>
                <li>装备可靠性与寿命预测</li>
                <li>先进制造技术</li>
                <li>新型材料与结构</li>
                <li>装备电子技术</li>
                <li>武器系统仿真与测试</li>
                <li>装备维修与保障</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">稿件类型</h3>
              <p>本刊接收以下类型的稿件：</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>研究论文：原创性的研究成果，一般不超过8000字</li>
                <li>综述论文：对某一研究领域的系统性梳理，一般不超过10000字</li>
                <li>技术报告：对新技术、新方法的报道，一般不超过6000字</li>
                <li>短篇通讯：有创新性的初步研究成果，一般不超过3000字</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">稿件格式</h3>
              <p className="mb-2">
                稿件应包括以下要素：标题、作者信息、摘要、关键词、正文、参考文献等，具体要求如下：
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>标题：中英文对照，简明、具体，能概括论文的主要内容</li>
                <li>作者信息：包括姓名、工作单位、所在城市、邮政编码及电子邮箱</li>
                <li>摘要：中英文对照，200-300字，应包括研究目的、方法、结果和结论</li>
                <li>关键词：中英文对照，3-8个，按词条重要性排序</li>
                <li>正文：一般包括引言、实验方法、结果分析、结论等部分</li>
                <li>参考文献：按GB/T 7714-2015标准著录，按引用顺序编号并在正文中标注</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <Link 
              href="/download/template" 
              className="text-primary underline"
            >
              下载论文模板
            </Link>
          </div>
        </div>
        
        {/* 审稿流程 */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">审稿流程</h2>
          
          <div className="relative pl-8 pb-8 border-l-2 border-primary">
            <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] -translate-y-[4px]"></div>
            <h3 className="font-bold">初审</h3>
            <p className="mt-1 mb-6 text-sm">
              稿件提交后，编辑部进行形式审查，判断是否符合期刊范围和基本要求。初审时间一般为1-3个工作日。
            </p>
            
            <div className="absolute top-[80px] left-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
            <h3 className="font-bold">外审</h3>
            <p className="mt-1 mb-6 text-sm">
              通过初审的稿件送交2-3位同行专家进行匿名评审。外审时间一般为2-4周。
            </p>
            
            <div className="absolute top-[160px] left-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
            <h3 className="font-bold">编辑部审议</h3>
            <p className="mt-1 mb-6 text-sm">
              根据专家评审意见，编辑部决定采用、修改后采用、修改后重审或退稿。编辑部审议时间一般为1周。
            </p>
            
            <div className="absolute top-[240px] left-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
            <h3 className="font-bold">修改稿件</h3>
            <p className="mt-1 mb-6 text-sm">
              需要修改的稿件，作者应在规定时间内（一般为2周）完成修改并提交修改说明。
            </p>
            
            <div className="absolute top-[320px] left-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
            <h3 className="font-bold">录用通知</h3>
            <p className="mt-1 text-sm">
              稿件修改合格后，编辑部发出录用通知，安排稿件出版事宜。
            </p>
          </div>
        </div>
        
        {/* 出版费用 */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">出版费用</h2>
          
          <div className="space-y-4">
            <p>
              本刊对录用稿件收取版面费，具体标准如下：
            </p>
            
            <div className="border-t border-b border-border-color py-3">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>基本版面费：</span>
                  <span className="font-bold">每篇800元</span>
                </li>
                <li className="flex justify-between">
                  <span>超版页费用：</span>
                  <span>超过6个印刷页的部分，每页加收200元</span>
                </li>
                <li className="flex justify-between">
                  <span>彩图费用：</span>
                  <span>每幅彩图加收200元</span>
                </li>
                <li className="flex justify-between">
                  <span>快速发表费用：</span>
                  <span>需要特别加急处理的稿件，加收500元</span>
                </li>
              </ul>
            </div>
            
            <p className="text-sm text-text-light">
              说明：本刊出版费用仅用于期刊编辑出版成本，不作为录用稿件的条件。对于特别优秀的稿件，可酌情减免费用。
            </p>
          </div>
        </div>
        
        {/* 联系方式 */}
        <div className="card">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">联系方式</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">编辑部</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex">
                  <span className="text-text-light w-16">地址：</span>
                  <span>重庆市巴南区红光大道69号</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-16">邮编：</span>
                  <span>400054</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-16">电话：</span>
                  <span>023-62563083</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-16">邮箱：</span>
                  <span>bzxb@cqut.edu.cn</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">投稿系统</h3>
              <p className="text-sm mb-3">
                作者可通过以下网址登录期刊投稿系统：
              </p>
              <Link 
                href="https://bzxb.cqut.edu.cn/author/login" 
                className="text-primary underline"
                target="_blank"
              >
                https://bzxb.cqut.edu.cn/author/login
              </Link>
              <p className="text-sm mt-3">
                如遇到投稿系统问题，请联系技术支持：023-62563088
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 