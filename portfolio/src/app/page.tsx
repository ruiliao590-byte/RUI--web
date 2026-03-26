"use client";

import { Directory } from "@/components/directory";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import profileImg from "../../public/profile.jpg";
import studentWebImg from "../../public/student-web.jpg";
import coverMlAgents from "../../public/cover-ml-agents.svg";
import coverPromptGenius from "../../public/cover-prompt-genius.svg";
import coverContinue from "../../public/cover-continue.svg";

interface Section {
  title: string;
  content: React.ReactNode;
}

function XiaohongshuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 12h8M8 15h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WeiboIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 18.5c3.6 0 6.5-2 6.5-4.5S15.6 9.5 12 9.5 5.5 11.5 5.5 14 8.4 18.5 12 18.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M15.7 8.2c1.7-.4 3.3.2 4.4 1.4M16.7 6c2.6-.6 5.1.3 6.6 2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="10.5" cy="14" r="1.2" fill="currentColor" />
    </svg>
  );
}

function HomeFooter() {
  const [emailRevealed, setEmailRevealed] = useState(false);

  const githubUrl = "https://github.com/ruiliao590-byte";
  const xhsUrl = "https://www.xiaohongshu.com/user/profile/9876884157";

  return (
    <footer className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[min(900px,calc(100%-2rem))] z-40">
      <div className="border-y border-foreground/30 px-6 py-4 bg-background/40 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-sm tracking-wider">
            <button
              type="button"
              onClick={() => setEmailRevealed(true)}
              className="hover:opacity-70 transition-opacity"
            >
              {emailRevealed ? "1098239503@qq.com" : "电子邮件"}
            </button>
            <a href="#" className="hover:opacity-70 transition-opacity">
              博客
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={xhsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="小红书"
              className="hover:opacity-70 transition-opacity"
            >
              <XiaohongshuIcon className="w-5 h-5" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-70 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.87 3.16 9 7.55 10.46.55.1.75-.24.75-.53v-1.86c-3.07.67-3.72-1.18-3.72-1.18-.5-1.28-1.22-1.62-1.22-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.58 1.19 3.2.91.1-.7.38-1.19.69-1.46-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.44-2.18 1.15-2.95-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.13a10.5 10.5 0 0 1 2.78-.37c.94 0 1.88.13 2.78.37 2.12-1.43 3.05-1.13 3.05-1.13.61 1.53.23 2.66.11 2.94.71.77 1.15 1.75 1.15 2.95 0 4.23-2.58 5.16-5.04 5.43.39.34.74 1.02.74 2.06v3.05c0 .29.2.63.76.53 4.38-1.47 7.53-5.6 7.53-10.46C23.25 5.48 18.27.5 12 .5Z"
                />
              </svg>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="微博"
              className="hover:opacity-70 transition-opacity"
            >
              <WeiboIcon className="w-5 h-5" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 4.2a3.8 3.8 0 1 1 0 7.6a3.8 3.8 0 0 1 0-7.6Zm0 2a1.8 1.8 0 1 0 0 3.6a1.8 1.8 0 0 0 0-3.6ZM17.8 6.6a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const sections: { [key: string]: Section } = {
  about: {
    title: "I. 关于",
    content: (
      <div className="text-left max-w-3xl mx-auto text-lg leading-relaxed">
        <div className="float-left mr-8 mb-4 w-[150px] h-[200px] rounded-md border-2 border-foreground/10 overflow-hidden">
          <Image
            src={profileImg}
            alt="Rui的照片"
            width={150}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="mb-6">
          <span className="text-4xl font-bold">嗨！</span>我是Rui，我是一名独立开发者 | ai训练师 | 博主。
        </p>
        <p className="mb-6">
          我热爱AI工作，并致力于确保它继续成为每个人表达创意、个人爱好和各种奇思妙想的平台。
        </p>
        <p className="mb-8">
          我喜欢尝试将AI和网络作为一种创意媒介。我的作品集会不定时更新，旨在学习和以意想不到的方式运用AI。
        </p>

        <hr className="border-t-2 border-dotted border-foreground/20 my-12" />

        <div>
          <h3 className="text-2xl font-bold mb-6">核心专业技能</h3>
          <dl className="space-y-8">
            <div>
              <dt className="font-bold text-xl mb-2">大模型应用</dt>
              <dd>熟练调用 GPT、Claude 、Kimi、DeepSeek 等；精通高阶 Prompt Engineering，具备多轮上下文约束与复杂逻辑条件判断能力。</dd>
            </div>
            <div>
              <dt className="font-bold text-xl mb-2">Agent 工作流</dt>
              <dd>熟练使用 Coze、Dify、LangChain 及 Autoclaw 搭建复杂业务自动化工作流；具备高并发异常排查与参数调优能力（Temperature / Top-P）。</dd>
            </div>
            <div>
              <dt className="font-bold text-xl mb-2">数据与训练</dt>
              <dd>熟练构建 SFT 数据；系统掌握 Bad Case 归因与修复方法论，覆盖指令遵循、逻辑幻觉、格式规范、价值观对齐等核心维度。</dd>
            </div>
            <div>
              <dt className="font-bold text-xl mb-2">工程开发</dt>
              <dd>深度践行 Vibe Coding，以自然语言驱动 Claude code、Cursor 等 AI IDE 独立完成多端项目开发；熟练使用 Python（Pandas）进行数据清洗与分析。</dd>
            </div>
          </dl>
        </div>
      </div>
    ),
  },
  work: {
    title: "II. 作品",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <motion.a 
          href="https://ruiliao590-byte.github.io/student-web/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block relative border-2 border-foreground/10 p-5 rounded-2xl hover:border-foreground/40 transition-all duration-500 bg-background/50 overflow-hidden shadow-sm hover:shadow-xl"
          whileHover={{ y: -8 }}
        >
          <div className="aspect-[16/10] relative mb-6 overflow-hidden rounded-xl border border-foreground/5 bg-foreground/5">
            <Image
              src={studentWebImg}
              alt="AI 指挥官学习路线图"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-black tracking-tight flex items-center justify-between">
              AI 指挥官学习路线图
              <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Visit →</span>
            </h3>
            <p className="text-base text-foreground/70 leading-relaxed">
              专为 AI 时代设计的教育版学习路线。通过建立心智模型，让学习者从“使用者”转变为能够指挥 AI 的“架构师”。
            </p>
            <div className="flex gap-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border border-foreground/10 rounded-md">Education</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border border-foreground/10 rounded-md">System Logic</span>
            </div>
          </div>
        </motion.a>

        <motion.a 
          href="https://github.com/Unity-Technologies/ml-agents"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative border-2 border-foreground/10 p-5 rounded-2xl hover:border-foreground/40 transition-all duration-500 bg-background/50 overflow-hidden shadow-sm hover:shadow-xl"
          whileHover={{ y: -8 }}
        >
          <div className="aspect-[16/10] relative mb-6 overflow-hidden rounded-xl border border-foreground/5 bg-foreground/5">
            <Image
              src={coverMlAgents}
              alt="Unity ML-Agents"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-black tracking-tight flex items-center justify-between">
              Unity ML‑Agents（AI 游戏训练）
              <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Visit →</span>
            </h3>
            <p className="text-base text-foreground/70 leading-relaxed">在 Unity 环境中使用强化学习训练智能体，包含自定义观察、奖励函数与对抗训练等玩法。</p>
            <div className="flex gap-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border border-foreground/10 rounded-md">Unity</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border border-foreground/10 rounded-md">RL</span>
            </div>
          </div>
        </motion.a>

        <motion.a 
          href="https://github.com/benf2004/ChatGPT-Prompt-Genius"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative border-2 border-foreground/10 p-5 rounded-2xl hover:border-foreground/40 transition-all duration-500 bg-background/50 overflow-hidden shadow-sm hover:shadow-xl"
          whileHover={{ y: -8 }}
        >
          <div className="aspect-[16/10] relative mb-6 overflow-hidden rounded-xl border border-foreground/5 bg-foreground/5">
            <Image
              src={coverPromptGenius}
              alt="ChatGPT Prompt Genius"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-black tracking-tight flex items-center justify-between">
              ChatGPT Prompt Genius（浏览器插件）
              <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Visit →</span>
            </h3>
            <p className="text-base text-foreground/70 leading-relaxed">开源扩展，支持提示词模板化、收藏与分享，适合沉淀个人 Prompt 资产并快速复用。</p>
            <div className="flex gap-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border border-foreground/10 rounded-md">Chrome</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border border-foreground/10 rounded-md">Extension</span>
            </div>
          </div>
        </motion.a>

        <motion.a 
          href="https://github.com/continuedev/continue"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative border-2 border-foreground/10 p-5 rounded-2xl hover:border-foreground/40 transition-all duration-500 bg-background/50 overflow-hidden shadow-sm hover:shadow-xl"
          whileHover={{ y: -8 }}
        >
          <div className="aspect-[16/10] relative mb-6 overflow-hidden rounded-xl border border-foreground/5 bg-foreground/5">
            <Image
              src={coverContinue}
              alt="Continue"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-black tracking-tight flex items-center justify-between">
              Continue（VS Code AI 辅助编码）
              <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Visit →</span>
            </h3>
            <p className="text-base text-foreground/70 leading-relaxed">开源的本地优先 AI 编程助手，支持多模型与工具链，适合作为插件类作品的二次开发与定制化案例。</p>
            <div className="flex gap-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border border-foreground/10 rounded-md">VS Code</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 border border-foreground/10 rounded-md">LLM</span>
            </div>
          </div>
        </motion.a>
      </div>
    ),
  },
  thoughts: {
    title: "III. 随想",
    content: (
      <div className="space-y-12 max-w-2xl mx-auto italic">
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          AI 不仅仅是一个工具，它更像是一个拥有无限耐心的协作者。在 Vibe Coding 的时代，代码不再是阻碍创意的门槛。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          未来的开发者将更多地扮演‘指挥家’的角色，我们需要学习如何更好地传达意图，而不是纠结于语法细节。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          大模型的幻觉本质上是它在尝试连接那些看似不相关的知识点，这种‘创造力’如果引导得当，将是巨大的财富。
        </blockquote>
      </div>
    ),
  },
  archive: {
    title: "IV. 归档",
    content: (
      <div className="bg-gray-800 text-green-400 p-6 rounded-lg font-mono text-sm shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-2 opacity-20 pointer-events-none">SYSTEM READY</div>
        <pre className="whitespace-pre-wrap"><code>{
`// AI 核心术语索引 v1.0.4
{
  "Tokens": "大模型处理文本的基本单位，通常 1k tokens 约等于 750 个英文单词。",
  "RAG": "检索增强生成 (Retrieval-Augmented Generation)，通过外接实时数据库减少幻觉。",
  "SFT": "监督微调 (Supervised Fine-Tuning)，让模型学会特定指令格式的关键步骤。",
  "RLHF": "人类反馈强化学习，使模型价值观与人类对齐的核心技术。",
  "Prompt_Eng": "提示词工程，通过精细化的指令设计激发模型的潜在能力。",
  "Agent": "智能体，具备自主规划、工具调用和记忆能力的 AI 实体。"
}

// 状态扫描: [SUCCESS]
// 核心模块: [ACTIVE]
// 最近更新: 2026-03-26`
        }</code></pre>
      </div>
    ),
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionSelect = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleGoBack = () => {
    setActiveSection(null);
  };

  return (
    <main className="container mx-auto px-4 font-serif relative min-h-screen flex flex-col items-center justify-start pt-32">
      <>
        <div className="fixed inset-0 pointer-events-none theme-lines-book">
          <div className="absolute top-0 left-1/2 -ml-px w-px h-full bg-foreground/10"></div>
        </div>
      </>
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
            <div className="text-xl leading-relaxed">{sections[activeSection].content}</div>
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
            <HomeFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
