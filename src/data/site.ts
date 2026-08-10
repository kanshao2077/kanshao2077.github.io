export type Lang = "zh" | "en";
export type WorkCategory = "aigc" | "articles" | "vibe" | "skill";

export const languages: Record<Lang, { label: string; switchLabel: string; locale: string }> = {
  zh: {
    label: "中文",
    switchLabel: "EN",
    locale: "zh-CN"
  },
  en: {
    label: "English",
    switchLabel: "中",
    locale: "en"
  }
};

export const nav = {
  zh: [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/works", label: "Works" },
    { href: "/en/about", label: "About" },
    { href: "/en/gallery", label: "Gallery" },
    { href: "/en/contact", label: "Contact" }
  ]
};

export const categoryLabels: Record<Lang, Record<"all" | WorkCategory, string>> = {
  zh: {
    all: "All",
    aigc: "AIGC",
    articles: "Articles",
    vibe: "Vibe Coding",
    skill: "Skill"
  },
  en: {
    all: "All",
    aigc: "AIGC",
    articles: "Articles",
    vibe: "Vibe Coding",
    skill: "Skill"
  }
};

export const copy = {
  zh: {
    meta: {
      title: "侃少 2077",
      description: "AI 产品运营、内容增长与 AIGC 实践者的个人网站。"
    },
    hero: {
      eyebrow: "AI Product Ops / Content Growth / AIGC",
      name: "侃少 2077",
      title: "我与世界，都是帧帧瞬间。",
      intro:
        "我关注 AI 产品运营、内容增长和 AIGC 实践，擅长把复杂工具转化为可传播的内容、可复用的流程和可展示的作品。",
      primaryCta: "看作品",
      secondaryCta: "联系我"
    },
    home: {
      proofTitle: "Fun · Curiosity · Taste ＞ AI",
      proofBody:
        "即使 AI 通常正确，也别顺从，反而要保持判断。尤其在这时，惯性恰恰在此刻滋生。",
      featuredTitle: "精选作品",
      timelineTitle: "工作经历摘要",
      capabilitiesTitle: "三条能力主线",
      currentlyTitle: "Currently",
      galleryTitle: "Gallery",
      galleryBody: "在黑白里温柔地爱彩色，在彩色里朝圣黑白。",
      capabilities: [
        {
          title: "AIGC 实践",
          body: "从工具研究、提示词、视觉生成到平台分发，能把想法推进到成品。"
        },
        {
          title: "内容增长",
          body: "能围绕 AI、产品和科技热点拆选题、写内容、做账号运营和传播。"
        },
        {
          title: "Vibe Coding",
          body: "用 Codex、自动化和小工具快速搭原型，把重复工作变成流程。"
        }
      ],
      currently: [
        "AI 产品 / 运营方向的职业作品集",
        "AIGC 视频与视觉实验的工作流探索",
        "用 Vibe Coding 做内容工具和个人网站",
        "跟进 AI、商业、科技和内容增长的热点"
      ]
    },
    worksPage: {
      title: "Works",
      intro:
        "“创造是用生命去交换比生命更长久的东西。” —— 圣-埃克苏佩里《要塞》",
      empty: "这个分类还没有作品。"
    },
    aboutPage: {
      title: "About",
      intro:
        "一个爱写、会拍剪导，长期沉迷数码 AI、商业科技与各类新知识的内容创作者。",
      bio:
        "我做过 AI 媒体内容运营、AI 工具分享、AIGC 视觉内容创作，也独立搭过 AI 职场提效方向的知识付费项目。我的优势不是“什么都会”，而是能用内容理解产品、用 AIGC 表达想法、用工具把想法快速落地。",
      skillsTitle: "能力关键词",
      timelineTitle: "工作经历",
      noteTitle: "沟通方式",
      note:
        "我偏好直接、简洁、文档优先的协作方式。遇到问题先拆需求，再谈情绪；遇到不理解的地方，我会立刻提问。"
    },
    galleryPage: {
      title: "Gallery",
      intro: "在黑白里温柔地爱彩色，在彩色里朝圣黑白。"
    },
    contactPage: {
      title: "Contact",
      intro: "如果你想聊 AI 产品运营、内容增长、AIGC 项目或合作，可以直接从这里联系我。",
      emailLabel: "邮箱",
      socialTitle: "公开平台",
      copied: "已复制"
    },
    music: {
      listen: "Listen",
      pause: "Pause",
      hint: "点击播放《八方来财》，不会自动播放。"
    }
  },
  en: {
    meta: {
      title: "Kanshao 2077",
      description: "Personal site of an AI product operations, content growth, and AIGC practitioner."
    },
    hero: {
      eyebrow: "AI Product Ops / Content Growth / AIGC",
      name: "Kanshao 2077",
      title: "The world and I are frames of passing moments.",
      intro:
        "I focus on AI product operations, content growth, and AIGC practice. I turn complex tools into communicable content, reusable workflows, and portfolio-grade output.",
      primaryCta: "View Works",
      secondaryCta: "Contact"
    },
    home: {
      proofTitle: "Fun · Curiosity · Taste ＞ AI",
      proofBody:
        "Even when AI is usually right, do not obey by default. Keep your judgment. That is exactly where inertia begins.",
      featuredTitle: "Featured Works",
      timelineTitle: "Experience Snapshot",
      capabilitiesTitle: "Three Capability Tracks",
      currentlyTitle: "Currently",
      galleryTitle: "Gallery",
      galleryBody: "Gently loving color in black and white; making a pilgrimage to black and white within color.",
      capabilities: [
        {
          title: "AIGC Practice",
          body: "From tool research and prompting to visual generation and platform distribution, I move ideas into finished work."
        },
        {
          title: "Content Growth",
          body: "I can shape topics, write, operate accounts, and communicate around AI, product, and tech trends."
        },
        {
          title: "Vibe Coding",
          body: "I use Codex, automation, and small tools to prototype quickly and turn repetitive work into workflows."
        }
      ],
      currently: [
        "Building an AI product / operations portfolio",
        "Exploring workflows for AIGC video and visual experiments",
        "Using Vibe Coding to create content tools and this site",
        "Tracking trends in AI, business, technology, and content growth"
      ]
    },
    worksPage: {
      title: "Works",
      intro:
        "“Creation is exchanging life for something that lasts longer than life.” — Saint-Exupéry, Citadelle",
      empty: "No works in this category yet."
    },
    aboutPage: {
      title: "About",
      intro:
        "A content creator who writes, shoots, edits, directs, and stays deeply curious about digital products, AI, business technology, and new knowledge.",
      bio:
        "I have worked on AI media content operations, AI tool education, AIGC visual creation, and an AI workplace productivity paid-learning project. My value is not that I do everything. It is that I understand products through content, express ideas through AIGC, and use tools to ship quickly.",
      skillsTitle: "Capability Keywords",
      timelineTitle: "Experience",
      noteTitle: "How I Work",
      note:
        "I prefer direct, concise, documentation-first collaboration. When problems appear, I clarify needs before emotions; when I do not understand something, I ask immediately."
    },
    galleryPage: {
      title: "Gallery",
      intro: "Gently loving color in black and white; making a pilgrimage to black and white within color."
    },
    contactPage: {
      title: "Contact",
      intro:
        "Reach out if you want to discuss AI product operations, content growth, AIGC projects, or collaboration.",
      emailLabel: "Email",
      socialTitle: "Public Platforms",
      copied: "Copied"
    },
    music: {
      listen: "Listen",
      pause: "Pause",
      hint: "Click to play Bafang Laicai. It will not autoplay."
    }
  }
} as const;

