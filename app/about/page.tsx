import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">期刊介绍</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="hover:underline">首页</Link>
            <span className="mx-2">&gt;</span>
            <span>期刊介绍</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">关于期刊</h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4">
              <div className="relative aspect-[3/4] bg-light-gray">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-text-light">[期刊封面图]</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/4">
              <p className="mb-4">
                《兵器装备工程学报》是由中国兵器工业集团有限公司主管、重庆理工大学和中国兵器装备研究院共同主办的学术期刊，创刊于1991年，双月刊。
              </p>
              <p className="mb-4">
                本刊面向国防科技工作者，主要刊登兵器装备领域的原创性研究成果，重点关注兵器装备设计、制造、试验、检测、评估、可靠性、寿命预测等方面的最新研究进展。同时也刊登国内外兵器装备发展的综述性文章，以及重大军事行动中装备运用的经验总结。
              </p>
              <p>
                本刊被中国科技核心期刊、中国学术期刊综合评价数据库、中国科学引文数据库等多个重要数据库收录，在国内兵器装备领域具有重要的学术影响力。
              </p>
            </div>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">期刊荣誉</h2>
          
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>中国科技核心期刊</li>
            <li>中国学术期刊(光盘版)全文收录期刊</li>
            <li>中国学术期刊综合评价数据库来源期刊</li>
            <li>中国科学引文数据库来源期刊</li>
            <li>中国期刊全文数据库(CJFD)全文收录期刊</li>
            <li>&quot;万方数据-数字化期刊群&quot;全文上网期刊</li>
            <li>中文科技期刊数据库全文收录期刊</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">主要栏目</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border-color rounded">
              <h3 className="font-bold text-primary">武器系统与装备</h3>
              <p className="text-sm mt-2">
                关注各类武器系统的设计、分析、仿真与试验技术，包括火炮、坦克、装甲车辆等兵器装备的结构、性能等研究。
              </p>
            </div>
            
            <div className="p-4 border border-border-color rounded">
              <h3 className="font-bold text-primary">弹药与爆炸技术</h3>
              <p className="text-sm mt-2">
                研究各类弹药的设计、制造、性能与效能评估，以及爆炸物理、爆炸效应等相关技术。
              </p>
            </div>
            
            <div className="p-4 border border-border-color rounded">
              <h3 className="font-bold text-primary">火控与制导技术</h3>
              <p className="text-sm mt-2">
                探讨武器装备中的火控系统、制导系统设计与评估，包括目标探测、跟踪、制导算法等研究。
              </p>
            </div>
            
            <div className="p-4 border border-border-color rounded">
              <h3 className="font-bold text-primary">装备可靠性与寿命预测</h3>
              <p className="text-sm mt-2">
                研究兵器装备的可靠性设计、评估与寿命预测方法，包括失效分析、维修性设计等。
              </p>
            </div>
            
            <div className="p-4 border border-border-color rounded">
              <h3 className="font-bold text-primary">先进制造技术</h3>
              <p className="text-sm mt-2">
                探讨应用于兵器装备领域的先进制造工艺、装备与技术，包括特种加工、精密制造等。
              </p>
            </div>
            
            <div className="p-4 border border-border-color rounded">
              <h3 className="font-bold text-primary">新型材料与结构</h3>
              <p className="text-sm mt-2">
                研究应用于兵器装备的新型材料、复合材料、特种材料及其结构设计与性能评估。
              </p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">期刊信息</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <div>
              <h3 className="font-bold mb-2">基本信息</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="text-text-light w-24">刊名:</span>
                  <span>兵器装备工程学报</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">英文名:</span>
                  <span>Journal of Ordnance Equipment Engineering</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">创刊年份:</span>
                  <span>1991年</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">出版周期:</span>
                  <span>双月刊</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">语种:</span>
                  <span>中文</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">ISSN:</span>
                  <span>2096-2304 (印刷版)</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">CN:</span>
                  <span>50-1230/TJ</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">编辑部信息</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="text-text-light w-24">主管单位:</span>
                  <span>中国兵器工业集团有限公司</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">主办单位:</span>
                  <span>重庆理工大学、中国兵器装备研究院</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">编辑:</span>
                  <span>《兵器装备工程学报》编辑部</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">地址:</span>
                  <span>重庆市巴南区红光大道69号</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">邮编:</span>
                  <span>400054</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">电话:</span>
                  <span>023-62563083</span>
                </li>
                <li className="flex">
                  <span className="text-text-light w-24">邮箱:</span>
                  <span>bzxb@cqut.edu.cn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 