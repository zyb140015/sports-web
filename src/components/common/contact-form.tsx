"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { buttonVariants } from "@/components/ui/button-variants";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";
import {
  contactFormSchema,
  trainingGoalOptions,
  type ContactFormValues,
} from "@/lib/validations/contact";

const fieldClassName =
  "flex h-12 w-full rounded-full border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-primary/40 focus:ring-4 focus:ring-primary/10";

type ContactApiSuccess = {
  message: string;
};

type ContactApiError = {
  message: string;
  errors?: Partial<Record<keyof ContactFormValues, string[]>>;
};

export function ContactForm() {
  const [submitMessage, setSubmitMessage] = useState("通常会在 1 个工作日内联系。");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      goal: "",
      message: "",
    },
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setSubmitMessage("提交中，请稍候...");

    const response = await fetch(withBasePath("/api/contact"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = (await response.json()) as ContactApiSuccess | ContactApiError;

    if (!response.ok) {
      const fieldErrors = "errors" in data ? data.errors : undefined;

      if (fieldErrors) {
        for (const [fieldName, messages] of Object.entries(fieldErrors)) {
          const firstMessage = messages?.[0];

          if (firstMessage) {
            form.setError(fieldName as keyof ContactFormValues, {
              type: "server",
              message: firstMessage,
            });
          }
        }
      }

      setSubmitMessage(data.message || "提交失败，请稍后重试。");
      return;
    }

    setSubmitMessage(data.message);
    form.reset();
  };

  return (
    <div className="glass-card shadow-2xl p-10 rounded-[2.5rem] relative overflow-hidden group">
      <div className="absolute -top-24 -right-24 size-48 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
      
      <div className="relative mb-10">
        <span className="text-[10px] font-black tracking-widest text-primary uppercase border-b-2 border-primary/30 pb-1">Start Your Journey</span>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">预约咨询</h3>
        <p className="mt-2 text-sm text-white/40 italic">专业的训练建议，从此刻开始。</p>
      </div>

      <form className="relative space-y-6" onSubmit={form.handleSubmit(handleSubmit)} noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="姓名" error={form.formState.errors.name?.message}>
            <input
              {...form.register("name")}
              className={cn(fieldClassName, "bg-white/5 border-white/5 focus:bg-white/10")}
              placeholder="如何称呼你？"
              autoComplete="name"
            />
          </Field>

          <Field label="联系方式" error={form.formState.errors.phone?.message}>
            <input
              {...form.register("phone")}
              className={cn(fieldClassName, "bg-white/5 border-white/5 focus:bg-white/10")}
              placeholder="手机号 / 微信"
              autoComplete="tel"
            />
          </Field>
        </div>

        <Field label="你想达到的目标" error={form.formState.errors.goal?.message}>
          <select {...form.register("goal")} className={cn(fieldClassName, "bg-white/5 border-white/5 focus:bg-white/10")}>
            <option value="" className="bg-background">请选择主要目标</option>
            {trainingGoalOptions.map((option) => (
              <option key={option} value={option} className="bg-background">
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="更多想法 (可选)" error={form.formState.errors.message?.message}>
          <textarea
            {...form.register("message")}
            className="min-h-32 w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-primary/40 focus:bg-white/10 focus:ring-4 focus:ring-primary/10"
            placeholder="例如：你目前的运动频率，或者想特别改善的地方..."
          />
        </Field>

        <div className="flex flex-col gap-4 pt-4">
          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={cn(buttonVariants({ size: "lg" }), "w-full shadow-lg shadow-primary/20 font-black tracking-widest")}
          >
            {form.formState.isSubmitting ? "正在提交..." : "发送预约请求"}
          </button>

          <p className={cn(
            "text-xs text-center font-medium",
            form.formState.isSubmitSuccessful ? "text-primary" : "text-white/30"
          )}>
            {submitMessage}
          </p>
        </div>
      </form>
    </div>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block space-y-2">
      <span className="text-[11px] font-bold tracking-wider text-white/40 uppercase ml-1">{label}</span>
      {children}
      {error ? <span className="text-xs font-semibold text-destructive/80 ml-1">{error}</span> : null}
    </label>
  );
}
