import { ContactEmailTemplate } from "@/templates/contactEmail";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const PHONE_REGEX = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: ContactPayload = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return new Response("Dados inválidos", { status: 400 });
    }

    // telefone é opcional no form, mas se vier, precisa estar no formato certo
    if (phone && !PHONE_REGEX.test(phone)) {
      return new Response("Telefone inválido", { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Zoom <onboarding@resend.dev>",
      to: process.env.EMAIL_TO!,
      subject: `Nova solicitação de contato - ${name}${subject ? ` (${subject})` : ""}`,
      react: ContactEmailTemplate({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("ERRO API:", error);
    return new Response("Erro interno", { status: 500 });
  }
}