export const skills = {
  zh: ["AI 产品运营", "内容增长", "AIGC 创作", "AI 工具研究", "长文表达", "Vibe Coding", "信息检索", "文案写作"],
  en: [
    "AI Product Ops",
    "Content Growth",
    "AIGC Creation",
    "AI Tool Research",
    "Long-form Writing",
    "Vibe Coding",
    "Information Retrieval",
    "Copywriting"
  ]
};

export const works = [
  {
    id: "flowpost",
    category: "vibe",
    featured: true,
    cover: "/covers/flowpost-cover-1200.webp",
    href: "https://github.com/kanshao2077/Flowpost",
    zh: {
      title: "FlowPost",
      deck: "内容多平台同步发布工具，支持即刻、X、Substack Notes 和 LinkedIn 的草稿填充。",
      role: "需求拆解、插件实现、发布流程设计",
      result: "把多平台发文从重复复制变成可控的浏览器工作流",
      proof: "这个作品证明：我能把内容增长里的重复劳动产品化成可用工具。",
      tools: ["Browser Extension", "TypeScript", "Content Workflow", "Automation"],
      cta: "查看仓库"
    },
    en: {
      title: "FlowPost",
      deck: "A multi-platform content distribution tool for drafting posts across Jike, X, Substack Notes, and LinkedIn.",
      role: "Requirement breakdown, extension implementation, publishing workflow design",
      result: "Turned repetitive cross-platform posting into a controlled browser workflow",
      proof:
        "This work proves that I can turn repetitive content-growth work into a usable tool.",
      tools: ["Browser Extension", "TypeScript", "Content Workflow", "Automation"],
      cta: "View Repository"
    }
  },
  {
    id: "jianbai",
    category: "vibe",
    featured: false,
    cover: "/covers/jianbai-cover-1200.webp",
    href: "https://kanshao2077.github.io/jianbai/",
    zh: {
      title: "见白 Jian Bai",
      deck: "四栏写作工作台，把素材、初稿、二稿和定稿并排展开，减少写作时反复跳转。",
      role: "产品想法、交互结构、前端实现",
      result: "完成一个纯本地、可在线访问的写作工作台",
      proof: "这个作品证明：我能把内容生产过程拆成清晰的工具界面。",
      tools: ["TypeScript", "Writing Tool", "Local Storage", "GitHub Pages"],
      cta: "打开项目"
    },
    en: {
      title: "Jian Bai",
      deck: "A four-column writing workspace for keeping source material, drafts, revisions, and final copy in one view.",
      role: "Product idea, interaction structure, frontend implementation",
      result: "Shipped a local-first writing workspace with an online demo",
      proof:
        "This work proves that I can translate a content-production workflow into a clear tool interface.",
      tools: ["TypeScript", "Writing Tool", "Local Storage", "GitHub Pages"],
      cta: "Open Project"
    }
  },
  {
    id: "pixel-prompt",
    category: "vibe",
    featured: true,
    cover: "/covers/pixel-prompt-cover-1200.webp",
    href: "https://kanshao2077.github.io/pixel-prompt/",
    zh: {
      title: "PixelPrompt",
      deck: "复古像素风提示词卡片管理器，支持搜索、复制、导入导出和本地保存。",
      role: "需求拆解、提示词管理流程、前端实现",
      result: "完成一个轻量的本地 Prompt 卡片盒",
      proof: "这个作品证明：我能把 AIGC 使用经验沉淀成可复用的个人工具。",
      tools: ["TypeScript", "Prompt", "Local Storage", "GitHub Pages"],
      cta: "打开项目"
    },
    en: {
      title: "PixelPrompt",
      deck: "A retro pixel-style prompt card manager with search, copy, import/export, and local saving.",
      role: "Requirement breakdown, prompt-management workflow, frontend implementation",
      result: "Built a lightweight local prompt card box",
      proof:
        "This work proves that I can turn AIGC usage habits into reusable personal tooling.",
      tools: ["TypeScript", "Prompting", "Local Storage", "GitHub Pages"],
      cta: "Open Project"
    }
  },
  {
    id: "rewrite-studio",
    category: "vibe",
    featured: false,
    cover: "/covers/rewrite-studio-cover-1200.webp",
    href: "https://kanshao2077.github.io/rewrite-studio/",
    zh: {
      title: "Rewrite Studio",
      deck: "AI 改写语料库整理工具，把参考案例、新素材和系统提示词放进同一个工作台。",
      role: "改写流程设计、信息结构、前端实现",
      result: "完成一个面向 AI 改写工作的语料组装工具",
      proof: "这个作品证明：我能把写作和改写里的隐性流程整理成可复用工作台。",
      tools: ["TypeScript", "AI Writing", "Prompt Pack", "GitHub Pages"],
      cta: "打开项目"
    },
    en: {
      title: "Rewrite Studio",
      deck: "An AI rewriting corpus workspace for organizing references, new material, and system prompts.",
      role: "Rewriting workflow design, information structure, frontend implementation",
      result: "Built a corpus assembly tool for AI rewriting tasks",
      proof:
        "This work proves that I can turn hidden writing and rewriting workflows into reusable workspaces.",
      tools: ["TypeScript", "AI Writing", "Prompt Pack", "GitHub Pages"],
      cta: "Open Project"
    }
  },
  {
    id: "xuan-ni-mei",
    category: "vibe",
    featured: false,
    cover: "/covers/xuan-ni-mei-cover-1200.webp",
    href: "https://kanshao2077.github.io/xuan-ni-mei/",
    zh: {
      title: "选你妹",
      deck: "一个用来治选择困难的小网页，把候选项打印成复古小票风格的随机结果。",
      role: "概念设计、前端实现、PWA 配置",
      result: "完成一个轻量、手机可用的决策小工具",
      proof: "这个作品证明：我能把小问题做成有风格、可打开即用的网页工具。",
      tools: ["HTML", "CSS", "JavaScript", "PWA"],
      cta: "打开项目"
    },
    en: {
      title: "Xuan Ni Mei",
      deck: "A tiny decision-making webpage that turns options into a retro receipt-style random result.",
      role: "Concept design, frontend implementation, PWA setup",
      result: "Shipped a lightweight mobile-friendly decision tool",
      proof:
        "This work proves that I can turn a small problem into a styled, immediately usable web tool.",
      tools: ["HTML", "CSS", "JavaScript", "PWA"],
      cta: "Open Project"
    }
  },
  {
    id: "shupian",
    category: "vibe",
    featured: false,
    cover: "/covers/shupian-1200.webp",
    href: "https://github.com/kanshao2077/shupian",
    zh: {
      title: "薯片",
      deck: "把长文、短句和图片排成 3:4 小红书卡片，并辅助填入小红书创作后台。",
      role: "产品设计、卡片排版、浏览器插件与发布流程",
      result: "完成从内容编辑、卡片导出到小红书后台填充的一体化工具",
      proof: "这个作品证明：我能把内容生产和平台发布连接成完整、可控的工作流。",
      tools: ["JavaScript", "Browser Extension", "Content Workflow", "GitHub Pages"],
      cta: "查看仓库"
    },
    en: {
      title: "Shupian",
      deck: "Turns long-form text, short copy, and images into 3:4 Xiaohongshu cards and assists with creator-studio publishing.",
      role: "Product design, card layout, browser extension, publishing workflow",
      result: "Built an integrated workflow from content editing and card export to Xiaohongshu draft filling",
      proof:
        "This work proves that I can connect content production and platform publishing into a controlled end-to-end workflow.",
      tools: ["JavaScript", "Browser Extension", "Content Workflow", "GitHub Pages"],
      cta: "View Repository"
    }
  },
  {
    id: "echo-card",
    category: "vibe",
    featured: false,
    cover: "/covers/echo-card-1200.webp",
    href: "https://github.com/kanshao2077/echo-card",
    zh: {
      title: "回声卡",
      deck: "把值得分享的 AI 回答排成 1080 × 1440 文字卡片，支持复制或下载 PNG。",
      role: "产品设计、模板系统、前端实现",
      result: "完成一款本地处理、支持多种模型与视觉模板的分享卡片工具",
      proof: "这个作品证明：我能把 AI 对话内容转化成适合社交传播的视觉产品。",
      tools: ["JavaScript", "Canvas", "Local-first", "GitHub Pages"],
      cta: "查看仓库"
    },
    en: {
      title: "Echo Card",
      deck: "Turns share-worthy AI answers into 1080 × 1440 text cards that can be copied or downloaded as PNG files.",
      role: "Product design, template system, frontend implementation",
      result: "Built a local-first sharing tool with multiple model sources and visual templates",
      proof:
        "This work proves that I can translate AI conversation content into a visual product designed for social distribution.",
      tools: ["JavaScript", "Canvas", "Local-first", "GitHub Pages"],
      cta: "View Repository"
    }
  },
  {
    id: "jike-timeline-epub",
    category: "vibe",
    featured: false,
    cover: "/covers/jike-timeline-epub-1200.webp",
    href: "https://github.com/kanshao2077/jike-timeline-epub",
    zh: {
      title: "即刻小书摊",
      deck: "把即刻用户时间线按日期采集并导出为排版干净、可导入微信读书的 EPUB。",
      role: "扩展设计、时间线采集、EPUB 生成与验证",
      result: "完成支持日期筛选、预览和断点恢复的本地 Chrome 扩展",
      proof: "这个作品证明：我能把碎片化平台内容整理成更适合长期阅读和收藏的格式。",
      tools: ["Chrome Extension", "JavaScript", "EPUB", "Local Storage"],
      cta: "查看仓库"
    },
    en: {
      title: "Jike Timeline EPUB",
      deck: "Collects a Jike user's timeline by date and exports a clean EPUB ready for long-form reading apps.",
      role: "Extension design, timeline collection, EPUB generation and validation",
      result: "Built a local Chrome extension with date filters, previews, and session recovery",
      proof:
        "This work proves that I can reorganize fragmented platform content into a format suited for long-term reading and archiving.",
      tools: ["Chrome Extension", "JavaScript", "EPUB", "Local Storage"],
      cta: "View Repository"
    }
  },
  {
    id: "weibo-timeline-epub",
    category: "vibe",
    featured: false,
    cover: "/covers/weibo-timeline-epub-1200.webp",
    href: "https://github.com/kanshao2077/weibo-timeline-epub",
    zh: {
      title: "微博小书摊",
      deck: "在本地浏览器采集公开可见的微博时间线，并导出成可保存、可阅读的 EPUB。",
      role: "扩展设计、登录态采集、EPUB 导出",
      result: "完成不上传内容、不保存账号密码的微博时间线导出工具",
      proof: "这个作品证明：我能在隐私和平台限制下设计实用的个人信息归档工具。",
      tools: ["Chrome Extension", "JavaScript", "EPUB", "Privacy"],
      cta: "查看仓库"
    },
    en: {
      title: "Weibo Timeline EPUB",
      deck: "Collects publicly visible Weibo timelines inside the local browser and exports them as readable EPUB books.",
      role: "Extension design, authenticated collection, EPUB export",
      result: "Built a timeline exporter that uploads no content and stores no account credentials",
      proof:
        "This work proves that I can design practical personal archiving tools within privacy and platform constraints.",
      tools: ["Chrome Extension", "JavaScript", "EPUB", "Privacy"],
      cta: "View Repository"
    }
  },
  {
    id: "hangzhou-stardew",
    category: "aigc",
    featured: true,
    cover: "/covers/aigc-hangzhou-stardew-1200.webp",
    href:
      "https://www.xiaohongshu.com/discovery/item/680b1ffd000000000f032eb3?source=webshare&xhsshare=pc_web&xsec_token=ABAE_OfYZaOghGGKb6BVP_QwKVjFexE43N6B3eTpt6TQw=&xsec_source=pc_share",
    zh: {
      title: "杭州，但是星露谷版",
      deck: "把杭州地标转译成星露谷物语式像素视觉，探索城市记忆的 AIGC 风格化表达。",
      role: "AIGC 视觉策划、风格设定、平台发布",
      result: "完成城市主题像素风视觉作品并发布到小红书",
      proof: "这个作品证明：我能把城市文化和视觉风格结合，做出有传播感的 AIGC 内容。",
      tools: ["AIGC", "Pixel Art", "City Visual", "Xiaohongshu"],
      cta: "打开小红书"
    },
    en: {
      title: "Hangzhou, Stardew Valley Style",
      deck: "AIGC visual experiment translating Hangzhou landmarks into a Stardew Valley-inspired pixel mood.",
      role: "AIGC visual planning, style direction, platform publishing",
      result: "Created and published a city-themed pixel-style visual piece on Xiaohongshu",
      proof:
        "This work proves that I can combine city culture and visual style into shareable AIGC content.",
      tools: ["AIGC", "Pixel Art", "City Visual", "Xiaohongshu"],
      cta: "Open Xiaohongshu"
    }
  },
  {
    id: "wuhan-stardew",
    category: "aigc",
    featured: false,
    cover: "/covers/aigc-wuhan-stardew-1200.webp",
    href:
      "https://www.xiaohongshu.com/discovery/item/680c5636000000000900da2a?source=webshare&xhsshare=pc_web&xsec_token=ABlB2XLqxxrJeU6tBJ98PwIlQ1_ZGPX65OGCg1if_kqjk=&xsec_source=pc_share",
    zh: {
      title: "武汉，但是星露谷版",
      deck: "把武汉地标和城市氛围做成像素风 AIGC 画面，强化地域识别和视觉记忆点。",
      role: "AIGC 视觉策划、风格设定、平台发布",
      result: "完成武汉主题像素风视觉作品并发布到小红书",
      proof: "这个作品证明：我能用 AIGC 为城市内容建立统一风格和传播入口。",
      tools: ["AIGC", "Pixel Art", "City Visual", "Xiaohongshu"],
      cta: "打开小红书"
    },
    en: {
      title: "Wuhan, Stardew Valley Style",
      deck: "An AIGC pixel-style city visual that turns Wuhan landmarks and atmosphere into a recognizable visual memory.",
      role: "AIGC visual planning, style direction, platform publishing",
      result: "Created and published a Wuhan-themed pixel-style visual piece on Xiaohongshu",
      proof:
        "This work proves that I can use AIGC to build a coherent visual style and distribution entry for city content.",
      tools: ["AIGC", "Pixel Art", "City Visual", "Xiaohongshu"],
      cta: "Open Xiaohongshu"
    }
  },
  {
    id: "no-one-owes-you-a-good-era",
    category: "articles",
    featured: false,
    cover: "/covers/article-no-one-owes-you-a-good-era-1200.webp",
    href: "https://mp.weixin.qq.com/s/FMZ8SFGzLau79zvQ0td9IQ",
    zh: {
      title: "没人欠你一个好时代",
      deck: "关于个体、时代红利和自我负责的观察：别把希望完全押在外部环境。",
      role: "选题、写作、发布",
      result: "完成一篇面向公众号读者的个人观察文章",
      proof: "这个作品证明：我能把时代情绪和个人判断整理成可传播的表达。",
      tools: ["WeChat", "Writing", "Personal Essay", "Content"],
      cta: "阅读原文"
    },
    en: {
      title: "No One Owes You a Good Era",
      deck: "An observation on individual agency, external opportunity, and not outsourcing hope to the times.",
      role: "Topic selection, writing, publishing",
      result: "Published a personal observation essay for WeChat readers",
      proof:
        "This work proves that I can turn cultural mood and personal judgment into shareable writing.",
      tools: ["WeChat", "Writing", "Personal Essay", "Content"],
      cta: "Read Original"
    }
  },
  {
    id: "keep-the-fire",
    category: "articles",
    featured: false,
    cover: "/covers/article-keep-the-fire-1200.webp",
    href: "https://mp.weixin.qq.com/s/Wi6JDbZBKTJ_J2H-A8OV-Q",
    zh: {
      title: "鸡血要常有",
      deck: "一篇关于状态管理、行动惯性和自我打气的短文。",
      role: "写作、编辑、发布",
      result: "完成一篇情绪与行动主题的公众号文章",
      proof: "这个作品证明：我能把个人状态转译成有共鸣的内容表达。",
      tools: ["WeChat", "Writing", "Editing", "Content"],
      cta: "阅读原文"
    },
    en: {
      title: "Keep the Fire",
      deck: "A short essay on managing energy, keeping momentum, and giving yourself useful fuel.",
      role: "Writing, editing, publishing",
      result: "Published a WeChat essay about emotion and action",
      proof:
        "This work proves that I can translate personal state into resonant content.",
      tools: ["WeChat", "Writing", "Editing", "Content"],
      cta: "Read Original"
    }
  },
  {
    id: "before-2026",
    category: "articles",
    featured: false,
    cover: "/covers/article-before-2026-1200.webp",
    href: "https://mp.weixin.qq.com/s/OtTYEJqzBeKcmNixoCmGSA",
    zh: {
      title: "写在 2026 之前",
      deck: "在新一年之前，对阶段、方向和生活节奏做一次整理。",
      role: "复盘、写作、发布",
      result: "完成一篇面向阶段总结和未来判断的个人文章",
      proof: "这个作品证明：我能把阶段性思考整理成清晰、有画面感的文字。",
      tools: ["WeChat", "Reflection", "Writing", "Content"],
      cta: "阅读原文"
    },
    en: {
      title: "Before 2026",
      deck: "A reflection before the new year, sorting out phase, direction, and life rhythm.",
      role: "Reflection, writing, publishing",
      result: "Published a personal essay about transition and future direction",
      proof:
        "This work proves that I can turn phase-based reflection into clear, visual writing.",
      tools: ["WeChat", "Reflection", "Writing", "Content"],
      cta: "Read Original"
    }
  },
  {
    id: "ai-writing-after-old-experience",
    category: "articles",
    featured: true,
    cover: "/covers/article-ai-writing-after-old-experience-1200.webp",
    href: "https://my.feishu.cn/wiki/UsipwzUvYiyQg5kymVYcBs98nxG",
    zh: {
      title: "旧经验失效之后，我怎么继续用 AI 写作",
      deck: "记录旧写作方法失效后，如何重新拆解 AI 写作流程和判断标准。",
      role: "写作方法复盘、AI 工作流整理、文档沉淀",
      result: "沉淀一篇关于 AI 写作方法迁移的长文",
      proof: "这个作品证明：我能持续复盘工具变化，并把经验沉淀成可迁移的方法。",
      tools: ["Feishu", "AI Writing", "Workflow", "Reflection"],
      cta: "阅读原文"
    },
    en: {
      title: "How I Keep Writing With AI After Old Experience Stops Working",
      deck: "A note on rebuilding AI writing workflows and judgment criteria after old methods stop working.",
      role: "Writing-method review, AI workflow organization, documentation",
      result: "Documented a long-form reflection on adapting AI writing methods",
      proof:
        "This work proves that I can review tool changes and turn experience into transferable methods.",
      tools: ["Feishu", "AI Writing", "Workflow", "Reflection"],
      cta: "Read Original"
    }
  },
  {
    id: "feishu-personal-manual",
    category: "articles",
    featured: false,
    cover: "/covers/feishu-personal-handbook-1200.webp",
    href: "https://my.feishu.cn/wiki/EnK5wYzdsiRJlJkD2Smcml7zn8f",
    zh: {
      title: "我的飞书个人说明书",
      deck: "用一份飞书文档集中介绍我自己，作为认识我和继续交流的入口。",
      role: "自我介绍、信息整理、文档维护",
      result: "形成一份可持续更新的个人说明文档",
      proof: "这个作品证明：我能把个人信息和表达组织成清晰、可访问的文档入口。",
      tools: ["Feishu", "Personal Profile", "Writing", "Documentation"],
      cta: "打开飞书"
    },
    en: {
      title: "My Personal User Manual on Feishu",
      deck: "A Feishu document that introduces who I am and provides a starting point for further conversation.",
      role: "Self-introduction, information organization, document maintenance",
      result: "Created a personal manual that can be continuously updated",
      proof:
        "This work proves that I can organize personal information and expression into a clear, accessible document.",
      tools: ["Feishu", "Personal Profile", "Writing", "Documentation"],
      cta: "Open Feishu"
    }
  },
  {
    id: "xhs-title-skill",
    category: "skill",
    featured: false,
    cover: "/covers/social-media-title-skill-1200.webp",
    href: "https://github.com/kanshao2077/xhs-title-skill",
    zh: {
      title: "自媒体爆款标题 Skill",
      deck: "从正文生成不同传播方向的标题，完成诊断、筛选、排序和单变量 A/B 备选。",
      role: "方法设计、平台规则整理、Skill 实现",
      result: "形成可安装、可复用的自媒体标题工作流",
      proof: "这个作品证明：我能把内容增长中的标题判断拆成可执行、可复用的 Agent 工作流。",
      tools: ["Codex Skill", "Content Growth", "A/B Testing", "Social Media"],
      cta: "查看 Skill"
    },
    en: {
      title: "Social Media Viral Title Skill",
      deck: "Generates distinct title directions from a draft, then diagnoses, ranks, and creates single-variable A/B options.",
      role: "Method design, platform rules, Skill implementation",
      result: "Built an installable and reusable social media title workflow",
      proof:
        "This work proves that I can turn title judgment in content growth into an executable Agent workflow.",
      tools: ["Codex Skill", "Content Growth", "A/B Testing", "Social Media"],
      cta: "View Skill"
    }
  },
  {
    id: "shot-doctor",
    category: "skill",
    featured: false,
    cover: "/covers/shot-doctor-1200.webp",
    href: "https://github.com/kanshao2077/shot-doctor",
    zh: {
      title: "镜头医生",
      deck: "把自然语言、剧本、分镜和参考素材编译成精简、可执行、平台适配的 AIGC 视频提示词。",
      role: "影视提示词方法、平台适配、Skill 架构",
      result: "形成覆盖多模式、多镜头和主流视频平台的提示词工作流",
      proof: "这个作品证明：我能把影视语言、连续性和平台约束转译成可执行的生成指令。",
      tools: ["AIGC Video", "Prompt Engineering", "Storyboard", "Platform Adapters"],
      cta: "查看 Skill"
    },
    en: {
      title: "Shot Doctor",
      deck: "Compiles ideas, scripts, storyboards, and references into concise, executable, platform-ready AIGC video prompts.",
      role: "Cinematic prompting, platform adaptation, Skill architecture",
      result: "Built a prompt workflow covering multiple modes, shots, and major video platforms",
      proof:
        "This work proves that I can translate cinematic language, continuity, and platform constraints into executable generation instructions.",
      tools: ["AIGC Video", "Prompt Engineering", "Storyboard", "Platform Adapters"],
      cta: "View Skill"
    }
  },
  {
    id: "podlink",
    category: "skill",
    featured: false,
    cover: "/covers/podlink-1200.webp",
    href: "https://github.com/kanshao2077/PodLink",
    zh: {
      title: "PodLink",
      deck: "从公开播客单集页提取并验证真实音频直链，直接交给转写工具使用。",
      role: "提取流程、验证脚本、跨 Agent 适配",
      result: "完成无需第三方依赖的播客音频直链提取 Skill",
      proof: "这个作品证明：我能把繁琐的网页和 RSS 排查做成可验证的自动化工具。",
      tools: ["Python", "Podcast", "RSS", "URL Verification"],
      cta: "查看 Skill"
    },
    en: {
      title: "PodLink",
      deck: "Extracts and verifies real audio URLs from public podcast episode pages for direct use in transcription tools.",
      role: "Extraction workflow, verification script, cross-Agent adaptation",
      result: "Built a podcast audio URL extraction Skill with no third-party dependencies",
      proof:
        "This work proves that I can turn tedious webpage and RSS inspection into a verifiable automation tool.",
      tools: ["Python", "Podcast", "RSS", "URL Verification"],
      cta: "View Skill"
    }
  },
  {
    id: "article-juicer-skill",
    category: "skill",
    featured: false,
    cover: "/covers/article-juicer-skill-1200.webp",
    href: "https://github.com/kanshao2077/article-juicer-skill",
    zh: {
      title: "文章榨汁机",
      deck: "把长文章、帖子和评论区重建成精华、批判审视、金句和可发布的个人回响。",
      role: "内容分析框架、输出结构、中文表达规则",
      result: "形成面向多种长文本的高密度提炼 Skill",
      proof: "这个作品证明：我能把阅读和内容再加工流程沉淀成结构化方法。",
      tools: ["Codex Skill", "Content Analysis", "Long-form", "Writing"],
      cta: "查看 Skill"
    },
    en: {
      title: "Article Juicer",
      deck: "Reconstructs long articles, posts, and comments into concise insight, critical review, quotes, and publishable reflection.",
      role: "Content-analysis framework, output structure, Chinese writing rules",
      result: "Built a high-density extraction Skill for multiple long-form formats",
      proof:
        "This work proves that I can turn reading and content repurposing into a structured method.",
      tools: ["Codex Skill", "Content Analysis", "Long-form", "Writing"],
      cta: "View Skill"
    }
  },
  {
    id: "deep-research-skill",
    category: "skill",
    featured: false,
    cover: "/covers/deep-research-skill-1200.webp",
    href: "https://github.com/kanshao2077/deep-research-skill",
    zh: {
      title: "深度调研 Skill",
      deck: "围绕决策拆解问题，按信源权重交叉验证，并输出带置信度和审计记录的结论。",
      role: "调研框架、信源权重、验证脚本",
      result: "形成适配中国大陆场景的多信源调研 Skill",
      proof: "这个作品证明：我能把搜索升级成可追溯、可验证的研究流程。",
      tools: ["Deep Research", "Source Weighting", "Fact Checking", "Python"],
      cta: "查看 Skill"
    },
    en: {
      title: "Deep Research Skill",
      deck: "Breaks decisions into research questions, cross-checks weighted sources, and reports confidence with an audit trail.",
      role: "Research framework, source weighting, verification scripts",
      result: "Built a multi-source research Skill adapted for mainland China contexts",
      proof:
        "This work proves that I can turn search into a traceable and verifiable research process.",
      tools: ["Deep Research", "Source Weighting", "Fact Checking", "Python"],
      cta: "View Skill"
    }
  },
  {
    id: "cover-skill",
    category: "skill",
    featured: false,
    cover: "/covers/cover-skill-1200.webp",
    href: "https://github.com/kanshao2077/CoverSkill",
    zh: {
      title: "CoverSkill",
      deck: "根据内容逐步确认风格、人物、背景和字体，生成可直接用于图片模型的小红书封面提示词。",
      role: "封面方法、交互流程、视觉规则与 Skill 实现",
      result: "形成覆盖八种常见小红书封面风格的提示词生成 Skill",
      proof: "这个作品证明：我能把封面设计判断整理成用户可以逐步完成的生成流程。",
      tools: ["Codex Skill", "Prompt Design", "Visual Direction", "Xiaohongshu"],
      cta: "查看 Skill"
    },
    en: {
      title: "CoverSkill",
      deck: "Guides users through style, subject, background, and typography choices to produce image-model-ready Xiaohongshu cover prompts.",
      role: "Cover methodology, interaction flow, visual rules, Skill implementation",
      result: "Built a prompt-generation Skill covering eight common Xiaohongshu cover styles",
      proof:
        "This work proves that I can turn cover-design judgment into a guided and executable generation process.",
      tools: ["Codex Skill", "Prompt Design", "Visual Direction", "Xiaohongshu"],
      cta: "View Skill"
    }
  },
  {
    id: "short-sentence-layout-skill",
    category: "skill",
    featured: false,
    cover: "/covers/short-sentence-layout-skill-1200.webp",
    href: "https://github.com/kanshao2077/short-sentence-layout-skill",
    zh: {
      title: "短句排版 Skill",
      deck: "不改写、不删减原文，把长段落按语义拆成适合手机扫读的十三字以内短句。",
      role: "排版规则、内容类型适配、保真检查脚本",
      result: "形成支持观点、故事、教程、口播等内容的移动端排版 Skill",
      proof: "这个作品证明：我能把中文阅读体验中的细节判断做成稳定、可验证的规则。",
      tools: ["Codex Skill", "Python", "Chinese Typography", "Content Formatting"],
      cta: "查看 Skill"
    },
    en: {
      title: "Short Sentence Layout Skill",
      deck: "Preserves every word while breaking dense Chinese paragraphs into semantic, mobile-friendly lines of up to thirteen characters.",
      role: "Layout rules, content-type adaptation, fidelity validation script",
      result: "Built a mobile formatting Skill for essays, stories, tutorials, voice scripts, and more",
      proof:
        "This work proves that I can turn nuanced Chinese reading-experience judgment into stable and verifiable rules.",
      tools: ["Codex Skill", "Python", "Chinese Typography", "Content Formatting"],
      cta: "View Skill"
    }
  },
  {
    id: "kanshao-writing-skill",
    category: "skill",
    featured: false,
    cover: "/covers/kanshao-writing-skill-1200.webp",
    href: "https://github.com/kanshao2077/kanshao-writing-skill",
    zh: {
      title: "侃少写作 Skill",
      deck: "基于真实材料和个人判断完成中文写作、改写与跨平台适配，避免虚构经历和模板化表达。",
      role: "个人写作方法、事实边界、编辑规则与 Skill 实现",
      result: "形成适配公众号、观点短文和社交平台内容的个人写作助手",
      proof: "这个作品证明：我能把自己的写作经验明确成可执行的方法，同时保留人的判断权。",
      tools: ["Codex Skill", "Chinese Writing", "Editing", "Content Adaptation"],
      cta: "查看 Skill"
    },
    en: {
      title: "Kanshao Writing Skill",
      deck: "Writes, rewrites, and adapts Chinese content from real material and personal judgment without inventing experience or using formulaic prose.",
      role: "Personal writing method, factual boundaries, editing rules, Skill implementation",
      result: "Built a personal writing assistant for WeChat essays, opinion pieces, and social content",
      proof:
        "This work proves that I can formalize my writing experience into an executable method while preserving human judgment.",
      tools: ["Codex Skill", "Chinese Writing", "Editing", "Content Adaptation"],
      cta: "View Skill"
    }
  },
  {
    id: "jibu-li-ke-shi",
    category: "skill",
    featured: false,
    cover: "/covers/jibu-li-ke-shi-1200.webp",
    href: "https://github.com/kanshao2077/jibu-li-ke-shi",
    zh: {
      title: "吉卜力风格可视化 Skill",
      deck: "把文章、活动介绍和数据摘要整理成自然水彩感、可截图分享的动态中文网页。",
      role: "信息提炼、视觉系统、响应式网页生成规则",
      result: "形成从文本内容到独立 HTML 可视化页面的生成 Skill",
      proof: "这个作品证明：我能把信息结构和视觉表达组合成可复用的网页生成方法。",
      tools: ["Codex Skill", "HTML", "Tailwind CSS", "Data Visualization"],
      cta: "查看 Skill"
    },
    en: {
      title: "Ghibli-style Visualization Skill",
      deck: "Turns articles, event briefs, and data summaries into dynamic Chinese webpages with a natural watercolor visual language.",
      role: "Information extraction, visual system, responsive webpage generation rules",
      result: "Built a generation Skill that turns source text into standalone HTML visualizations",
      proof:
        "This work proves that I can combine information structure and visual expression into a reusable webpage-generation method.",
      tools: ["Codex Skill", "HTML", "Tailwind CSS", "Data Visualization"],
      cta: "View Skill"
    }
  },
  {
    id: "huituan-codex-pet",
    category: "skill",
    featured: false,
    cover: "/covers/codex-desktop-pet-skill-1200.webp",
    href: "https://github.com/kanshao2077/huituan-codex-pet",
    zh: {
      title: "Codex 桌宠 Skill",
      deck: "保存可迁移的灰团桌面宠物，并提供创建、校验、打包和安装 Codex v2 宠物的完整 Skill。",
      role: "角色资产、动画规范、校验工具与跨平台安装流程",
      result: "完成桌面宠物成品、发布包、验证脚本和可复用 Hatch Pet Skill",
      proof: "这个作品证明：我能把创意角色从视觉资产推进到可验证、可迁移的软件包。",
      tools: ["Python", "Codex Skill", "Sprite Animation", "Packaging"],
      cta: "查看 Skill"
    },
    en: {
      title: "Codex Desktop Pet Skill",
      deck: "Preserves a portable Huituan desktop pet and provides a complete Skill for creating, validating, packaging, and installing Codex v2 pets.",
      role: "Character assets, animation contract, validation tools, cross-platform installation",
      result: "Shipped the desktop pet, release package, validation scripts, and reusable Hatch Pet Skill",
      proof:
        "This work proves that I can carry a creative character from visual assets to a validated and portable software package.",
      tools: ["Python", "Codex Skill", "Sprite Animation", "Packaging"],
      cta: "View Skill"
    }
  }
] satisfies Array<{
  id: string;
  category: WorkCategory;
  featured: boolean;
  cover: string;
  href: string;
  zh: {
    title: string;
    deck: string;
    role: string;
    result: string;
    proof: string;
    tools: string[];
    cta: string;
  };
  en: {
    title: string;
    deck: string;
    role: string;
    result: string;
    proof: string;
    tools: string[];
    cta: string;
  };
}>;

