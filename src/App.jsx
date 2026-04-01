import { useState, useEffect, useRef } from "react";

// ===== CONTENT DATA - Edit your info here =====
const content = {
  zh: {
    nav: ["首页", "关于", "经历", "技能", "作品", "文章", "联系"],
    hero: {
      greeting: "你好，我是",
      name: "原始大陆",
      tagline: "传播学硕士 · 基建央企宣传人 · 跨界思考者",
      cta: "了解更多",
    },
    about: {
      title: "关于我",
      bio: "厦门大学新闻传播学硕士，现就职于中铁四局八分公司，深耕基建央企品牌传播与党建宣传领域。擅长将复杂的工程叙事转化为有温度的传播内容，熟练运用新媒体工具进行全链路内容生产。",
      bio2: "工作之余，持续探索跨学科思维方法论，关注产业趋势与个人成长的交叉地带。相信「跃层思维」的力量——用跨领域视角拆解问题，在看似无关的领域间建立连接。",
      stats: ["🎓 厦门大学硕士", "🏗️ 中铁四局", "📍 合肥", "✍️ 内容创作者"],
    },
    experience: {
      title: "工作经历",
      items: [
        {
          company: "中铁四局八分公司",
          role: "宣传部 · 品牌传播与党建宣传",
          date: "2022.04 — 至今",
          points: [
            "负责公司级新媒体矩阵运营，统筹微信公众号、视频号等平台内容策划与发布",
            "独立完成多部企业宣传片策划与脚本撰写，主导视频制作全流程管理",
            "承担公司年鉴《钢轨上的年轮》编撰工作，负责文稿写作与历史资料整理",
          ],
        },
        {
          company: "厦门大学",
          role: "新闻传播学硕士（非全日制）",
          date: "2020 — 2023",
          points: [
            "研究方向：建筑央企微信公众平台形象建构",
            "导师：邹振东教授",
            "系统学习传播学理论与新媒体研究方法",
          ],
        },
      ],
    },
    skills: {
      title: "技能图谱",
      items: [
        { name: "内容创作", level: 92 },
        { name: "新媒体运营", level: 88 },
        { name: "视频策划制作", level: 82 },
        { name: "品牌传播", level: 85 },
        { name: "写作与编辑", level: 95 },
        { name: "项目管理", level: 78 },
        { name: "数据分析", level: 65 },
        { name: "Python", level: 55 },
      ],
    },
    projects: {
      title: "作品集",
      items: [
        {
          title: "《钢轨上的年轮》",
          desc: "中铁四局八分公司企业历史出版物，担任主要撰稿人与编辑",
          tags: ["写作", "编辑", "企业文化"],
        },
        {
          title: "宁象市域宣传片",
          desc: "36场景企业宣传片脚本策划与制作流程管理，时长约6.5分钟",
          tags: ["视频制作", "脚本策划", "项目管理"],
        },
        {
          title: "公司微信公众号运营",
          desc: "统筹公众号内容策划、排版设计与数据分析，持续优化传播效果",
          tags: ["新媒体", "公众号", "数据分析"],
        },
        {
          title: "党建主题系列内容",
          desc: "策划并执行多期党建学习专题内容，创新表达形式提升传播力",
          tags: ["党建", "内容策划", "创意传播"],
        },
      ],
    },
    blog: {
      title: "最新文章",
      items: [
        { title: "跃层思维：跨学科视角下的职业规划", date: "2026.03", excerpt: "如何用传播学、经济学、系统论的交叉视角重新审视个人职业发展路径..." },
        { title: "基建央企品牌传播的困境与突围", date: "2026.02", excerpt: "从内容生产到渠道重构，探讨传统基建企业在新媒体时代的传播策略..." },
        { title: "AI工具如何改变内容创作者的工作流", date: "2026.01", excerpt: "从文案写作到视频制作，AI正在重塑内容生产的每一个环节..." },
      ],
      readMore: "阅读更多 →",
    },
    social: {
      title: "找到我",
      wechat: "微信公众号",
      wechatSub: "扫码关注",
      red: "小红书",
      bili: "B站",
    },
    footer: {
      copy: "© 2026 原始大陆. Built with ❤️",
      backTop: "回到顶部",
    },
  },
  en: {
    nav: ["Home", "About", "Experience", "Skills", "Projects", "Blog", "Contact"],
    hero: {
      greeting: "Hi, I'm",
      name: "Jerry",
      tagline: "M.A. in Communication · Infra SOE Comms · Cross-disciplinary Thinker",
      cta: "Learn More",
    },
    about: {
      title: "About Me",
      bio: "Master of Journalism and Communication from Xiamen University. Currently at China Railway Fourth Bureau (8th Branch), specializing in brand communications and party affairs for a state-owned infrastructure enterprise. Skilled at transforming complex engineering narratives into compelling, human-centered content.",
      bio2: "Outside of work, I continuously explore cross-disciplinary thinking methodologies, focusing on the intersection of industry trends and personal growth. I believe in 'leap-level thinking' — using cross-domain perspectives to deconstruct problems and build connections across seemingly unrelated fields.",
      stats: ["🎓 Xiamen Univ. M.A.", "🏗️ CRFG 4th Bureau", "📍 Hefei, China", "✍️ Content Creator"],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "China Railway 4th Bureau, 8th Branch",
          role: "Communications Dept · Brand & Party Affairs",
          date: "Apr 2022 — Present",
          points: [
            "Manage corporate new media matrix including WeChat Official Account and Video Channel",
            "Independently plan and produce corporate promotional films, managing full production pipeline",
            "Lead writer and editor for corporate history publication \"Rings on the Rail\"",
          ],
        },
        {
          company: "Xiamen University",
          role: "M.A. in Journalism & Communication (Part-time)",
          date: "2020 — 2023",
          points: [
            "Research: Image construction of construction SOEs on WeChat platforms",
            "Advisor: Prof. Zou Zhendong",
            "Systematic study of communication theory and new media research methods",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      items: [
        { name: "Content Creation", level: 92 },
        { name: "New Media Ops", level: 88 },
        { name: "Video Production", level: 82 },
        { name: "Brand Comms", level: 85 },
        { name: "Writing & Editing", level: 95 },
        { name: "Project Mgmt", level: 78 },
        { name: "Data Analysis", level: 65 },
        { name: "Python", level: 55 },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "\"Rings on the Rail\"",
          desc: "Corporate history publication for CRFG 4th Bureau 8th Branch. Lead writer and editor.",
          tags: ["Writing", "Editing", "Culture"],
        },
        {
          title: "Ningxiang Promo Film",
          desc: "36-scene corporate film script planning and production management, ~6.5 min.",
          tags: ["Video", "Scriptwriting", "PM"],
        },
        {
          title: "WeChat Official Account",
          desc: "End-to-end content strategy, design, and analytics for corporate WeChat account.",
          tags: ["New Media", "WeChat", "Analytics"],
        },
        {
          title: "Party Building Series",
          desc: "Planned and executed innovative party education content with enhanced creative expression.",
          tags: ["Party Affairs", "Content", "Creative"],
        },
      ],
    },
    blog: {
      title: "Latest Posts",
      items: [
        { title: "Leap-Level Thinking: Career Planning Through Cross-Disciplinary Lenses", date: "Mar 2026", excerpt: "How to re-examine career development through intersecting perspectives of communication, economics, and systems theory..." },
        { title: "Breaking Through: Brand Comms in Infrastructure SOEs", date: "Feb 2026", excerpt: "From content production to channel reconstruction — exploring communication strategies for traditional infrastructure enterprises..." },
        { title: "How AI Tools Are Reshaping Content Creator Workflows", date: "Jan 2026", excerpt: "From copywriting to video production, AI is transforming every stage of content creation..." },
      ],
      readMore: "Read More →",
    },
    social: {
      title: "Find Me",
      wechat: "WeChat Official",
      wechatSub: "Scan to Follow",
      red: "Xiaohongshu",
      bili: "Bilibili",
    },
    footer: {
      copy: "© 2026 Jerry. Built with ❤️",
      backTop: "Back to Top",
    },
  },
};

