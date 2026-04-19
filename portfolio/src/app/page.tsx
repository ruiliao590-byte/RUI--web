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
              onClick={() => setEmailRevealed((v) => !v)}
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
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play();
  };
  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
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
    { src: "/videos/jimeng-1.mp4", title: "光影漂移", desc: "粒子与光在暗域中自由飘散，呈现一种无重力的静谧" },
    { src: "/videos/jimeng-2.mp4", title: "形态溶解", desc: "固态轮廓在帧间缓缓液化，边界消失于抽象的过渡中" },
    { src: "/videos/jimeng-3.mp4", title: "色域穿越", desc: "从冷蓝到暖橙的渐变横扫画面，如同星云在时间轴上蔓延" },
    { src: "/videos/jimeng-4.mp4", title: "几何呼吸", desc: "平面图形在三维空间中收缩与伸展，节律感油然而生" },
    { src: "/videos/jimeng-5.mp4", title: "材质相变", desc: "玻璃、金属与流体在同一画面交替显现，探索物质的临界状态" },
    { src: "/videos/jimeng-6.mp4", title: "节奏切片", desc: "快切与慢动作交错剪辑，将时间本身变成可见的鼓点" },
    { src: "/videos/hailuo-curtain.mp4", title: "织物风语", desc: "薄纱随气流轻轻起伏，光线穿透织物投下柔和光晕" },
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
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {videos.map((v) => (
            <div key={v.src} className="break-inside-avoid">
              <VideoCard src={v.src} title={v.title} desc={v.desc} />
            </div>
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
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div key={img.src} className="break-inside-avoid">
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                onClick={() => setLightboxSrc(`${BASE}${img.src}`)}
                className="w-full text-left border border-foreground/10 rounded-xl overflow-hidden bg-foreground/5 hover:border-foreground/30 transition-colors duration-300 shadow-sm hover:shadow-md"
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
            </div>
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
      <div className="space-y-16">
        {/* Skills */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">01</span>
            <h3 className="text-xl font-bold tracking-wide">Skills</h3>
            <div className="flex-1 border-t border-foreground/10" />
            <a href="https://skillstore.io" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/40 tracking-wider hover:text-foreground/70 transition-colors">Skillstore →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "📚", name: "picture-book-wizard", desc: "双语绘本创作 · 18种视觉风格，适合3-12岁儿童", href: "https://skillstore.io/skills/picture-book-wizard" },
              { icon: "📋", name: "project-planner", desc: "软件项目规划 · 需求文档、系统设计与任务拆解", href: "https://skillstore.io/skills/project-planner" },
              { icon: "🔒", name: "vibe-security", desc: "代码安全扫描 · 检测 SQL 注入、XSS 等多语言漏洞", href: "https://skillstore.io/skills/zhanlincui-vibe-security" },
              { icon: "⚡", name: "frontend-dev-guidelines", desc: "Next.js 15 最佳实践 · React 19 + TypeScript + Tailwind", href: "https://skillstore.io/skills/frontend-dev-guidelines" },
              { icon: "🧪", name: "tdd", desc: "测试驱动开发 · 先写失败测试，再实现功能的工程方法论", href: "https://skillstore.io/skills/mattpocock-tdd" },
              { icon: "🏭", name: "industrial-brutalist-ui", desc: "工业粗野主义 UI · 瑞士字体与军事终端美学的融合设计", href: "https://skillstore.io/skills/leonxlnx-industrial-brutalist-ui" },
              { icon: "🎬", name: "pexoai-agent", desc: "AI 视频生成 · 文本/图像转 5-120 秒视频的自动化流水线", href: "https://skillstore.io/skills/pexoai-pexoai-agent" },
              { icon: "🔧", name: "develop-userscripts", desc: "浏览器脚本开发 · GM API 与 Tampermonkey 运行时差异指南", href: "https://skillstore.io/skills/xixu-me-develop-userscripts" },
              { icon: "🏗️", name: "web-artifacts-builder", desc: "React 快速脚手架 · TypeScript + Tailwind + 40+ shadcn/ui 组件", href: "https://skillstore.io/skills/zhanlincui-web-artifacts-builder" },
              { icon: "✨", name: "vercel-react-view-transitions", desc: "页面转场动画 · View Transitions API 与共享元素动画实现", href: "https://skillstore.io/skills/vercel-labs-vercel-react-view-transitions" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 border border-foreground/10 rounded-xl p-4 bg-background/50 hover:border-foreground/30 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-2xl shrink-0 mt-0.5">{s.icon}</span>
                <div className="min-w-0">
                  <p className="font-mono text-xs font-bold tracking-tight text-foreground/70 group-hover:text-foreground transition-colors truncate">{s.name}</p>
                  <p className="text-xs text-foreground/55 leading-relaxed mt-1">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 高阶提示词 */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">02</span>
            <h3 className="text-xl font-bold tracking-wide">高阶提示词</h3>
            <div className="flex-1 border-t border-foreground/10" />
            <a href="https://www.aishort.top" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/40 tracking-wider hover:text-foreground/70 transition-colors">AI Short →</a>
          </div>
          <div className="space-y-4">
            {[
              {
                en: "As a writing improvement assistant, improve the spelling, grammar, clarity, concision, and overall readability of the text, while breaking down long sentences and reducing repetition.",
                zh: "写作提升助理 · 纠正语法、精炼结构，将冗长段落拆解为清晰可读的表达",
              },
              {
                en: "Act as an English translator and improver. Detect the language, translate it and answer in the corrected and improved version of my text, in English.",
                zh: "英语翻译优化 · 多语言输入、高质量英文输出，全面提升语句的文学性",
              },
              {
                en: "Act as a professional spelling and grammar corrector. Replace my simplified words and sentences with more beautiful and elegant, upper level English in the style of the journal Nature.",
                zh: "Nature 风格润色 · 以顶刊审稿标准精炼学术英文，词汇与句式全面升维",
              },
              {
                en: "Act as a prompt generator for Midjourney AI. Provide detailed and creative descriptions that will inspire unique images, rich in visual texture and compositional guidance.",
                zh: "Midjourney 提示生成器 · 生成包含构图、光线、材质的专业 AI 绘画指令",
              },
              {
                en: "Act as a Socratic teacher. Use probing questions to help the student discover the answer themselves rather than giving it directly. Encourage critical thinking at each step.",
                zh: "苏格拉底式教学 · 通过追问引导自主推理，培养批判性思维而非直接给出答案",
              },
              {
                en: "Act as a code reviewer. Analyze the code for bugs, performance issues, security vulnerabilities, and style inconsistencies. Provide specific, actionable suggestions with explanations.",
                zh: "代码审查专家 · 识别 Bug、性能瓶颈与安全漏洞，给出可落地的改进建议",
              },
              {
                en: "Act as an experienced product manager. Help define product requirements, create user stories, prioritize features using MoSCoW, and identify potential risks in the roadmap.",
                zh: "产品经理思维 · 需求定义、功能优先级排序与风险评估的结构化方法",
              },
              {
                en: "Act as a data analyst. Examine the provided data, identify patterns, outliers, and trends, then present actionable insights in a clear, structured format with supporting evidence.",
                zh: "数据分析师 · 挖掘规律与异常值，将原始数据转化为可行的决策依据",
              },
              {
                en: "Act as a technical documentation writer. Create clear and well-structured documentation for the given code or system. Include usage examples, parameters, return values, and edge cases.",
                zh: "技术文档写作 · 将代码与系统逻辑转化为开发者可直接使用的规范文档",
              },
              {
                en: "Act as a UX research analyst. Evaluate the described interface, identify usability pain points, and recommend improvements based on cognitive load theory and user behavior patterns.",
                zh: "UX 研究分析 · 基于认知负荷理论评估界面可用性，提出以用户行为为中心的优化方案",
              },
            ].map((p, i) => (
              <div key={i} className="border border-foreground/10 rounded-xl p-5 bg-background/50 hover:border-foreground/25 transition-colors duration-300">
                <p className="font-mono text-xs text-foreground/50 leading-relaxed mb-3 tracking-wide">{p.en}</p>
                <p className="text-sm font-medium text-foreground/80">{p.zh}</p>
              </div>
            ))}
          </div>
        </div>
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
            className={`w-full ${activeSection === "archive" || activeSection === "thoughts" ? "max-w-5xl" : "max-w-3xl"} mx-auto p-8 relative`}
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