export const timeline = [
  {
    time: {
      zh: "2025.06 - 至今",
      en: "2025 - Present"
    },
    title: {
      zh: "AI 内容运营",
      en: "AI Content Operations"
    },
    org: {
      zh: "蚂蚁集团（HRO）｜杭州",
      en: "Ant Group (HRO) | Hangzhou"
    },
    bullets: {
      zh: [
        "参与 Homi 官网从 0 到 1 搭建，负责信息架构梳理、内容填充、页面检查与上线推进，并参与 Homi 官方 IP 机器人视觉设计。",
        "负责「提个 Dima」栏目核心运营，围绕需求创建、需求拆解、异步协作、AI 字段和跨平台创建等场景产出 9 篇深度内容。",
        "接手蚂蚁+社区日常运营，维护内容发布节奏、用户反馈回收、核心业务群、邮箱钉卡配置、精选内容和奖品邮寄等流程。",
        "参与 CIO IP 形象设计和蚂蚁+与 AI Agent 共存模式调研，输出 IP 视觉资产和 Agent 共存方案参考。",
        "参与 527 产品日、CLI 主题直播和年度周边采购，覆盖活动执行、直播统筹、物料管理、供应链对接和约 10 万元采购预算管理。"
      ],
      en: [
        "Contributed to the Homi official website from zero to launch, covering information architecture, content filling, page checks, launch coordination, and Homi IP robot visual design.",
        "Operated the core Dima content column, producing 9 in-depth posts around requirement creation, requirement breakdown, async collaboration, AI fields, and cross-platform creation.",
        "Took over daily Ant+ community operations, maintaining publishing cadence, feedback collection, business groups, mail and DingTalk card setup, curated content, and reward fulfillment.",
        "Participated in CIO IP design and research on how Ant+ can coexist with AI Agents, producing IP visual assets and reference research.",
        "Supported Product Day, CLI livestreams, and annual merch procurement, covering event execution, livestream coordination, material management, supplier communication, and roughly 100k RMB procurement budget."
      ]
    },
    output: {
      zh: "代表产出：Homi 官网与 IP 视觉、Dima 功能内容矩阵、蚂蚁+社区运营 SOP、产品日和 CLI 直播执行、年度周边采购流程。",
      en: "Representative output: Homi website and IP visuals, Dima feature content matrix, Ant+ community operation SOP, Product Day and CLI livestream execution, annual merch procurement workflow."
    }
  },
  {
    time: {
      zh: "2024.11 - 2025.06",
      en: "2024.11 - 2025.06"
    },
    title: {
      zh: "AIGC 内容运营",
      en: "AIGC Content Operations"
    },
    org: {
      zh: "杭州薛定谔猫科技｜杭州",
      en: "Hangzhou Schrodinger Cat Technology | Hangzhou"
    },
    bullets: {
      zh: [
        "参与小红书哥特风账号「Fashion Mind」与官方号「Magicat.AI」运营，从 MJ 生图到可灵转视频，搭建 AI 模特和 AI 视频制作 SOP。",
        "主导 AIGC 视频智能体项目，带领运营团队提炼产品卖点，对比 Runway、Pika、可灵等 8 款工具，落地纯 AI 视频工作流。",
        "独立从 0 到 1 撰写 AI 产品白皮书、用户手册和使用指南，并结合 Shots、Napkin、Recraft 等竞品案例体系化整理产品资料。"
      ],
      en: [
        "Operated the Xiaohongshu goth-style account Fashion Mind and the official account Magicat.AI, building SOPs for AI model creation and AI video production from Midjourney images to Kling video.",
        "Led an AIGC video agent project, helping the operations team refine product selling points, compare 8 tools including Runway, Pika, and Kling, and build a fully AI-driven video workflow.",
        "Independently wrote AI product white papers, user manuals, and guides from zero, while structuring product materials with reference to Shots, Napkin, Recraft, and other competitors."
      ]
    },
    output: {
      zh: "代表产出：100w+ 播放内容、AI 模特与 AI 视频 SOP、AIGC 视频工具评测报告、可灵 AI 使用指南、产品白皮书与用户手册。",
      en: "Representative output: 1M+ view content, AI model and AI video SOPs, AIGC video tool review report, Kling AI guide, product white papers and user manuals."
    }
  },
  {
    time: {
      zh: "2024.06 - 2024.10",
      en: "2024.06 - 2024.10"
    },
    title: {
      zh: "新媒体运营",
      en: "New Media Operations"
    },
    org: {
      zh: "杭州深蓝睿思科技｜杭州",
      en: "Hangzhou Shenlan Ruisi Technology | Hangzhou"
    },
    bullets: {
      zh: [
        "从 0 到 1 搭建 AI 工具类账号「深蓝 AI 工具箱」，产出多个 100w+ 爆款视频，并与母号「深蓝 AI」联动直播转化。",
        "原创设计并上线《AI PPT / AI Excel》系列教程，覆盖图文和视频内容，帮助企业用户理解并使用 AI 办公工具。",
        "参与公众号「深蓝研选」冷启动，撰写科技类图文内容，产出 67w+ 爆款内容，推动账号从 0 到 1 涨粉 4,000+。"
      ],
      en: [
        "Built the AI tools account Shenlan AI Toolbox from zero, producing multiple 1M+ view videos and supporting livestream conversion with the main account Shenlan AI.",
        "Designed and launched original AI PPT / AI Excel tutorials across text and video formats to help enterprise users understand and use AI office tools.",
        "Participated in the cold start of the Shenlan Selected WeChat account, writing tech content, producing a 670k+ view post, and helping grow the account by 4,000+ followers."
      ]
    },
    output: {
      zh: "代表产出：AI 工具账号冷启动、100w+ 爆款视频、AI PPT / AI Excel 教程、67w+ 科技图文内容。",
      en: "Representative output: AI tools account cold start, 1M+ view videos, AI PPT / AI Excel tutorials, 670k+ view tech content."
    }
  },
  {
    time: {
      zh: "2024.01 - 2024.05",
      en: "2024.01 - 2024.05"
    },
    title: {
      zh: "新媒体运营",
      en: "New Media Operations"
    },
    org: {
      zh: "杭州东剑创意文化｜杭州",
      en: "Hangzhou Dongjian Creative Culture | Hangzhou"
    },
    bullets: {
      zh: [
        "从 0 到 1 创建并运营视频号「纸条科技」，负责选题策划、文案写作和视频剪辑，产出 100w+ 级爆款内容。",
        "参与品牌活动策划，与微博大 V 和 KOL 合作，承接联想、OPPO、比亚迪等品牌营销需求，完成传播文案、活动策划稿和视频内容制作。"
      ],
      en: [
        "Created and operated the video account Zhitiao Tech from zero, covering topic planning, copywriting, and video editing, with 1M+ view content output.",
        "Supported brand campaign planning with Weibo creators and KOLs, serving marketing needs for brands including Lenovo, OPPO, and BYD through campaign copy, planning drafts, and video content."
      ]
    },
    output: {
      zh: "代表产出：科技视频号冷启动、100w+ 级爆款内容、品牌活动传播文案与视频内容。",
      en: "Representative output: tech video account cold start, 1M+ view content, brand campaign copy and video content."
    }
  }
];