// ===== SOCIAL LINKS - Replace with your real URLs =====
const socialLinks = {
  wechatQR: "https://placehold.co/200x200/0a0f1a/00d4ff?text=QR+Code", // {REPLACE} your WeChat QR code image
  red: {
    url: "https://www.xiaohongshu.com/user/profile/YOUR_ID", // {REPLACE}
    avatar: "https://placehold.co/80x80/ff2442/fff?text=RED", // {REPLACE}
  },
  bili: {
    url: "https://space.bilibili.com/YOUR_ID", // {REPLACE}
    avatar: "https://placehold.co/80x80/00a1d6/fff?text=B", // {REPLACE}
  },
};

// ===== Intersection Observer Hook =====
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ===== Animated Section Wrapper =====
function Section({ id, children, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)",
      }}
    >
      {children}
    </section>
  );
}

// ===== Glow Button =====
function GlowBtn({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 32px",
        border: "1px solid rgba(0,212,255,0.4)",
        borderRadius: "8px",
        background: "rgba(0,212,255,0.08)",
        color: "#00d4ff",
        fontSize: "15px",
        fontFamily: "'Space Grotesk','Noto Sans SC',sans-serif",
        cursor: "pointer",
        transition: "all 0.3s",
        letterSpacing: "0.5px",
        ...style,
      }}
      onMouseEnter={e => {
        e.target.style.background = "rgba(0,212,255,0.18)";
        e.target.style.boxShadow = "0 0 24px rgba(0,212,255,0.25)";
      }}
      onMouseLeave={e => {
        e.target.style.background = "rgba(0,212,255,0.08)";
        e.target.style.boxShadow = "none";
      }}
    >
      {children}
    </button>
  );
}

