// Every UI string in both languages. `Dict` makes a missing VI or EN key a type error.
// Copy is grounded in the approved CV facts — don't add claims, numbers or links here.

export const LANGS = ["vi", "en"] as const;
export type Lang = (typeof LANGS)[number];

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export type StackCategory = "frontend" | "backend" | "data" | "realtimeAi" | "infra";
export type JobId = "protean" | "tiah";
export type ProjectId = "booking" | "globalb" | "seikastudo" | "reactApps";

export interface ProjectCopy {
  title: string;
  context: string;
  summary: string;
  highlights: string[];
}

export interface Dict {
  name: string;
  meta: { title: string; description: string };
  skipToContent: string;
  nav: {
    label: string;
    home: string;
    about: string;
    stack: string;
    work: string;
    cv: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    name: string;
    lead: string;
    viewWork: string;
    downloadCv: string;
    now: string;
    featured: string;
    portraitAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: { title: string; body: string }[];
  };
  stack: { eyebrow: string; title: string; categories: Record<StackCategory, string> };
  experience: {
    eyebrow: string;
    title: string;
    present: string;
    jobs: Record<JobId, string>;
    educationLabel: string;
    school: string;
    major: string;
  };
  work: {
    eyebrow: string;
    title: string;
    featured: string;
    helpflow: {
      tagline: string;
      problemLabel: string;
      problem: string;
      solutionLabel: string;
      solution: string;
      roleLabel: string;
      /** null hides the row in production. */
      role: string | null;
      stackLabel: string;
      repo: string;
      demo: string;
    };
    moreTitle: string;
    projects: Record<ProjectId, ProjectCopy>;
  };
  cv: {
    eyebrow: string;
    title: string;
    body: string;
    view: string;
    download: string;
    otherLabel: string;
    previewAlt: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailCta: string;
    copy: string;
    copied: string;
    assistantHint: string;
  };
  footer: { backToTop: string };
}

