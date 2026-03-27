import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Dumbbell, Flame, Sparkles, Trophy, Users } from "lucide-react";

import { ContactForm } from "@/components/common/contact-form";
import { Reveal } from "@/components/common/reveal";
import { PricingCards } from "@/components/common/pricing-cards";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  coaches,
  faqs,
  navItems,
  programs,
  siteConfig,
  stats,
  trainingPillars,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/30">
      <header className="sticky top-0 z-50 glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-2 text-xl font-bold tracking-tighter uppercase">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-transform group-hover:scale-110">
              P
            </div>
            <span className="text-gradient">{siteConfig.name}</span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-white/60 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="relative transition-colors hover:text-white group">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className={cn(buttonVariants({ variant: "default", size: "sm" }), "hidden sm:inline-flex")}>
              {siteConfig.ctaLabel}
            </a>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60rem] overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] size-[80rem] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" />
          <div className="absolute top-[20%] -right-[10%] size-[60rem] rounded-full bg-primary/5 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-32">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal className="flex flex-col justify-center space-y-10">
              <div className="space-y-6">
                <div className="inline-flex animate-float items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase ring-4 ring-primary/5">
                  <div className="size-1.5 animate-pulse rounded-full bg-primary" />
                  Premium Training House
                </div>
                <h1 className="text-gradient text-6xl font-extrabold leading-[1.05] tracking-tight md:text-8xl">
                  更强的身体状态<br />
                  <span className="text-primary-gradient italic">从专业开始</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
                  {siteConfig.name} 专注力量提升与私教定制。通过清晰计划、专业教练与可视化成果，让每一次训练都更有效。
                </p>
              </div>
              
              <div className="flex flex-wrap gap-5">
                <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "min-w-[180px] shadow-2xl shadow-primary/20")}>
                  {siteConfig.ctaLabel}
                  <ArrowRight className="size-5 transition-transform group-hover/button:translate-x-1" />
                </a>
                <a href="#programs" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-w-[180px]")}>
                  查看训练项目
                </a>
              </div>

              <div className="grid grid-cols-3 gap-10 border-t border-white/10 pt-10">
                {stats.map((item, index) => (
                  <Reveal key={item.label} delay={index * 0.1}>
                    <div className="space-y-1">
                      <p className="text-primary-gradient text-4xl font-black tracking-tighter">{item.value}</p>
                      <p className="text-xs font-medium tracking-wide text-white/40 uppercase">{item.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative group">
              <div className="absolute -inset-4 rounded-[3rem] bg-primary/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 glass shadow-2xl">
                 <Image
                    src={siteConfig.heroImage}
                    alt="运动训练"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 right-8 space-y-6">
                    <div className="flex items-center gap-3">
                       <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-primary border border-primary/30 rounded-full glass uppercase">Limited Membership</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[Dumbbell, Users, Trophy].map((Icon, i) => (
                        <div key={i} className="flex flex-col items-center justify-center rounded-2xl p-4 glass hover:bg-white/10 transition-colors">
                          <Icon className="size-6 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5 text-primary" />
                <span className="text-sm font-bold tracking-widest text-primary uppercase">The Pulse Way</span>
              </div>
              <h2 className="text-gradient text-4xl font-bold leading-tight md:text-5xl">
                建立长期可坚持的<br />训练系统
              </h2>
              <p className="text-lg text-white/50">
                不只是上课，而是通过目标拆解、过程监督和结果复盘，让训练真正服务你的身体变化。
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {trainingPillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.1}>
                  <div className="glass-card group flex h-full flex-col p-8 rounded-3xl">
                    <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/5 text-primary ring-1 ring-white/10 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      {index === 0 && <Flame className="size-6" />}
                      {index === 1 && <Sparkles className="size-6" />}
                      {index === 2 && <Trophy className="size-6" />}
                    </div>
                    <h3 className="mb-4 text-xl font-bold">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-white/40">{pillar.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="mb-16">
            <SectionHeading
              eyebrow="Courses & Programs"
              title="围绕目标设计的课程体系"
              description="从力量、燃脂到私教定制，帮助不同阶段的用户找到合适的训练路径。"
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((program, index) => (
              <Reveal key={program.title} delay={index * 0.1}>
                <article className="glass-card group overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-bold">{program.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="mb-6 text-sm leading-relaxed text-white/40">{program.description}</p>
                    <button className="flex items-center gap-2 text-sm font-bold text-primary transition-transform hover:gap-3">
                      了解详情 <ArrowRight className="size-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="coaches" className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="mb-16">
            <SectionHeading
              eyebrow="Elite Coaches"
              title="专业教练团队"
              description="每位教练都有明确专长方向，能够根据体能和目标提供更适合的训练建议。"
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {coaches.map((coach, index) => (
              <Reveal key={coach.name} delay={index * 0.1}>
                <div className="glass-card group p-4 rounded-[2.5rem]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-xs font-bold tracking-widest text-primary uppercase">{coach.specialty}</p>
                      <h3 className="mt-2 text-3xl font-black italic tracking-tighter">{coach.name}</h3>
                    </div>
                  </div>
                  <div className="px-4 py-8">
                    <p className="text-sm leading-relaxed text-white/50">{coach.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="mb-16 text-center">
            <div className="mx-auto max-w-2xl space-y-4">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Membership Plans</span>
              <h2 className="text-gradient text-4xl font-bold md:text-5xl">选择你的训练计划</h2>
            </div>
          </Reveal>
          <PricingCards />
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal className="space-y-10">
              <div className="space-y-6">
                <span className="text-sm font-bold tracking-widest text-primary uppercase">Connect with Us</span>
                <h2 className="text-gradient text-5xl font-extrabold tracking-tight">准备好开启<br />蜕变了吗？</h2>
                <p className="text-lg leading-relaxed text-white/50">
                  我们不只是在教你如何举重，而是在帮你重建生活方式。留下信息，开启第一步。
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { label: "咨询电话", value: siteConfig.phone, icon: Flame },
                  { label: "官方邮箱", value: "zyb140015@163.com", icon: Sparkles },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-3xl p-6 flex items-center gap-6 group hover:border-primary/30 transition-colors">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="size-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase">{item.label}</p>
                      <p className="text-xl font-bold tracking-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold tracking-widest text-white/30 uppercase">
             <a href="#" className="hover:text-primary transition-colors">Privacy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms</a>
             <a href="#" className="hover:text-primary transition-colors">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="space-y-6 text-center md:text-left">
      <div className="inline-flex items-center gap-2">
        <div className="h-px w-8 bg-primary" />
        <span className="text-sm font-bold tracking-widest text-primary uppercase">{eyebrow}</span>
      </div>
      <h2 className="text-gradient text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
      <p className="mx-auto max-w-2xl text-lg text-white/50 md:mx-0">{description}</p>
    </div>
  );
}
