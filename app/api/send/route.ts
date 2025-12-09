import { EmailTemplate } from "@/components/Email-Template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name: string;
      email: string;
      message: string;
    };

    const { data, error } = await resend.emails.send({
      from: "Duck Pixel Website <andrew@duckpixel.com>",
      to: ["andrew.wardjones@icloud.com"],
      subject: "Form Message - Duck Pixel",
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error("Resend failed to send contact email", error);
      const statusCode = (error as { statusCode?: number }).statusCode ?? 500;
      return Response.json(
        {
          error: error.message,
          name: error.name,
          issues: (error as { issues?: unknown })?.issues,
        },
        { status: statusCode }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error while sending contact email", error);
    const message =
      error instanceof Error ? error.message : "Unknown error sending email";
    return Response.json({ error: message }, { status: 500 });
  }
}
