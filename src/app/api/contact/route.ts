import { NextResponse } from "next/server";

import { saveContactSubmission } from "@/lib/db/contact-submissions";
import { contactFormSchema } from "@/lib/validations/contact";

const SUCCESS_MESSAGE = "已收到预约咨询信息，我们会尽快联系你。";
const SERVER_ERROR_MESSAGE = "提交失败，请稍后重试。";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsedPayload = contactFormSchema.safeParse(payload);

    if (!parsedPayload.success) {
      return NextResponse.json(
        {
          message: "提交信息有误，请检查后重试。",
          errors: parsedPayload.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const savedSubmission = saveContactSubmission(parsedPayload.data);

    console.info("contact-request-received", savedSubmission);

    return NextResponse.json({ message: SUCCESS_MESSAGE }, { status: 200 });
  } catch {
    return NextResponse.json({ message: SERVER_ERROR_MESSAGE }, { status: 500 });
  }
}
