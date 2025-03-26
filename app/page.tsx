import Link from "next/link";

export default function Home() {
  // 模拟最新一期期刊数据
  const latestIssue = {
    year: "2023",
    volume: "30",
    issue: "6",
    coverImage: "/journal-cover.jpg",
    articles: [
      {
        id: "1",
        title: "基于深度学习的小型武器目标智能识别技术研究",
        authors: "张三, 李四, 王五",
        doi: "10.xxxx/xxxx.xxxx.xx",
        abstract: "本文提出了一种基于深度学习的小型武器目标智能识别方法，通过改进的YOLOv8网络结构提高了识别精度和速度，在复杂战场环境下取得了良好的识别效果。"
      },
      {
        id: "2",
        title: "某型坦克炮塔动态特性分析与优化",
        authors: "赵六, 钱七, 孙八",
        doi: "10.xxxx/xxxx.xxxx.xx",
        abstract: "针对某型坦克炮塔在高速机动条件下的稳定性问题，本文通过建立多体动力学模型，分析了影响稳定性的关键因素，并提出了优化设计方案。"
      },
      {
        id: "3",
        title: "舰载武器系统抗冲击性能评估方法研究",
        authors: "周九, 吴十, 郑十一",
        doi: "10.xxxx/xxxx.xxxx.xx",
        abstract: "本文建立了舰载武器系统抗冲击性能评估指标体系，提出了基于层次分析法和模糊综合评判的评估模型，为舰载武器系统抗冲击设计提供了理论依据。"
      }
    ]
  };

  // 模拟通知公告数据
  const announcements = [
    {
      id: "1",
      title: "关于举办2023年兵器装备先进技术学术研讨会的通知",
      date: "2023-12-01",
      isImportant: true
    },
    {
      id: "2", 
      title: "《兵器装备工程学报》2024年征稿启事",
      date: "2023-11-15",
      isImportant: true
    },
    {
      id: "3",
      title: "本刊被评为2023年度中国科技核心期刊",
      date: "2023-10-25",
      isImportant: false
    },
    {
      id: "4",
      title: "关于加强学术不端行为查处力度的声明",
      date: "2023-09-18",
      isImportant: false
    },
    {
      id: "5",
      title: "编委会成员调整公告",
      date: "2023-08-30",
      isImportant: false
    }
  ];

  // 模拟重点文章数据
  const featuredArticles = [
    {
      id: "f1",
      title: "武器装备寿命预测关键技术研究进展",
      authors: "李明, 王华, 张强",
      views: 3245,
      citations: 126,
      downloads: 1872,
      year: "2022",
      coverImage: "/article-cover1.jpg"
    },
    {
      id: "f2",
      title: "高超声速武器气动热防护材料研究新进展",
      authors: "陈刚, 刘伟, 赵红",
      views: 2876,
      citations: 98,
      downloads: 1654,
      year: "2023",
      coverImage: "/article-cover2.jpg"
    },
    {
      id: "f3",
      title: "导弹制导系统容错控制技术综述",
      authors: "吴勇, 孙亮, 钱芳",
      views: 3102,
      citations: 115,
      downloads: 1723,
      year: "2022",
      coverImage: "/article-cover3.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 轮播图 */}
      <div className="relative bg-light-gray h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold mb-4">兵器装备工程学报</h2>
            <p className="text-lg text-text-light mb-6">
              权威发布兵器装备工程领域最新研究成果和技术进展
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/issues/latest" 
                className="btn btn-primary"
              >
                阅读最新一期
              </Link>
              <Link 
                href="/submit" 
                className="btn border border-primary text-primary"
              >
                投稿指南
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 左侧：最新一期 */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold border-l-4 border-primary pl-3">最新一期</h2>
              <Link href="/issues" className="text-primary text-sm">
                查看更多 &gt;
              </Link>
            </div>
            
            <div className="card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-[3/4] bg-light-gray">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-text-light">[期刊封面图]</p>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <p className="font-bold">
                      {latestIssue.year}年 第{latestIssue.volume}卷 第{latestIssue.issue}期
                    </p>
                    <Link 
                      href={`/issues/${latestIssue.volume}/${latestIssue.issue}`}
                      className="text-primary text-sm mt-2 inline-block"
                    >
                      查看详情
                    </Link>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <h3 className="text-lg font-bold mb-3">本期文章</h3>
                  <div className="space-y-4">
                    {latestIssue.articles.map((article) => (
                      <div key={article.id} className="pb-3 border-b border-border-color">
                        <h4 className="font-bold hover:text-primary">
                          <Link href={`/articles/${article.id}`}>
                            {article.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-text-light mt-1">
                          作者：{article.authors}
                        </p>
                        <p className="text-sm mt-2 line-clamp-2">
                          {article.abstract}
                        </p>
                        <div className="flex gap-3 mt-2">
                          <Link 
                            href={`/articles/${article.id}`}
                            className="text-primary text-sm"
                          >
                            查看全文
                          </Link>
                          <Link 
                            href={`/articles/${article.id}/pdf`}
                            className="text-primary text-sm"
                          >
                            下载PDF
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 重点文章 */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold border-l-4 border-primary pl-3">重点文章</h2>
                <Link href="/featured" className="text-primary text-sm">
                  查看更多 &gt;
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="card">
                    <div className="aspect-[16/9] bg-light-gray mb-3 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-text-light">[文章封面图]</p>
                      </div>
                    </div>
                    <h3 className="font-bold line-clamp-2 hover:text-primary">
                      <Link href={`/articles/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-text-light mt-1">
                      {article.authors} ({article.year})
                    </p>
                    <div className="flex justify-between text-xs text-text-light mt-3">
                      <span>浏览: {article.views}</span>
                      <span>引用: {article.citations}</span>
                      <span>下载: {article.downloads}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 右侧：通知公告 */}
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-bold border-l-4 border-primary pl-3">通知公告</h2>
            </div>
            
            <div className="card">
              <ul className="space-y-3">
                {announcements.map((announcement) => (
                  <li key={announcement.id} className="pb-3 border-b border-border-color last:border-none">
                    <Link 
                      href={`/announcements/${announcement.id}`}
                      className="flex gap-2 hover:text-primary"
                    >
                      {announcement.isImportant && (
                        <span className="text-secondary font-bold">[重要]</span>
                      )}
                      <span className="line-clamp-2">{announcement.title}</span>
                    </Link>
                    <p className="text-sm text-text-light mt-1">
                      {announcement.date}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <Link href="/announcements" className="text-primary text-sm">
                  查看全部通知 &gt;
                </Link>
              </div>
            </div>
            
            {/* 期刊信息 */}
            <div className="mt-8">
              <div className="mb-4">
                <h2 className="text-xl font-bold border-l-4 border-primary pl-3">期刊信息</h2>
              </div>
              
              <div className="card">
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-text-light">创刊年份:</span>
                    <span>1991年</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-text-light">出版周期:</span>
                    <span>双月刊</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-text-light">主管单位:</span>
                    <span>中国兵器工业集团有限公司</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-text-light">主办单位:</span>
                    <span>重庆理工大学、中国兵器装备研究院</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-text-light">ISSN:</span>
                    <span>2096-2304 (印刷版)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-text-light">CN:</span>
                    <span>50-1230/TJ</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-text-light">被收录情况:</span>
                    <span>中国科技核心期刊</span>
                  </li>
                </ul>
                <div className="mt-4 text-center">
                  <Link href="/about" className="text-primary text-sm">
                    了解更多 &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
