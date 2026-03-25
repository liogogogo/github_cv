export interface ContactInfo {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  location?: string;
}

export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Project {
  name: string;
  role?: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  description: string[];
  link?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  highlights?: string[];
}

export interface Resume {
  name: string;
  title: string;
  avatar?: string;
  contact: ContactInfo;
  about: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
}

export const resume: Resume = {
  name: "廖承城",
  title: "Go / Python / Swift 全栈工程师",
  contact: {
    email: "705110706@qq.com",
    github: "liogogogo",
    location: "四川成都",
  },
  about:
    "6 年软件研发经验，专注 Go/Python/Swift 全栈开发与大模型应用落地。在中兴通讯主导 5G 平台微服务重构（Java → Go），实现内存占用降低 50%。独立交付体育赛事 AI 分析平台（端侧 CoreML 推理 + Go 微服务 74 个 API）及 LangGraph 驱动的智能简历生成系统。四川大学计算机技术硕士。",
  experience: [
    {
      company: "中兴通讯股份有限公司",
      title: "系统平台开发工程师",
      startDate: "2021.06",
      endDate: "2024.02",
      description: [
        "主导 5G 系统应用管理平台微服务改造，完成 Java → Go 技术栈整体迁移并稳定上线",
        "优化安全管理平台内存占用从 90% 降至 40%，显著提升服务稳定性与资源利用率",
        "搭建应用管理平台单元测试体系，达成 90% 覆盖率，有效保障核心业务可靠性",
        "对接客户诉求驱动需求分析与技术方案设计，推动多轮迭代交付，完成用户安全管理和多租户资源鉴权的需求开发工作",
      ],
    },
    {
      company: "成都蓉奥科技有限公司",
      title: "三维军事仿真研发工程师",
      startDate: "2020.01",
      endDate: "2020.12",
      description: [
        "参与三维军事仿真项目研发，驻场提供技术支持并推动项目里程碑按期交付",
        "针对现场技术问题输出解决方案文档，协调多方资源推进落地",
        "负责项目网络架构维护与性能调优，保障系统稳定运行；完成球面视景校准",
      ],
    },
  ],
  projects: [
    {
      name: "体育赛事 AI 智能分析平台（网球）",
      role: "技术架构负责人 · iOS + Go 全栈",
      startDate: "2024.12",
      endDate: "2026.01",
      link: "https://github.com/liogogogo/tennis-ai-showcase",
      techStack: [
        "Swift",
        "CoreML",
        "SwiftUI",
        "Go",
        "Kratos",
        "gRPC",
        "Protobuf",
        "MySQL",
        "Redis",
      ],
      description: [
        "负责端侧 AI 分析能力接入与性能优化，保障实时体验",
        "主导后端微服务架构与接口规范设计，支撑多端协同开发",
        "落地比赛数据分析与报告生成链路，提升结果可读性",
        "实现实时通信与内容安全流程，完善平台基础能力",
        "推动工程化治理和质量管理，提升交付效率与系统稳定性",
      ],
    },
    {
      name: "智能简历生成与优化系统",
      role: "独立开发",
      startDate: "2026.01",
      endDate: "至今",
      link: "https://github.com/liogogogo/ai-resume-showcase",
      techStack: [
        "Python",
        "LangChain",
        "LangGraph",
        "Pydantic",
        "Gradio",
        "Rich",
      ],
      description: [
        "基于 LangChain / LangGraph 构建多阶段 AI 管线（提取 → 评分 → 润色 → 岗位对齐），支持迭代优化",
        "设计零编造诚信审计引擎，程序化比对原文与 AI 输出，确保所有数据可追溯",
        "实现 11 维度评分体系（含行业基准百分位）、诊断雷达图、求职信生成、面试题库等全链路功能",
        "构建 Gradio Web 应用，支持对话式简历生成、JD 差距分析等交互功能",
      ],
    },
  ],
  skills: [
    {
      category: "编程语言",
      items: ["Go", "Python", "Java", "Swift"],
    },
    {
      category: "框架与工具",
      items: [
        "Kratos",
        "LangChain",
        "LangGraph",
        "FastAPI",
        "gRPC",
        "Docker",
      ],
    },
    {
      category: "数据存储",
      items: ["MySQL", "Redis", "Kafka"],
    },
    {
      category: "AI / ML",
      items: [
        "大模型应用开发",
        "Agent 编排",
        "RAG",
        "向量数据库",
        "CoreML",
        "OpenClaw",
      ],
    },
    {
      category: "DevOps",
      items: ["CI/CD", "Docker", "Grafana"],
    },
  ],
  education: [
    {
      school: "四川大学",
      degree: "硕士",
      major: "计算机技术",
      startDate: "2018.09",
      endDate: "2021.06",
      highlights: [
        '中国（小谷围）"互联网+交通运输"创新创业比赛优胜奖',
      ],
    },
    {
      school: "四川师范大学",
      degree: "学士",
      major: "计算机科学与技术",
      startDate: "2013.09",
      endDate: "2017.06",
    },
  ],
};