// ===== Skill Bar =====
function SkillBar({ name, level, delay, visible }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontFamily: "'Space Grotesk','Noto Sans SC',sans-serif", fontSize: 14, color: "#c0d0e0" }}>
        <span>{name}</span>
        <span style={{ color: "#00d4ff" }}>{level}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            borderRadius: 3,
            width: visible ? `${level}%` : "0%",
            background: `linear-gradient(90deg, #00d4ff ${100 - level}%, #7b61ff)`,
            transition: `width 1s cubic-bezier(.22,1,.36,1) ${delay}ms`,
            boxShadow: visible ? "0 0 12px rgba(0,212,255,0.3)" : "none",
          }}
        />
      </div>
    </div>
  );
}

// ===== Main App =====
export default function App() {
  const [lang, setLang] = useState("zh");
  const [menuOpen, setMenuOpen] = useState(false);
  const [wechatPopup, setWechatPopup] = useState(false);
  const [typed, setTyped] = useState("");
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);
  const t = content[lang];

  // Typing effect
  useEffect(() => {
    const name = t.hero.name;
    setTyped("");
    let i = 0;
    const timer = setInterval(() => {
      if (i <= name.length) {
        setTyped(name.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, [lang, t.hero.name]);

  // Skills observer
  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionIds = ["hero", "about", "experience", "skills", "projects", "blog", "social"];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior: smooth; }
    body { background: #060a14; color: #e0e8f0; font-family: 'Outfit','Noto Sans SC',sans-serif; overflow-x:hidden; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #060a14; }
    ::-webkit-scrollbar-thumb { background: #1a2a3a; border-radius: 3px; }
    ::selection { background: rgba(0,212,255,0.25); }
    @keyframes gridPulse {
      0%,100% { opacity: 0.03; }
      50% { opacity: 0.07; }
    }
    @keyframes float {
      0%,100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes blink {
      0%,100% { opacity: 1; }
      50% { opacity: 0; }
    }
    @keyframes glowPulse {
      0%,100% { box-shadow: 0 0 20px rgba(0,212,255,0.1); }
      50% { box-shadow: 0 0 40px rgba(0,212,255,0.2); }
    }
  `;

  const cardStyle = {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: 28,
    transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
    backdropFilter: "blur(12px)",
  };

  const hoverCard = (e) => {
    e.currentTarget.style.border = "1px solid rgba(0,212,255,0.2)";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,212,255,0.08)";
    e.currentTarget.style.transform = "translateY(-4px)";
  };
  const unhoverCard = (e) => {
    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <style>{css}</style>

      {/* Grid background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        animation: "gridPulse 8s ease-in-out infinite",
      }} />

      {/* Ambient glow orbs */}
      <div style={{ position: "fixed", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0, animation: "float 12s ease-in-out infinite" }} />
      <div style={{ position: "fixed", bottom: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(123,97,255,0.03) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0, animation: "float 15s ease-in-out infinite 3s" }} />

      {/* ===== NAV ===== */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 40px",
        background: "rgba(6,10,20,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 18, fontWeight: 500, color: "#00d4ff", letterSpacing: 1 }}>
          {"<"}<span style={{ color: "#e0e8f0" }}>{lang === "zh" ? "原始大陆" : "Jerry"}</span>{" />"}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", gap: 4 }}>
            {t.nav.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(sectionIds[i])}
                style={{
                  background: "none", border: "none", color: "#8899aa", fontSize: 14,
                  padding: "8px 14px", cursor: "pointer", borderRadius: 6,
                  fontFamily: "'Outfit','Noto Sans SC',sans-serif",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => { e.target.style.color = "#00d4ff"; e.target.style.background = "rgba(0,212,255,0.06)"; }}
                onMouseLeave={e => { e.target.style.color = "#8899aa"; e.target.style.background = "none"; }}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Lang toggle */}
          <button
            onClick={() => setLang(l => l === "zh" ? "en" : "zh")}
            style={{
              background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)",
              color: "#00d4ff", padding: "6px 14px", borderRadius: 20, cursor: "pointer",
              fontSize: 13, fontFamily: "'JetBrains Mono',monospace", fontWeight: 500,
              marginLeft: 12, transition: "all 0.3s",
            }}
            onMouseEnter={e => e.target.style.background = "rgba(0,212,255,0.18)"}
            onMouseLeave={e => e.target.style.background = "rgba(0,212,255,0.08)"}
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 24px 80px", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: 18, color: "#607080", fontWeight: 300, letterSpacing: 2, marginBottom: 16, fontFamily: "'Outfit','Noto Sans SC',sans-serif" }}>
          {t.hero.greeting}
        </p>
        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 800,
          background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #7b61ff 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          lineHeight: 1.1, marginBottom: 24, minHeight: "1.2em",
        }}>
          {typed}<span style={{ animation: "blink 1s step-end infinite", WebkitTextFillColor: "#00d4ff" }}>|</span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#6080a0", maxWidth: 600, lineHeight: 1.6, marginBottom: 40, fontWeight: 300 }}>
          {t.hero.tagline}
        </p>
        <GlowBtn onClick={() => scrollTo("about")}>{t.hero.cta}</GlowBtn>
        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, animation: "float 3s ease-in-out infinite" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#304050" strokeWidth="1.5">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <Section id="about">
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48, color: "#fff" }}>
            <span style={{ color: "#00d4ff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 400, fontSize: 16, display: "block", marginBottom: 8 }}>01.</span>
            {t.about.title}
          </h2>
          <div style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Avatar */}
            <div style={{
              width: 140, height: 140, borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #0a1020, #0d1a30)",
              border: "2px solid rgba(0,212,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              animation: "glowPulse 4s ease-in-out infinite",
              fontSize: 48,
            }}>
              👤
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#a0b0c0", marginBottom: 16 }}>{t.about.bio}</p>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#a0b0c0", marginBottom: 28 }}>{t.about.bio2}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {t.about.stats.map((s, i) => (
                  <span key={i} style={{
                    padding: "6px 16px", borderRadius: 20, fontSize: 13,
                    background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.12)",
                    color: "#8ebadb", fontWeight: 500,
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== EXPERIENCE ===== */}
      <Section id="experience">
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48, color: "#fff" }}>
            <span style={{ color: "#00d4ff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 400, fontSize: 16, display: "block", marginBottom: 8 }}>02.</span>
            {t.experience.title}
          </h2>
          <div style={{ position: "relative", paddingLeft: 32 }}>
            {/* Timeline line */}
            <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: "linear-gradient(180deg, #00d4ff, rgba(123,97,255,0.3), transparent)" }} />
            {t.experience.items.map((item, i) => (
              <div key={i} style={{ marginBottom: 40, position: "relative" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: -28, top: 8, width: 12, height: 12, borderRadius: "50%",
                  background: "#00d4ff", boxShadow: "0 0 12px rgba(0,212,255,0.4)",
                }} />
                <div style={{ ...cardStyle }} onMouseEnter={hoverCard} onMouseLeave={unhoverCard}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>{item.company}</h3>
                    <span style={{ fontSize: 13, color: "#507090", fontFamily: "'JetBrains Mono',monospace" }}>{item.date}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#00d4ff", marginBottom: 16, fontWeight: 500 }}>{item.role}</p>
                  {item.points.map((p, j) => (
                    <p key={j} style={{ fontSize: 14, color: "#8899aa", lineHeight: 1.8, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#00d4ff" }}>›</span>{p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SKILLS ===== */}
      <Section id="skills">
        <div ref={skillsRef} style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48, color: "#fff" }}>
            <span style={{ color: "#00d4ff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 400, fontSize: 16, display: "block", marginBottom: 8 }}>03.</span>
            {t.skills.title}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            <div>
              {t.skills.items.slice(0, 4).map((s, i) => (
                <SkillBar key={i} name={s.name} level={s.level} delay={i * 150} visible={skillsVisible} />
              ))}
            </div>
            <div>
              {t.skills.items.slice(4).map((s, i) => (
                <SkillBar key={i} name={s.name} level={s.level} delay={(i + 4) * 150} visible={skillsVisible} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== PROJECTS ===== */}
      <Section id="projects">
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "100px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48, color: "#fff" }}>
            <span style={{ color: "#00d4ff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 400, fontSize: 16, display: "block", marginBottom: 8 }}>04.</span>
            {t.projects.title}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {t.projects.items.map((p, i) => (
              <div key={i} style={{ ...cardStyle, display: "flex", flexDirection: "column" }} onMouseEnter={hoverCard} onMouseLeave={unhoverCard}>
                {/* Thumbnail placeholder */}
                <div style={{
                  height: 140, borderRadius: 10, marginBottom: 20,
                  background: `linear-gradient(135deg, hsl(${200 + i * 25}, 60%, 12%), hsl(${220 + i * 25}, 50%, 8%))`,
                  border: "1px solid rgba(255,255,255,0.04)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 36, color: "rgba(0,212,255,0.15)",
                }}>
                  📁
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#7888a0", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: 11, padding: "3px 10px", borderRadius: 12,
                      background: "rgba(123,97,255,0.08)", color: "#9b8aff",
                      border: "1px solid rgba(123,97,255,0.15)",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== BLOG ===== */}
      <Section id="blog">
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48, color: "#fff" }}>
            <span style={{ color: "#00d4ff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 400, fontSize: 16, display: "block", marginBottom: 8 }}>05.</span>
            {t.blog.title}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {t.blog.items.map((b, i) => (
              <div key={i} style={{ ...cardStyle, cursor: "pointer" }} onMouseEnter={hoverCard} onMouseLeave={unhoverCard}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>{b.title}</h3>
                  <span style={{ fontSize: 12, color: "#506070", fontFamily: "'JetBrains Mono',monospace" }}>{b.date}</span>
                </div>
                <p style={{ fontSize: 14, color: "#708090", lineHeight: 1.7, marginBottom: 12 }}>{b.excerpt}</p>
                <span style={{ fontSize: 13, color: "#00d4ff", fontWeight: 500 }}>{t.blog.readMore}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SOCIAL ===== */}
      <Section id="social">
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48, color: "#fff" }}>
            <span style={{ color: "#00d4ff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 400, fontSize: 16, display: "block", marginBottom: 8 }}>06.</span>
            {t.social.title}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {/* WeChat */}
            <div
              style={{ ...cardStyle, textAlign: "center", cursor: "pointer", position: "relative" }}
              onMouseEnter={(e) => { hoverCard(e); setWechatPopup(true); }}
              onMouseLeave={(e) => { unhoverCard(e); setWechatPopup(false); }}
            >
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(7,193,96,0.12)", border: "1px solid rgba(7,193,96,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28 }}>
                💬
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{t.social.wechat}</h3>
              <p style={{ fontSize: 13, color: "#07c160" }}>{t.social.wechatSub}</p>
              {/* QR Popup */}
              {wechatPopup && (
                <div style={{
                  position: "absolute", bottom: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)",
                  background: "#0d1520", border: "1px solid rgba(7,193,96,0.3)", borderRadius: 12,
                  padding: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.5)", zIndex: 10,
                }}>
                  <img src={socialLinks.wechatQR} alt="WeChat QR" style={{ width: 160, height: 160, borderRadius: 8 }} />
                  <div style={{ width: 12, height: 12, background: "#0d1520", border: "1px solid rgba(7,193,96,0.3)", borderTop: "none", borderLeft: "none", position: "absolute", bottom: -7, left: "50%", transform: "translateX(-50%) rotate(45deg)" }} />
                </div>
              )}
            </div>

            {/* Xiaohongshu */}
            <a href={socialLinks.red.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ ...cardStyle, textAlign: "center" }} onMouseEnter={hoverCard} onMouseLeave={unhoverCard}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", overflow: "hidden", margin: "0 auto 16px", border: "2px solid rgba(255,36,66,0.3)" }}>
                  <img src={socialLinks.red.avatar} alt="RED" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{t.social.red}</h3>
                <p style={{ fontSize: 13, color: "#ff2442" }}>@{lang === "zh" ? "原始大陆" : "Jerry"}</p>
              </div>
            </a>

            {/* Bilibili */}
            <a href={socialLinks.bili.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ ...cardStyle, textAlign: "center" }} onMouseEnter={hoverCard} onMouseLeave={unhoverCard}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", overflow: "hidden", margin: "0 auto 16px", border: "2px solid rgba(0,161,214,0.3)" }}>
                  <img src={socialLinks.bili.avatar} alt="Bilibili" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{t.social.bili}</h3>
                <p style={{ fontSize: 13, color: "#00a1d6" }}>@{lang === "zh" ? "原始大陆" : "Jerry"}</p>
              </div>
            </a>
          </div>
        </div>
      </Section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        textAlign: "center", padding: "48px 24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        position: "relative", zIndex: 1,
      }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 24 }}>
          <span style={{ cursor: "pointer", fontSize: 20, opacity: 0.5, transition: "opacity 0.3s" }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.5} onClick={() => setWechatPopup(!wechatPopup)}>💬</span>
          <a href={socialLinks.red.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, opacity: 0.5, transition: "opacity 0.3s", textDecoration: "none" }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.5}>📕</a>
          <a href={socialLinks.bili.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, opacity: 0.5, transition: "opacity 0.3s", textDecoration: "none" }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.5}>📺</a>
        </div>
        <p style={{ fontSize: 13, color: "#405060", marginBottom: 16 }}>{t.footer.copy}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none", border: "1px solid rgba(255,255,255,0.08)", color: "#506070",
            padding: "8px 20px", borderRadius: 20, cursor: "pointer", fontSize: 12,
            fontFamily: "'Outfit','Noto Sans SC',sans-serif", transition: "all 0.3s",
          }}
          onMouseEnter={e => { e.target.style.borderColor = "rgba(0,212,255,0.3)"; e.target.style.color = "#00d4ff"; }}
          onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.color = "#506070"; }}
        >
          ↑ {t.footer.backTop}
        </button>
      </footer>
    </div>
  );
}
