import { z } from "zod";

const MIN_NAME_LENGTH = 2;
const MIN_PHONE_LENGTH = 6;
const MAX_MESSAGE_LENGTH = 200;

export const trainingGoalOptions = ["减脂塑形", "力量提升", "私教咨询", "体态改善"] as const;

const trainingGoalSet = new Set<string>(trainingGoalOptions);

export const contactFormSchema = z.object({
  name: z.string().trim().min(MIN_NAME_LENGTH, "请输入真实姓名"),
  phone: z.string().trim().min(MIN_PHONE_LENGTH, "请输入有效手机号或联系电话"),
  goal: z
    .string()
    .min(1, "请选择训练目标")
    .refine((value) => trainingGoalSet.has(value), "请选择训练目标"),
  message: z
    .string()
    .trim()
    .max(MAX_MESSAGE_LENGTH, `补充信息请控制在 ${MAX_MESSAGE_LENGTH} 字内`)
    .optional()
    .or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
