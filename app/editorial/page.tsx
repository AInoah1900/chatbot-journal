import React from 'react';
import Link from 'next/link';

export default function EditorialPage() {
  // 模拟编委会数据
  const editorialBoard = {
    leadership: [
      {
        id: "1",
        name: "王国庆",
        title: "主编",
        affiliation: "中国兵器工业集团有限公司",
        academic: "中国工程院院士",
        expertise: "兵器科学与技术"
      },
      {
        id: "2",
        name: "李军",
        title: "常务副主编",
        affiliation: "重庆理工大学",
        academic: "教授，博士生导师",
        expertise: "武器系统与发射动力学"
      },
      {
        id: "3",
        name: "张伟",
        title: "副主编",
        affiliation: "中国兵器装备研究院",
        academic: "研究员",
        expertise: "弹药与爆炸技术"
      }
    ],
    members: [
      {
        id: "4",
        name: "陈强",
        affiliation: "北京理工大学",
        academic: "教授，博士生导师",
        expertise: "兵器系统总体技术"
      },
      {
        id: "5",
        name: "刘明",
        affiliation: "南京理工大学",
        academic: "教授，博士生导师",
        expertise: "武器发射理论与技术"
      },
      {
        id: "6",
        name: "赵华",
        affiliation: "中国北方车辆研究所",
        academic: "研究员",
        expertise: "装甲车辆技术"
      },
      {
        id: "7",
        name: "吴刚",
        affiliation: "中国兵器科学研究院",
        academic: "研究员，博士生导师",
        expertise: "火炮设计与发射动力学"
      },
      {
        id: "8",
        name: "钱军",
        affiliation: "哈尔滨工业大学",
        academic: "教授，博士生导师",
        expertise: "导弹制导与控制"
      },
      {
        id: "9",
        name: "周琳",
        affiliation: "西北工业大学",
        academic: "教授，博士生导师",
        expertise: "航空武器系统"
      },
      {
        id: "10",
        name: "孙伟",
        affiliation: "中国兵器工业第二一四研究所",
        academic: "研究员",
        expertise: "弹药设计与爆炸效应"
      },
      {
        id: "11",
        name: "李红",
        affiliation: "中国人民解放军陆军工程大学",
        academic: "教授，博士生导师",
        expertise: "军事装备可靠性技术"
      },
      {
        id: "12",
        name: "王成",
        affiliation: "西安交通大学",
        academic: "教授，博士生导师",
        expertise: "特种制造技术"
      },
      {
        id: "13",
        name: "张明",
        affiliation: "国防科技大学",
        academic: "教授，博士生导师",
        expertise: "武器系统仿真与测试"
      },
      {
        id: "14",
        name: "刘洋",
        affiliation: "中国兵器装备集团公司",
        academic: "高级工程师",
        expertise: "兵器智能制造"
      },
      {
        id: "15",
        name: "吴红",
        affiliation: "重庆理工大学",
        academic: "教授，博士生导师",
        expertise: "武器系统控制技术"
      },
    ],
    international: [
      {
        id: "16",
        name: "Sergei Ivanov",
        affiliation: "莫斯科国立技术大学 (俄罗斯)",
        academic: "教授",
        expertise: "弹道学与爆炸力学"
      },
      {
        id: "17",
        name: "Michael Wilson",
        affiliation: "麻省理工学院 (美国)",
        academic: "教授",
        expertise: "先进武器材料与结构"
      },
      {
        id: "18",
        name: "Jean-Pierre Dupont",
        affiliation: "巴黎高等理工学院 (法国)",
        academic: "研究员",
        expertise: "弹药系统设计"
      }
    ],
    editorial: [
      {
        id: "19",
        name: "胡明",
        title: "编辑部主任",
        affiliation: "重庆理工大学",
        contact: "电话: 023-62563083"
      },
      {
        id: "20",
        name: "李婷",
        title: "责任编辑",
        affiliation: "重庆理工大学",
        contact: "邮箱: bzxb@cqut.edu.cn"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">编委会</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="hover:underline">首页</Link>
            <span className="mx-2">&gt;</span>
            <span>编委会</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">编委会介绍</h2>
          
          <p className="mb-4">
            《兵器装备工程学报》编委会由来自兵器工业、航空航天、军事院校、国防科研机构和高等院校的权威专家组成，涵盖兵器装备领域多个研究方向，为期刊的学术质量和发展方向提供指导。
          </p>
          <p>
            编委会负责制定期刊发展战略，把握学术方向，组织重大选题策划，审议重要稿件，推荐高水平稿源，促进学术交流，提升期刊学术水平和影响力。
          </p>
        </div>
        
        {/* 主编及副主编 */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">主编及副主编</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorialBoard.leadership.map((leader) => (
              <div key={leader.id} className="border border-border-color rounded-md p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">{leader.name}</h3>
                <p className="text-primary font-medium">{leader.title}</p>
                <div className="mt-3 text-sm space-y-1">
                  <p>{leader.affiliation}</p>
                  <p>{leader.academic}</p>
                  <p>研究方向：{leader.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 编委会成员 */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">编委会成员（按姓氏拼音排序）</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {editorialBoard.members.map((member) => (
              <div key={member.id} className="border border-border-color rounded-md p-3 hover:bg-light-gray transition-colors">
                <div className="flex items-center">
                  <h3 className="font-bold">{member.name}</h3>
                  <span className="text-text-light text-sm ml-auto">{member.affiliation}</span>
                </div>
                <div className="mt-2 text-sm text-text-light">
                  <p>{member.academic}</p>
                  <p>研究方向：{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 国际编委 */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">国际编委</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorialBoard.international.map((member) => (
              <div key={member.id} className="border border-border-color rounded-md p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <div className="mt-3 text-sm space-y-1">
                  <p>{member.affiliation}</p>
                  <p>{member.academic}</p>
                  <p>研究方向：{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 编辑部成员 */}
        <div className="card">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">编辑部成员</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editorialBoard.editorial.map((editor) => (
              <div key={editor.id} className="flex items-center border border-border-color rounded-md p-4">
                <div>
                  <h3 className="font-bold">{editor.name}</h3>
                  <p className="text-primary text-sm">{editor.title}</p>
                  <div className="mt-2 text-sm">
                    <p>{editor.affiliation}</p>
                    <p>{editor.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 