import { withBasePath } from "@/lib/base-path";

export const siteConfig = {
  name: "Pulse Studio",
  title: "Pulse Studio | 高端运动训练品牌",
  description:
    "现代化运动训练品牌官网，聚焦私教课程、团课体验与训练成果展示。",
  ctaLabel: "预约免费体验",
  phone: "15708422834",
  heroImage: withBasePath("/images/hero-training.jpg"),
} as const;

export const navItems = [
  { label: "课程", href: "#programs" },
  { label: "教练", href: "#coaches" },
  { label: "成果", href: "#results" },
  { label: "价格", href: "#pricing" },
  { label: "咨询", href: "#contact" },
] as const;

export const stats = [
  { value: "8 年+", label: "高端训练服务经验" },
  { value: "1,200+", label: "累计学员转化案例" },
  { value: "96%", label: "课程续费满意度" },
] as const;

export const trainingPillars = [
  {
    title: "目标拆解",
    description: "先明确减脂、增肌、体态或体能目标，再安排合适节奏。",
  },
  {
    title: "过程监督",
    description: "通过教练反馈、动作纠正和节奏管理，让训练稳定推进。",
  },
  {
    title: "结果复盘",
    description: "定期检查体能与身体状态变化，让训练成果持续可见。",
  },
] as const;

export const weeklySchedule = [
  { day: "MON", focus: "力量基础", detail: "下肢力量与核心稳定" },
  { day: "WED", focus: "燃脂节奏", detail: "心肺循环与代谢提升" },
  { day: "SAT", focus: "体态修正", detail: "拉伸激活与动作修正" },
] as const;

export const programs = [
  {
    title: "力量进阶",
    description: "围绕动作模式、力量增长与体态稳定，建立长期可持续的训练基础。",
    image: withBasePath("/images/program-strength.jpg"),
  },
  {
    title: "燃脂塑形",
    description: "结合心肺训练和饮食建议，帮助用户高效减脂并提升线条感。",
    image: withBasePath("/images/program-fat-loss.jpg"),
  },
  {
    title: "私教定制",
    description: "根据目标、体能和时间安排，提供一对一训练与阶段性复盘。",
    image: withBasePath("/images/program-private.jpg"),
  },
] as const;

export const coaches = [
  {
    name: "Lina",
    specialty: "瑜伽与体态控制",
    description: "专注柔韧性、呼吸控制与压力释放，适合久坐与恢复人群。",
    image: withBasePath("/images/coach-lina.jpg"),
  },
  {
    name: "Jason",
    specialty: "力量与增肌",
    description: "擅长复合动作训练编排，帮助学员建立稳定的力量提升路径。",
    image: withBasePath("/images/coach-jason.jpg"),
  },
  {
    name: "Mika",
    specialty: "燃脂与体能",
    description: "以高效团课和节奏管理见长，帮助用户更快建立训练习惯。",
    image: withBasePath("/images/coach-mika.jpg"),
  },
] as const;

export const testimonials = [
  {
    name: "张女士",
    content: "12 周体脂下降 7%，整个人的精力和睡眠状态都明显变好了。",
  },
  {
    name: "陈先生",
    content: "训练计划很专业，动作纠正很到位，力量和体态都提升很明显。",
  },
] as const;

export const pricingPlans = [
  {
    name: "体验计划",
    price: "¥299",
    features: ["1 次体测评估", "1 次私教体验课", "训练目标建议"],
  },
  {
    name: "进阶月卡",
    price: "¥899",
    features: ["不限次团课", "每周计划跟踪", "饮食建议支持"],
  },
  {
    name: "私教成长计划",
    price: "¥3,999",
    features: ["12 节一对一私教", "阶段复盘报告", "专属教练答疑"],
  },
] as const;

export const faqs = [
  {
    question: "没有训练基础可以报名吗？",
    answer: "可以。我们会先做基础评估，再安排匹配当前体能水平的训练计划。",
  },
  {
    question: "课程适合减脂还是增肌？",
    answer: "两者都可以，教练会根据你的目标提供训练和饮食方向建议。",
  },
  {
    question: "是否支持先体验再决定？",
    answer: "支持。首次可预约体验课，了解环境、课程和教练风格后再选择方案。",
  },
] as const;