const vi: Dict = {
  name: "Nguyễn Vi Phượng",
  meta: {
    title: "Nguyễn Vi Phượng · Full-stack Developer",
    description:
      "Nguyễn Vi Phượng, Full-stack Developer (TypeScript, React, Next.js, Node.js, PostgreSQL). Kinh nghiệm, dự án HelpFlow AI và liên hệ.",
  },
  skipToContent: "Bỏ qua đến nội dung",
  nav: {
    label: "Điều hướng chính",
    home: "Trang chủ",
    about: "Giới thiệu",
    stack: "Công nghệ",
    work: "Dự án",
    cv: "CV",
    contact: "Liên hệ",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    language: "Chuyển ngôn ngữ",
  },
  hero: {
    eyebrow: "Nguyễn Vi Phượng · Portfolio",
    greeting: "Xin chào, mình là",
    name: "Vy Phượng.",
    lead: "Full-stack Developer xây dựng sản phẩm web thực tế — từ giao diện, API đến những luồng nghiệp vụ phức tạp.",
    viewWork: "Xem dự án",
    downloadCv: "Tải CV",
    now: "Hiện tại",
    featured: "Dự án nổi bật",
    portraitAlt: "Ảnh chân dung Nguyễn Vi Phượng",
  },
  about: {
    eyebrow: "Giới thiệu",
    title: "Từ giao diện đến luồng nghiệp vụ",
    body: "Mình là Full-stack Developer với 2 năm làm web production, chủ yếu với TypeScript, React, Next.js, Node.js và PostgreSQL. Hiện mình xây dựng tính năng đặt chỗ và thương mại điện tử tại Protean Studios; trước đó làm frontend cho dự án khách hàng Nhật tại Tiah Vietnam. Mình học Kỹ thuật phần mềm tại Đại học Công nghiệp Hà Nội (HaUI).",
    highlights: [
      { title: "Luồng đặt chỗ", body: "Storefront, partner dashboard và back-office theo quy tắc nghiệp vụ đặt chỗ." },
      { title: "Tích hợp & độ tin cậy", body: "GraphQL, tích hợp Reszaiko, JWT, webhook idempotent với Redis." },
      { title: "Sản phẩm AI", body: "RAG có trích dẫn và chuyển tiếp realtime trong HelpFlow AI." },
    ],
  },
  stack: {
    eyebrow: "Công nghệ",
    title: "Công cụ mình làm việc cùng",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Dữ liệu",
      realtimeAi: "Realtime & AI",
      infra: "Hạ tầng & tích hợp",
    },
  },
  experience: {
    eyebrow: "Kinh nghiệm",
    title: "Nơi mình đã làm việc",
    present: "nay",
    jobs: {
      protean:
        "Phát triển tính năng end-to-end cho nền tảng đặt chỗ nhà hàng và thương mại điện tử, trên storefront, partner dashboard và back-office. GraphQL, tích hợp Reszaiko, JWT, webhook idempotent với Redis, quy tắc nghiệp vụ đặt chỗ.",
      tiah: "Frontend cho dự án của khách hàng Nhật Bản; làm việc với LINE WORKS và Kintone; React và Vue.",
    },
    educationLabel: "Học vấn",
    school: "Đại học Công nghiệp Hà Nội (HaUI)",
    major: "Kỹ thuật phần mềm",
  },
  work: {
    eyebrow: "Dự án",
    title: "Dự án tiêu biểu",
    featured: "Dự án nổi bật",
    helpflow: {
      tagline: "SaaS chatbot chăm sóc khách hàng",
      problemLabel: "Vấn đề",
      problem: "Doanh nghiệp cần trả lời khách hàng từ chính tài liệu của mình, và chuyển cho người thật khi AI không đủ.",
      solutionLabel: "Giải pháp",
      solution:
        "Nạp tài liệu và trả lời bằng RAG có trích dẫn nguồn, chuyển hội thoại realtime cho nhân viên, đa tenant với phân quyền RBAC/JWT.",
      roleLabel: "Vai trò",
      role: "Dự án cá nhân. Xây dựng RAG pipeline (nạp tài liệu, embedding, vector search, trả lời streaming kèm trích dẫn), chat realtime và chuyển hội thoại từ AI sang người thật (xử lý race condition, reconnect), kiến trúc SaaS multi-tenant với RBAC và JWT.",
      stackLabel: "Công nghệ",
      repo: "Mã nguồn",
      demo: "Demo",
    },
    moreTitle: "Dự án tại công ty",
    projects: {
      booking: {
        title: "Nền tảng đặt chỗ nhà hàng & thương mại điện tử",
        context: "Protean Studios · 05/2025 – nay · Team 15 người",
        summary:
          "Phụ trách tính năng end-to-end trên storefront, partner dashboard và back-office, trong TypeScript monorepo với React/Next.js và Node.js/GraphQL.",
        highlights: [
          "Tích hợp Reszaiko cho luồng đặt bàn: JWT authentication, webhook, Redis idempotency và đồng bộ inventory hai chiều.",
          "API access token và authorization cho partner, kết hợp JWT validation với permission checks tại middleware.",
          "Chuẩn hóa business rules dùng chung frontend và backend cho seasonal pricing, time-range conflicts và booking availability.",
          "Workflow duyệt thay đổi của partner và luồng chỉnh sửa booking (đổi plan, đổi lịch) kèm đồng bộ lại inventory.",
          "Thiết kế lại multi-step checkout và xây dựng hệ thống SEO landing page đa cấp với Next.js dynamic routing.",
        ],
      },
      globalb: {
        title: "DEV GLOBALB – Kintone + LINE WORKS (WOFF)",
        context: "Tiah Vietnam · Khách hàng Nhật Bản · Team 5 người",
        summary: "Ứng dụng web mobile tích hợp LINE WORKS (WOFF) và Kintone.",
        highlights: ["Phát triển frontend cho ứng dụng.", "Hỗ trợ chức năng backend Node.js và triển khai trên AWS."],
      },
      seikastudo: {
        title: "SEIKASTUDO",
        context: "Tiah Vietnam · Khách hàng Nhật Bản · Team 7 người",
        summary: "Ứng dụng web quản lý sản phẩm và tồn kho.",
        highlights: ["Phát triển tính năng mới và cải thiện giao diện của hệ thống hiện có.", "Hỗ trợ cấu hình Nginx và triển khai."],
      },
      reactApps: {
        title: "Ứng dụng web ReactJS",
        context: "Tiah Vietnam · Team 5 người",
        summary: "Bảo trì các ứng dụng React hiện có.",
        highlights: ["Xử lý lỗi, điều chỉnh giao diện, cập nhật logic hiển thị và cải thiện xử lý dữ liệu."],
      },
    },
  },
  cv: {
    eyebrow: "CV",
    title: "Xem CV đầy đủ",
    body: "Kinh nghiệm, dự án và kỹ năng trong một file PDF. Mở ngay trên trình duyệt hoặc tải về.",
    view: "Xem CV",
    download: "Tải PDF",
    otherLabel: "English version",
    previewAlt: "Trang đầu CV của Nguyễn Vi Phượng",
  },
  contact: {
    eyebrow: "Liên hệ",
    title: "Có dự án hoặc vị trí phù hợp?",
    body: "Gửi email cho mình nhé.",
    emailCta: "Gửi email",
    copy: "Sao chép email",
    copied: "Đã sao chép",
    assistantHint: "Hoặc hỏi trợ lý AI ở góc màn hình. Trợ lý chạy trên HelpFlow AI, dự án ở phần trên.",
  },
  footer: { backToTop: "Lên đầu trang" },
};