export const gallery: Array<{
  image: string;
  title: Record<Lang, string>;
}> = [
  {
    image: "/gallery/2026-read.webp",
    title: {
      zh: "2026 好好看书",
      en: "2026, Read Properly"
    }
  },
  {
    image: "/gallery/life-long-run.webp",
    title: {
      zh: "人生是一场长跑",
      en: "Life Is a Long Run"
    }
  },
  {
    image: "/gallery/black-myth-journey.webp",
    title: {
      zh: "玩玩黑神话，踏上取经路",
      en: "Playing Black Myth, Starting the Journey"
    }
  },
  {
    image: "/gallery/ai-certificate.webp",
    title: {
      zh: "小小人工智能证书，拿下",
      en: "Tiny AI Certificate, Secured"
    }
  }
];

export const contactLinks = [
  {
    label: "Email",
    name: { zh: "邮箱", en: "Email" },
    handle: "1176981634@qq.com",
    value: "1176981634@qq.com",
    href: "mailto:1176981634@qq.com",
    icon: "email",
    featured: true,
    action: { zh: "发邮件", en: "Email" }
  },
  {
    label: "GitHub",
    name: { zh: "GitHub", en: "GitHub" },
    handle: "@kanshao2077",
    value: "github.com/kanshao2077",
    href: "https://github.com/kanshao2077",
    icon: "github",
    featured: true,
    action: { zh: "查看", en: "View" }
  },
  {
    label: "X",
    name: { zh: "X", en: "X" },
    handle: "@KanShao2077",
    value: "x.com/KanShao2077",
    href: "https://x.com/KanShao2077",
    icon: "x",
    featured: true,
    action: { zh: "关注", en: "Follow" }
  },
  {
    label: "Bilibili",
    name: { zh: "Bilibili", en: "Bilibili" },
    handle: "space/252142379",
    value: "space.bilibili.com/252142379",
    href: "https://space.bilibili.com/252142379?spm_id_from=333.1007.0.0",
    icon: "bilibili",
    featured: true,
    action: { zh: "关注", en: "Follow" }
  },
  {
    label: "Xiaohongshu",
    name: { zh: "小红书", en: "Xiaohongshu" },
    handle: "@侃少 2077",
    value: "xiaohongshu.com/user/profile/6014fb900000000001000bf3",
    href: "https://www.xiaohongshu.com/user/profile/6014fb900000000001000bf3",
    icon: "xiaohongshu",
    featured: true,
    action: { zh: "关注", en: "Follow" }
  },
  {
    label: "WeChat Official Account",
    name: { zh: "公众号", en: "WeChat Official Account" },
    handle: "侃少 2077",
    value: "侃少 2077 - 公众号",
    href: "https://mp.weixin.qq.com/s/c68pKSKAQYf7XrSE4juADA",
    icon: "wechat",
    featured: false,
    action: { zh: "阅读", en: "Read" }
  },
  {
    label: "Jike",
    name: { zh: "即刻", en: "Jike" },
    handle: "侃少 2077",
    value: "侃少 2077 - 即刻",
    href: "https://web.okjike.com/me",
    icon: "jike",
    featured: false,
    action: { zh: "打开", en: "Open" }
  },
  {
    label: "Douban",
    name: { zh: "豆瓣", en: "Douban" },
    handle: "people/161938093",
    value: "douban.com/people/161938093",
    href: "https://www.douban.com/people/161938093/",
    icon: "douban",
    featured: false,
    action: { zh: "打开", en: "Open" }
  },
  {
    label: "Sspai",
    name: { zh: "少数派", en: "Sspai" },
    handle: "@8w57ty3q",
    value: "sspai.com/u/8w57ty3q",
    href: "https://sspai.com/u/8w57ty3q/updates",
    icon: "sspai",
    featured: false,
    action: { zh: "打开", en: "Open" }
  }
];

export function langPath(lang: Lang, path: string) {
  if (lang === "zh") return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}

export function switchPath(lang: Lang, path: string) {
  if (lang === "zh") return path === "/" ? "/en" : `/en${path}`;
  if (path === "/") return "/";
  return path.replace(/^\/en/, "") || "/";
}
