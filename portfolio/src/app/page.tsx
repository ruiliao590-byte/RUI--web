"use client";

import { Directory } from "@/components/directory";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
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

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function VideoCard({ src, title, desc }: { src: string; title: string; desc: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };
  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border border-foreground/10 rounded-2xl overflow-hidden bg-foreground/5 hover:border-foreground/30 transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer"
    >
      <video
        ref={videoRef}
        src={`${BASE}${src}`}
        muted
        loop
        playsInline
        className="w-full h-auto block"
        preload="metadata"
      />
      <div className="px-4 py-3 space-y-1 bg-background/50">
        <p className="font-bold text-sm tracking-tight">{title}</p>
        <p className="text-xs text-foreground/60 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function ArchiveContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const videos = [
    { src: "/videos/jimeng-1.mp4", title: "即梦 生成 · 一", desc: "流动的光与色彩，AI 对运动美学的第一次探索" },
    { src: "/videos/jimeng-2.mp4", title: "即梦 生成 · 二", desc: "抽象叙事的视觉实验，色彩在帧间自由涌动" },
    { src: "/videos/jimeng-3.mp4", title: "即梦 生成 · 三", desc: "粒子与流体的交融，生成式动态的边界探索" },
    { src: "/videos/jimeng-4.mp4", title: "即梦 生成 · 四", desc: "极简动态构图，AI 对节奏与留白的理解" },
    { src: "/videos/jimeng-5.mp4", title: "即梦 生成 · 五", desc: "环境光与运动轨迹的诗意捕捉，情绪驱动的画面" },
    { src: "/videos/jimeng-6.mp4", title: "即梦 生成 · 六", desc: "AI 对时间序列的重构，情绪化的帧间叙事" },
    { src: "/videos/hailuo-curtain.mp4", title: "海螺 · 窗帘随风", desc: "轻盈的窗帘随风漂移，海螺 AI 生成的静谧瞬间" },
  ];

  const images = [
    { src: "/images/img-01-moebius.png", title: "Moebius 极繁主义", desc: "非对称构图 · Jean Giraud 风格" },
    { src: "/images/img-02-rabbit.png", title: "拟人化小兔", desc: "日常快照风格 · 随机构图" },
    { src: "/images/img-03-forest.png", title: "印象派原始森林", desc: "广角对称构图 · 印象派色调" },
    { src: "/images/img-04-dumbo.png", title: "SMALL DUMBO", desc: "Q版3D IP · 浅蓝小象全案设计" },
    { src: "/images/img-05-poster.png", title: "日系极简海报", desc: "丝网印刷 · 极简留白" },
    { src: "/images/img-06-persimmon.png", title: "钢笔柿子精描", desc: "点线技法 · 绿橙双色" },
    { src: "/images/img-07-miro-pop.png", title: "米罗波普解构", desc: "极繁主义 · 胡安·米罗风格" },
    { src: "/images/img-08-abstract.png", title: "复古未来主义", desc: "梦幻渐变 · 弥散超现实" },
    { src: "/images/img-09-explorer.png", title: "远古骸骨探险", desc: "原始森林 · 蛇颈龙化石" },
    { src: "/images/img-10-doodle.png", title: "Mr Doodle 狗狗", desc: "黑白涂鸦 · 密铺插画" },
    { src: "/images/img-11-vector.png", title: "矢量版画粉紫", desc: "噪点肌理 · 高对比反差" },
    { src: "/images/img-12-tomato.png", title: "扁平化番茄", desc: "几何插画 · 明快色彩" },
  ];

  return (
    <div className="space-y-16">
      {/* 视频 */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">01</span>
          <h3 className="text-xl font-bold tracking-wide">视频</h3>
          <div className="flex-1 border-t border-foreground/10" />
          <span className="text-xs text-foreground/40 tracking-wider">AI Generated</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <VideoCard key={v.src} src={v.src} title={v.title} desc={v.desc} />
          ))}
        </div>
      </div>

      {/* 图片 */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">02</span>
          <h3 className="text-xl font-bold tracking-wide">图片</h3>
          <div className="flex-1 border-t border-foreground/10" />
          <span className="text-xs text-foreground/40 tracking-wider">AI Generated</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <motion.button
              key={img.src}
              type="button"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              onClick={() => setLightboxSrc(`${BASE}${img.src}`)}
              className="text-left border border-foreground/10 rounded-xl overflow-hidden bg-foreground/5 hover:border-foreground/30 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}${img.src}`}
                alt={img.title}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="px-3 py-2 space-y-0.5 bg-background/50">
                <p className="font-bold text-xs tracking-tight truncate">{img.title}</p>
                <p className="text-[10px] text-foreground/50 leading-tight truncate">{img.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* 灯箱 */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxSrc}
                alt="放大预览"
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />
              <button
                type="button"
                onClick={() => setLightboxSrc(null)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors text-xl leading-none"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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

        <hr className="border-t-2 border-dotted border-foreground/20 my-12" />

        <div>
          <h3 className="text-2xl font-bold mb-6">项目经历</h3>
          <div className="space-y-10">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h4 className="text-xl font-bold">AI 标注团队全流程管理 Agent 工作流</h4>
                <div className="text-sm text-foreground/70">Agent 工作流架构师 / AI 训练师</div>
              </div>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-foreground/80 text-base leading-relaxed">
                <li>从 0 到 1 搭建 E2E 标注管理工作流，日均稳定处理 1500+ 条标注任务，跑通「需求承接→规则文档→试标培训→过程管理→项目复盘」全链路 AI 辅助闭环。</li>
                <li>针对高并发下 Agent 输出乱码与幻觉问题，优化 API 编码规范、引入上下文截断机制，有效提升模型回复结构稳定性。</li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h4 className="text-xl font-bold">AI 效率工具生态与全栈独立开发实践</h4>
                <div className="text-sm text-foreground/70">独立开发者 / AI 前沿创作者</div>
              </div>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-foreground/80 text-base leading-relaxed">
                <li>独立开发网页自动预打标插件，减少冗余复制粘贴操作，将整体标注效率提升约 50%。</li>
                <li>以 Vibe Coding 范式独立开发并上线独立游戏、学习路径网站及个人专属网站，完成 GitHub 全流程自动化部署。</li>
                <li>AI 技术实战沉淀：持续追踪前沿动态并产出深度文档，具备极强的技术调研、方案拆解与工程落地闭环能力。</li>
              </ul>
            </div>
          </div>
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
          AI 不是替代人，而是放大人。真正的差距来自你能否把意图讲清楚、把验收讲清楚、把边界讲清楚。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          所有模型能力，最终都落在数据上。好数据不是多，而是可解释、可复现、可迭代。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          幻觉不是一个缺点标签，而是一种不确定性输出。关键是把不确定性显式化，并在产品里设计兜底链路。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          训练师的价值不在写提示词，而在定义标准答案的形状：字段、约束、反例、失败方式。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          评测是模型的指南针。没有可量化的评测，你看到的只是运气好的一次输出。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          Agent 的上限取决于工具的下限。工具越稳定、接口越明确，智能体越像一个可靠的同事。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          上下文窗口不是记忆，它更像工作台。把长期知识放到检索，把短期状态放到上下文，结构才会稳。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          游戏是训练强化学习直觉的好介质：奖励函数是一种价值观，环境约束是一种现实。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          自动化标注不只是省时间，更重要的是把一致性写进系统，让团队的共识变成流水线的一部分。
        </blockquote>
        <blockquote className="text-2xl border-l-4 border-foreground/20 pl-6 py-2">
          最好的 AI 产品，应该让用户感受到更强的掌控感，而不是更强的魔法感。
        </blockquote>
      </div>
    ),
  },
  archive: {
    title: "IV. 归档",
    content: <ArchiveContent />,
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
            className={`w-full ${activeSection === "archive" ? "max-w-5xl" : "max-w-3xl"} mx-auto p-8 relative`}
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