const en: Dict = {
  name: "Nguyen Vi Phuong",
  meta: {
    title: "Nguyen Vi Phuong · Full-stack Developer",
    description:
      "Nguyen Vi Phuong, full-stack developer (TypeScript, React, Next.js, Node.js, PostgreSQL). Experience, the HelpFlow AI project and contact.",
  },
  skipToContent: "Skip to content",
  nav: {
    label: "Main navigation",
    home: "Home",
    about: "About",
    stack: "Stack",
    work: "Work",
    cv: "CV",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Switch language",
  },
  hero: {
    eyebrow: "Nguyen Vi Phuong · Portfolio",
    greeting: "Hi, I'm",
    name: "Vy Phuong.",
    lead: "A full-stack developer building production web experiences — from thoughtful interfaces and APIs to complex business workflows.",
    viewWork: "View work",
    downloadCv: "Download CV",
    now: "Now",
    featured: "Featured",
    portraitAlt: "Portrait of Nguyen Vi Phuong",
  },
  about: {
    eyebrow: "About",
    title: "From interfaces to business workflows",
    body: "I'm a full-stack developer with 2 years of production web development, working mainly with TypeScript, React, Next.js, Node.js and PostgreSQL. At Protean Studios I build booking and e-commerce features; before that I did frontend work on Japanese client projects at Tiah Vietnam. I studied Software Engineering at Hanoi University of Industry (HaUI).",
    highlights: [
      { title: "Booking workflows", body: "Storefront, partner dashboard and back-office built around booking business rules." },
      { title: "Integrations & reliability", body: "GraphQL, Reszaiko integration, JWT, Redis-backed webhook idempotency." },
      { title: "AI products", body: "Cited RAG answers and realtime hand-off in HelpFlow AI." },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tools I work with",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      realtimeAi: "Realtime & AI",
      infra: "Infra & integrations",
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've worked",
    present: "present",
    jobs: {
      protean:
        "End-to-end features for restaurant booking and e-commerce platforms, across the storefront, partner dashboard and back-office. GraphQL, Reszaiko integration, JWT, Redis-backed webhook idempotency and booking business rules.",
      tiah: "Frontend work on Japanese client projects; LINE WORKS and Kintone; React and Vue.",
    },
    educationLabel: "Education",
    school: "Hanoi University of Industry (HaUI)",
    major: "Software Engineering",
  },
  work: {
    eyebrow: "Work",
    title: "Selected work",
    featured: "Featured project",
    helpflow: {
      tagline: "Customer-support SaaS chatbot",
      problemLabel: "Problem",
      problem: "Businesses need answers grounded in their own documents, and a hand-off to a person when AI isn't enough.",
      solutionLabel: "Solution",
      solution: "RAG over uploaded documents with cited answers, realtime hand-off to agents, multi-tenant with RBAC/JWT.",
      roleLabel: "Role",
      role: "Personal project. Built the RAG pipeline (document ingestion, embeddings, vector search, streamed answers with citations), realtime chat with AI-to-human hand-off (race conditions, reconnects) and a multi-tenant SaaS architecture with RBAC and JWT.",
      stackLabel: "Stack",
      repo: "Source code",
      demo: "Demo",
    },
    moreTitle: "Company projects",
    projects: {
      booking: {
        title: "Restaurant reservation & e-commerce platforms",
        context: "Protean Studios · 05/2025 – present · Team of 15",
        summary:
          "Owning features end-to-end across the customer storefront, partner dashboard and back-office, in a TypeScript monorepo with React/Next.js and Node.js/GraphQL.",
        highlights: [
          "Integrated Reszaiko into the reservation flow with JWT authentication, webhooks, Redis idempotency and two-way inventory sync.",
          "Built partner API access tokens and authorization, combining JWT validation with permission checks in middleware.",
          "Standardized shared business rules for seasonal pricing, time-range conflicts and booking availability across frontend and backend.",
          "Developed a partner change-approval workflow and booking modification flows (plan changes, rescheduling) with inventory re-sync.",
          "Redesigned the multi-step checkout and built a multi-level SEO landing page system with Next.js dynamic routing.",
        ],
      },
      globalb: {
        title: "DEV GLOBALB – Kintone + LINE WORKS (WOFF)",
        context: "Tiah Vietnam · Japanese client · Team of 5",
        summary: "Mobile web app integrated with LINE WORKS (WOFF) and Kintone.",
        highlights: ["Built the app's frontend.", "Supported Node.js backend functions and AWS deployment."],
      },
      seikastudo: {
        title: "SEIKASTUDO",
        context: "Tiah Vietnam · Japanese client · Team of 7",
        summary: "Product and inventory management web app.",
        highlights: ["Developed new features and improved the UI of the existing system.", "Supported Nginx configuration and deployment."],
      },
      reactApps: {
        title: "ReactJS web applications",
        context: "Tiah Vietnam · Team of 5",
        summary: "Maintained existing React apps.",
        highlights: ["Fixed bugs, adjusted UI, updated display logic and improved data handling."],
      },
    },
  },
  cv: {
    eyebrow: "CV",
    title: "Read the full CV",
    body: "Experience, projects and skills in one PDF. Open it in your browser or download it.",
    view: "View CV",
    download: "Download PDF",
    otherLabel: "Bản tiếng Việt",
    previewAlt: "First page of Nguyen Vi Phuong's CV",
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a project or role in mind?",
    body: "Send me an email.",
    emailCta: "Email me",
    copy: "Copy email",
    copied: "Copied",
    assistantHint: "Or ask the assistant in the corner. It runs on HelpFlow AI, the project above.",
  },
  footer: { backToTop: "Back to top" },
};

export const dictionaries: Record<Lang, Dict> = { vi, en };
