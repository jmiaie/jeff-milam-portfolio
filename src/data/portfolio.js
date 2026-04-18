import { Brain, Award, Zap, TrendingUp, Users, Workflow, Building2, BarChart3, GraduationCap, Github, Linkedin, Mail } from "lucide-react";

export const EXPERIENCE = [
  {
    title: "Managing Partner & Founder",
    org: "Micap",
    period: "Dec 2019 – Present",
    tags: ["Founder", "AI Engineer", "TPM"],
    bullets: [
      "Built and shipped production AI tools including AegisFlow, Niagra, UnifiedRetrieval, and Sandfish",
      "Developed OMPA — a universal agentic memory layer and production multi-agent AI orchestration system",
      "Leading capital markets and AI-driven consulting firm serving SBA clients and delivering business automation",
      "Managing live production deployments with human-in-the-loop oversight across multiple agentic systems",
    ],
  },
  {
    title: "Senior Construction Services Program Manager",
    org: "Equity Residential (EQR)",
    period: "Sept 2015 – Nov 2019",
    tags: ["TPM", "Program Manager"],
    bullets: [
      "Lead complex project delivery initiatives for a S&P 500 REIT across technical, corporate, and customer-facing teams",
      "Managed capital programs for a portfolio of 3,600+ residential units and 30 commercial assets in SF",
      "Coordinated programming, procurement, planning, and execution ensuring technical excellence and business impact",
      "Recognized for operational excellence, vendor management, and leadership as Owner's Authorized Representative",
    ],
  },
  {
    title: "Project Manager & Superintendent",
    org: "Bolco Construction",
    period: "May 2014 – Aug 2015",
    tags: ["Project Manager", "Superintendent"],
    bullets: [
      "Directed planning and execution of concurrent multifamily, commercial, and mixed-use developments",
      "Managed teams of up to 30 people, including 8 direct reports, fostering high performance and safety",
      "Consistently delivered projects on time and within budget while building strong client relationships",
      "Oversaw all project phases from strategic alignment through to final closeout and value creation",
    ],
  },
];

export const EDUCATION = [
  { 
    degree: "M.S. AI Engineering", 
    school: "Quantic School of Business & Technology", 
    gpa: "2027 Candidate", 
    icon: Brain 
  },
  { 
    degree: "MBA (4.0 GPA)", 
    school: "Quantic School of Business & Technology", 
    gpa: "With 6 Specializations", 
    icon: Award,
    details: [
      "Advanced Finance",
      "Blockchain",
      "Business Communication",
      "Entrepreneurial Finance",
      "Entrepreneurship",
      "Managing Software Development"
    ]
  },
  { 
    degree: "AI for Business Certificate", 
    school: "Quantic School of Business & Technology", 
    gpa: "Professional Certificate", 
    icon: GraduationCap 
  },
  { 
    degree: "B.S. Construction Management", 
    school: "Arizona State University", 
    gpa: "ASU Graduate", 
    icon: Building2 
  },
];

export const PROJECTS = [
  {
    title: "Automated Real Estate Scanner",
    desc: "Python-based pipeline that scrapes MLS listings, applies custom scoring algorithms (cap rate, cash-on-cash, neighborhood growth vectors), and delivers ranked opportunities via automated reports.",
    icon: Building2,
    tags: ["Python", "BeautifulSoup", "Pandas", "PostgreSQL"]
  },
  {
    title: "Quantitative Trading Research",
    desc: "Backtesting framework for momentum and mean-reversion strategies on equity and options markets. Integrates real-time data feeds with risk-adjusted portfolio optimization using Monte Carlo simulation.",
    icon: BarChart3,
    tags: ["NumPy", "SciPy", "Alpaca API", "Plotly"]
  }
];

export const SANDFISH_METRICS = [
  { label: "Uptime & Reliability", value: "24/7", icon: Zap },
  { label: "Memory Retention", value: "Infinite", icon: TrendingUp },
  { label: "Response Latency", value: "<800ms", icon: Users },
  { label: "Orchestration Modes", value: "OMPA", icon: Workflow },
];

export const SANDFISH_CODE = `from sandfish import Swarm, Agent, Pipeline

# Define specialized agents
researcher = Agent(
    role="researcher",
    model="claude-sonnet-4-20250514",
    tools=[web_search, arxiv_fetch],
    ztb_mode=True  # Zero Token Burn
)

analyst = Agent(
    role="analyst", 
    model="claude-sonnet-4-20250514",
    tools=[data_transform, visualize],
)

# Orchestrate the swarm
swarm = Swarm(
    agents=[researcher, analyst],
    strategy="pipeline",  # or 'parallel', 'consensus', 'hierarchical'
    max_rounds=5,
)

result = await swarm.execute(
    task="Analyze Q4 market trends in AI infrastructure",
    context={"sector": "enterprise", "depth": "deep"}
)`;

export const ARTICLES = [
  {
    title: "Zero Token Burn: The Economics of Intelligent Inference",
    excerpt: "Why 90% of LLM tokens are wasted — and how agentic architectures can eliminate redundant computation through context-aware routing and cached reasoning chains.",
    date: "March 2026",
    tag: "ZTB",
  },
  {
    title: "The Swarm Thesis: Why Multi-Agent > Monolithic",
    excerpt: "Single-model prompting is hitting a ceiling. Specialized agent swarms with shared memory and dynamic delegation unlock emergent problem-solving capabilities that monolithic approaches cannot match.",
    date: "January 2026",
    tag: "Agents",
  },
  {
    title: "From Boardroom to Backend: The TPM-Engineer Hybrid",
    excerpt: "The most dangerous person in the room understands both the P&L and the pull request. On bridging the gap between technical execution and strategic leadership.",
    date: "November 2025",
    tag: "Leadership",
  },
];

export const CONTACT_LINKS = [
  { icon: Mail, label: "Email", href: "mailto:jmilam.cm@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/jmilamba" },
  { icon: Github, label: "GitHub", href: "https://github.com/jmiaie" },
];
