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
  /** 获奖与荣誉（与教育背景分列展示） */
  honors?: string[];
}

export const resume: Resume = {
  name: "廖承城",
  title: "系统平台研发工程师",
  contact: {
    email: "705110706@qq.com",
    phone: "182****5395",
    github: "liogogogo",
    website: "https://liogogogo.github.io/github_cv/",
    location: "四川成都",
  },
  about:
    "6 年软件研发经验，兼具 Python / Go 全栈平台工程与 AI 工程实践。主导 5G 系统平台微服务重构与多租户鉴权体系建设，独立架构体育赛事 AI 视频分析平台和智能简历优化生成系统，具备模型训练与工程化落地的完整能力。",
  experience: [
    {
      company: "中兴通讯股份有限公司",
      title: "系统平台开发工程师",
      startDate: "2021.06",
      endDate: "2024.02",
      description: [
        "主导应用管理系统平台从 Java 向 Go 的微服务重构并稳定上线，优化服务性能与可维护性",
        "设计并开发多租户资源鉴权与用户权限管理模块（RBAC），提升平台安全性与资源隔离能力",
        "优化安全管理平台微服务内存占用，从 90% 降至 40%，提升服务稳定性",
        "搭建单元与集成测试体系，引入 AI 大模型提升测试编写效率，实现 90% 代码行覆盖率与 100% 业务接口覆盖",
        "负责平台配置管理，基于 JSON / YAML 定义服务配置与部署策略，提升配置可读性与维护效率",
        "参与平台分布式任务调度模块设计与开发，优化任务分发与执行效率",
      ],
    },
    {
      company: "成都蓉奥科技有限公司",
      title: "三维军事仿真研发工程师",
      startDate: "2020.01",
      endDate: "2020.12",
      description: [
        "负责球面及多通道视景校准与显示参数调优，将校准时间缩短约 20%",
        "参与三维军事仿真系统功能开发与现场联调，覆盖视景展示、态势推演等子模块需求实现与缺陷闭环",
        "维护项目网络与部署环境，排查链路延迟、丢包与带宽瓶颈，支撑多席位协同与演示场景稳定运行",
        "搭建和维护脚本化巡检与日志采集流程，缩短重复性环境问题定位时间",
        "编写现场问题复盘与解决方案文档，协调软硬件厂商、甲方与内部研发对齐优先级并按期完成里程碑",
      ],
    },
  ],
  projects: [
    {
      name: "体育赛事 AI 智能分析平台（网球）",
      role: "技术负责人",
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
        "基于顶会论文自研网球动作识别模型，进行模型轻量化与 CoreML / ANE 硬件加速，将单帧推理耗时从 169ms 降至 16ms，F1 达到 0.924",
        "设计并落地 Kratos 分层微服务架构，规划 74 个 RESTful / gRPC API，采用 Proto-First 模式进行跨端契约管理，代码合规率约 99%",
        "负责产品形态定义与技术选型，确定「端侧 AI + 云端服务」技术路线，规划 Go / Kratos 后端、Swift / SwiftUI 客户端与 CoreML 推理引擎的整体架构",
        "搭建 CI/CD 自动化流水线，设计视频存储架构方案",
        "架构 JWT 安全登陆鉴权系统、设备级 Session 隔离与服务端主动刷新策略",
        "搭建 基于gRPC 双向流实现实时通讯系统框架",
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
        "FastAPI",
        "Pydantic",
        "React",
        "Docker",
      ],
      description: [
        "基于 LangChain 与 LangGraph 构建多阶段 Agent 编排管线（提取 → 评分 → 润色 → 岗位对齐），支持可配置工作流与迭代优化",
        "设计零编造诚信审计引擎，对比原文与 AI 输出并生成完整 Audit Log，实现生成内容的可追溯与可审计",
        "实现多维度简历评分体系（含行业基准百分位）、诊断雷达图、求职信生成与面试题库等全链路功能",
        "基于 FastAPI + React 构建 Web 应用，实现智能简历生成、JD 差距分析及 API 速率控制",
      ],
    },
  ],
  skills: [
    {
      category: "专业技能",
      items: [
        "Python",
        "LangChain / LangGraph",
        "Agent 编排",
        "RAG",
        "向量数据库",
        "大模型部署调优",
        "Token 成本优化",
        "CoreML",
        "Go",
        "Java",
        "Swift",
        "FastAPI / Kratos",
        "gRPC / Protobuf",
        "MySQL / Redis / Kafka",
      ],
    },
    {
      category: "DevOps",
      items: ["Docker", "CI/CD", "Grafana"],
    },
  ],
  education: [
    {
      school: "四川大学",
      degree: "硕士",
      major: "计算机技术",
      startDate: "2018.09",
      endDate: "2021.06",
    },
    {
      school: "四川师范大学",
      degree: "本科",
      major: "计算机科学与技术",
      startDate: "2013.09",
      endDate: "2017.06",
    },
  ],
  honors: ['中国（小谷围）"互联网 + 交通运输"创新创业比赛 · 优胜奖'],
};
