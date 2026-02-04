import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactConfig } from "@/config/contact";

// Email template for the contact form submission
function generateEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}) {
  const subjectLabels: Record<string, string> = {
    quote: "Request a Quote",
    services: "Services Inquiry",
    products: "Products Inquiry",
    training: "Training Programs",
    support: "Technical Support",
    careers: "Career Opportunities",
    other: "Other",
  };

  const subjectLabel = subjectLabels[data.subject] || data.subject;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0f; color: #e5e5e5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0f;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #12121a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(123, 22, 151, 0.2);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7b1697 0%, #f97316 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 2px;">
                ZIMTECH ENGINEERING
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
                New Contact Form Submission
              </p>
            </td>
          </tr>

          <!-- Subject Badge -->
          <tr>
            <td style="padding: 32px 40px 0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="background: linear-gradient(135deg, rgba(123, 22, 151, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%); border: 1px solid rgba(123, 22, 151, 0.3); border-radius: 12px; padding: 16px 24px; text-align: center;">
                    <p style="margin: 0; color: #a855f7; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                      Inquiry Type
                    </p>
                    <p style="margin: 8px 0 0; color: #ffffff; font-size: 18px; font-weight: 600;">
                      ${subjectLabel}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding: 32px 40px;">
              <h2 style="margin: 0 0 24px; color: #ffffff; font-size: 18px; font-weight: 600; border-bottom: 1px solid rgba(123, 22, 151, 0.3); padding-bottom: 12px;">
                Contact Information
              </h2>
              
              <!-- Name -->
              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 120px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">
                    Name:
                  </td>
                  <td style="color: #ffffff; font-size: 14px; padding: 8px 0; font-weight: 500;">
                    ${data.name}
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 120px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">
                    Email:
                  </td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${data.email}" style="color: #a855f7; font-size: 14px; text-decoration: none; font-weight: 500;">
                      ${data.email}
                    </a>
                  </td>
                </tr>
              </table>

              ${data.phone ? `
              <!-- Phone -->
              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 120px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">
                    Phone:
                  </td>
                  <td style="padding: 8px 0;">
                    <a href="tel:${data.phone.replace(/[\s()-]/g, "")}" style="color: #a855f7; font-size: 14px; text-decoration: none; font-weight: 500;">
                      ${data.phone}
                    </a>
                  </td>
                </tr>
              </table>
              ` : ""}

              ${data.company ? `
              <!-- Company -->
              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 120px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">
                    Company:
                  </td>
                  <td style="color: #ffffff; font-size: 14px; padding: 8px 0; font-weight: 500;">
                    ${data.company}
                  </td>
                </tr>
              </table>
              ` : ""}
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <h2 style="margin: 0 0 16px; color: #ffffff; font-size: 18px; font-weight: 600; border-bottom: 1px solid rgba(123, 22, 151, 0.3); padding-bottom: 12px;">
                Message
              </h2>
              <div style="background-color: #1a1a24; border-radius: 12px; padding: 20px; border: 1px solid rgba(123, 22, 151, 0.15);">
                <p style="margin: 0; color: #e5e5e5; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
${data.message}
                </p>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center; padding: 8px;">
                    <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(subjectLabel)} - ${contactConfig.companyName}" style="display: inline-block; background: linear-gradient(135deg, #7b1697 0%, #9333ea 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">
                      Reply to ${data.name.split(" ")[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0d0d12; padding: 24px 40px; border-top: 1px solid rgba(123, 22, 151, 0.2);">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 8px; color: #71717a; font-size: 12px;">
                      This email was sent from the contact form on
                    </p>
                    <p style="margin: 0; color: #a855f7; font-size: 14px; font-weight: 600;">
                      ${contactConfig.companyName}
                    </p>
                    <p style="margin: 12px 0 0; color: #52525b; font-size: 11px;">
                      ${new Date().toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZoneName: "short",
                      })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Auto-reply template for the sender
function generateAutoReplyTemplate(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0f; color: #e5e5e5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0f;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #12121a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(123, 22, 151, 0.2);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7b1697 0%, #f97316 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 2px;">
                ZIMTECH ENGINEERING
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
                Engineering Excellence
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 24px; color: #ffffff; font-size: 22px; font-weight: 600;">
                Thank You, ${name.split(" ")[0]}!
              </h2>
              
              <p style="margin: 0 0 20px; color: #a1a1aa; font-size: 15px; line-height: 1.7;">
                We've received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you as soon as possible.
              </p>

              <p style="margin: 0 0 20px; color: #a1a1aa; font-size: 15px; line-height: 1.7;">
                Typically, we respond within <strong style="color: #ffffff;">24-48 business hours</strong>. If your matter is urgent, please don't hesitate to call us directly.
              </p>

              <!-- Contact Box -->
              <table role="presentation" style="width: 100%; background: linear-gradient(135deg, rgba(123, 22, 151, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%); border: 1px solid rgba(123, 22, 151, 0.2); border-radius: 12px; margin: 24px 0;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 12px; color: #a855f7; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                      Need Immediate Assistance?
                    </p>
                    <p style="margin: 0 0 8px; color: #ffffff; font-size: 14px;">
                      📞 ${contactConfig.phone.primary}
                    </p>
                    <p style="margin: 0; color: #ffffff; font-size: 14px;">
                      ✉️ ${contactConfig.email.info}
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #ffffff;">The Zimtech Engineering Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0d0d12; padding: 24px 40px; border-top: 1px solid rgba(123, 22, 151, 0.2);">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 12px; color: #71717a; font-size: 12px;">
                      ${contactConfig.address.full}
                    </p>
                    <p style="margin: 0; color: #52525b; font-size: 11px;">
                      © ${new Date().getFullYear()} ${contactConfig.companyName}. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    // For production, use your SMTP settings or email service provider
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subjectLabels: Record<string, string> = {
      quote: "Request a Quote",
      services: "Services Inquiry",
      products: "Products Inquiry",
      training: "Training Programs",
      support: "Technical Support",
      careers: "Career Opportunities",
      other: "Other",
    };

    const emailSubject = `[${subjectLabels[subject] || subject}] New inquiry from ${name}`;

    // Send notification email to the company
    await transporter.sendMail({
      from: `"${contactConfig.companyName}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: contactConfig.email.info,
      replyTo: email,
      subject: emailSubject,
      html: generateEmailTemplate({
        name,
        email,
        phone,
        company,
        subject,
        message,
      }),
    });

    // Send auto-reply to the sender
    await transporter.sendMail({
      from: `"${contactConfig.companyName}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting ${contactConfig.companyName}`,
      html: generateAutoReplyTemplate(name),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
