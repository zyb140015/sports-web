"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/common/reveal";
import { pricingPlans } from "@/lib/site-content";

export function PricingCards() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {pricingPlans.map((plan, index) => {
        const isActive = activeIndex === index;
        return (
          <Reveal key={plan.name} delay={index * 0.1}>
            <div
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative flex h-full cursor-pointer flex-col p-10 rounded-[2.5rem] transition-all duration-500 border",
                isActive
                  ? "bg-primary text-primary-foreground scale-105 shadow-[0_0_50px_rgba(var(--primary),0.2)] z-10 border-primary"
                  : "glass-card border-white/5 hover:border-white/20"
              )}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[10px] font-black tracking-widest text-black uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                {isActive && <div className="size-2 rounded-full bg-primary-foreground animate-pulse" />}
              </div>

              <div className="my-8 flex items-baseline gap-1">
                <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
              </div>

              <ul className="mb-10 flex-1 space-y-4 text-sm font-medium">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={cn(
                        "size-5 shrink-0",
                        isActive ? "text-primary-foreground" : "text-primary"
                      )}
                    />
                    <span className={isActive ? "opacity-90" : "text-white/60"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  buttonVariants({
                    variant: isActive ? "secondary" : "outline",
                    size: "lg",
                  }),
                  "w-full transition-all",
                  isActive && "bg-white text-black hover:bg-white/90"
                )}
              >
                {isActive ? "选定该方案" : "了解详情"}
              </button>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
