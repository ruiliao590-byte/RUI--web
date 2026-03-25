"use client";

import { Directory } from "@/components/directory";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface Section {
  title: string;
  content: React.ReactNode;
}

const sections: { [key: string]: Section } = {
  about: {
    title: "I. 关于",
    content: (
      <>
        <h1 className="text-4xl font-bold mb-4">瑞阿瑞</h1>
        <p className="text-lg leading-relaxed">产品经理 (PM) | 独立开发者 | ai训练师 | 博主</p>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="mailto:1098239503@qq.com" className="hover:underline">邮箱</a>
          <span>|</span>
          <a href="#" className="hover:underline">小红书: 9876884157</a>
        </div>
      </>
    ),
  },
  work: {
    title: "II. 作品",
    content: (
      <ul className="space-y-4 text-center">
        <li><a href="#" className="text-lg hover:underline">项目一</a></li>
        <li><a href="#" className="text-lg hover:underline">项目二</a></li>
      </ul>
    ),
  },
  thoughts: {
    title: "III. 随想",
    content: <p className="text-lg leading-relaxed text-center">一些随想和创意。</p>,
  },
  archive: {
    title: "IV. 归档",
    content: (
      <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
        <pre><code>{
`// 人工智能学习笔记
{
  "Tokens": "语言模型的基石。",
  "RAG": "检索增强生成，一种将信息检索与文本生成相结合的技术。",
  "SFT": "监督微调，一种使预训练模型适应特定任务的方法。"
}`
        }</code></pre>
      </div>
    ),
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSectionSelect = (sectionId: any) => {
    setActiveSection(sectionId);
  };

  const handleGoBack = () => {
    setActiveSection(null);
  };

  return (
    <main className="container mx-auto px-4 font-serif relative min-h-screen flex flex-col items-center justify-start pt-32">
      {isMounted && (
        <>
          {theme === 'newspaper' && (
            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/3 w-px h-full bg-foreground/10"></div>
              <div className="absolute top-0 left-2/3 w-px h-full bg-foreground/10"></div>
            </div>
          )}
          {theme === 'book' && (
            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -ml-px w-px h-full bg-foreground/10"></div>
            </div>
          )}
        </>
      )}
      <AnimatePresence>
        {activeSection ? (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="w-full max-w-3xl mx-auto p-8 relative"
          >
            <button onClick={handleGoBack} className="absolute top-8 left-8 text-sm text-foreground/70 hover:text-foreground hover:underline">← 返回目录</button>
            <h2 className="text-5xl font-bold mb-12 text-center">{sections[activeSection].title}</h2>
            <div className="text-xl leading-relaxed text-center">{sections[activeSection].content}</div>
          </motion.div>
        ) : (
          <motion.div key="directory" exit={{ opacity: 0 }}>
            <div className="flex flex-col items-center space-y-12">
              <header className="text-center">
                <h1 className="text-7xl font-bold font-decorative tracking-widest">RUI</h1>
                <p className="text-lg mt-2 font-serif">独立开发者</p>
              </header>
              <Directory onSectionSelect={handleSectionSelect} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
