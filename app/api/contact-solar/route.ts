import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactConfig } from "@/config/contact";

/**
 * Solar Contact Form API Route
 * 
 * Environment variables required:
 * - SOLAR_CONTACT_EMAIL: Recipient email for solar inquiries
 * - SOLAR_SMTP_HOST: SMTP server host (falls back to SMTP_HOST)
 * - SOLAR_SMTP_PORT: SMTP server port (falls back to SMTP_PORT)
 * - SOLAR_SMTP_USER: SMTP username (falls back to SMTP_USER)
 * - SOLAR_SMTP_PASS: SMTP password (falls back to SMTP_PASS)
 */

interface SolarContactPayload {
  name: string;
  email: string;
  phone: string;
  address?: string;
  systemSize?: string;
  budget?: string;
  message: string;
  contactMethod?: string;
  source?: string;
  selectedPackageId?: string;
}

// Email template for solar form submission
function generateSolarEmailTemplate(data: SolarContactPayload) {
  const systemSizeLabels: Record<string, string> = {
    "1.5kva": "1.5 kVA - Essential Backup",
    "3.2kva": "3.2 kVA - Home Starter",
    "5kva": "5 kVA - Home Power",
    "10kva": "10 kVA - Power Pro",
    "20kva": "20+ kVA - Commercial",
    "custom": "Custom / Not Sure",
  };

  const budgetLabels: Record<string, string> = {
    "under-2000": "Under $2,000",
    "2000-5000": "$2,000 - $5,000",
    "5000-10000": "$5,000 - $10,000",
    "10000-20000": "$10,000 - $20,000",
    "20000-plus": "$20,000+",
    "discuss": "Prefer to Discuss",
  };

  const systemSizeDisplay = data.systemSize 
    ? systemSizeLabels[data.systemSize] || data.systemSize 
    : "Not specified";
  
  const budgetDisplay = data.budget 
    ? budgetLabels[data.budget] || data.budget 
    : "Not specified";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Solar Installation Inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0f; color: #e5e5e5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0f;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #12121a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(249, 115, 22, 0.2);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #eab308 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 2px;">
                ☀️ SOLAR INQUIRY
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
                ${contactConfig.companyName}
              </p>
            </td>
          </tr>

          <!-- Source Badge -->
          ${data.selectedPackageId ? `
          <tr>
            <td style="padding: 24px 40px 0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(234, 179, 8, 0.1) 100%); border: 1px solid rgba(249, 115, 22, 0.3); border-radius: 12px; padding: 16px 24px; text-align: center;">
                    <p style="margin: 0; color: #f97316; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                      Selected Package
                    </p>
                    <p style="margin: 8px 0 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                      ${data.selectedPackageId}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ""}

          <!-- Contact Details -->
          <tr>
            <td style="padding: 32px 40px;">
              <h2 style="margin: 0 0 24px; color: #ffffff; font-size: 18px; font-weight: 600; border-bottom: 1px solid rgba(249, 115, 22, 0.3); padding-bottom: 12px;">
                Contact Information
              </h2>
              
              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 140px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">Name:</td>
                  <td style="color: #ffffff; font-size: 14px; padding: 8px 0; font-weight: 500;">${data.name}</td>
                </tr>
              </table>

              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 140px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">Email:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${data.email}" style="color: #f97316; font-size: 14px; text-decoration: none; font-weight: 500;">${data.email}</a>
                  </td>
                </tr>
              </table>

              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 140px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">Phone:</td>
                  <td style="padding: 8px 0;">
                    <a href="tel:${data.phone.replace(/[\s()-]/g, "")}" style="color: #f97316; font-size: 14px; text-decoration: none; font-weight: 500;">${data.phone}</a>
                  </td>
                </tr>
              </table>

              ${data.address ? `
              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 140px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">Address:</td>
                  <td style="color: #ffffff; font-size: 14px; padding: 8px 0; font-weight: 500;">${data.address}</td>
                </tr>
              </table>
              ` : ""}

              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 140px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">Preferred Contact:</td>
                  <td style="color: #ffffff; font-size: 14px; padding: 8px 0; font-weight: 500; text-transform: capitalize;">${data.contactMethod || "Email"}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Requirements -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <h2 style="margin: 0 0 24px; color: #ffffff; font-size: 18px; font-weight: 600; border-bottom: 1px solid rgba(249, 115, 22, 0.3); padding-bottom: 12px;">
                Solar Requirements
              </h2>

              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 140px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">System Size:</td>
                  <td style="color: #ffffff; font-size: 14px; padding: 8px 0; font-weight: 500;">${systemSizeDisplay}</td>
                </tr>
              </table>

              <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                <tr>
                  <td style="width: 140px; color: #a1a1aa; font-size: 14px; vertical-align: top; padding: 8px 0;">Budget Range:</td>
                  <td style="color: #ffffff; font-size: 14px; padding: 8px 0; font-weight: 500;">${budgetDisplay}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <h2 style="margin: 0 0 16px; color: #ffffff; font-size: 18px; font-weight: 600; border-bottom: 1px solid rgba(249, 115, 22, 0.3); padding-bottom: 12px;">
                Message
              </h2>
              <div style="background-color: #1a1a24; border-radius: 12px; padding: 20px; border: 1px solid rgba(249, 115, 22, 0.15);">
                <p style="margin: 0; color: #e5e5e5; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center; padding: 8px;">
                    <a href="mailto:${data.email}?subject=Re: Solar Installation Inquiry - ${contactConfig.companyName}" style="display: inline-block; background: linear-gradient(135deg, #f97316 0%, #eab308 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">
                      Reply to ${data.name.split(" ")[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0d0d12; padding: 24px 40px; border-top: 1px solid rgba(249, 115, 22, 0.2);">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 8px; color: #71717a; font-size: 12px;">
                      This inquiry was submitted from the Solar Installation page on
                    </p>
                    <p style="margin: 0; color: #f97316; font-size: 14px; font-weight: 600;">
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
function generateSolarAutoReplyTemplate(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Solar Inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0f; color: #e5e5e5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0f;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #12121a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(249, 115, 22, 0.2);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #eab308 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 2px;">
                ☀️ ${contactConfig.companyName.toUpperCase()}
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
                Solar Installation Services
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 24px; color: #ffffff; font-size: 22px; font-weight: 600;">
                Thank You, ${name.split(" ")[0]}! ☀️
              </h2>
              
              <p style="margin: 0 0 20px; color: #a1a1aa; font-size: 15px; line-height: 1.7;">
                We've received your solar installation inquiry and our team is excited to help you make the switch to clean, reliable solar energy!
              </p>

              <p style="margin: 0 0 20px; color: #a1a1aa; font-size: 15px; line-height: 1.7;">
                One of our solar specialists will review your requirements and contact you within <strong style="color: #ffffff;">24 hours</strong> to discuss:
              </p>

              <ul style="margin: 0 0 20px; padding-left: 24px; color: #a1a1aa; font-size: 14px; line-height: 2;">
                <li>Your energy needs and consumption patterns</li>
                <li>Recommended system size and components</li>
                <li>Site assessment and installation timeline</li>
                <li>Pricing and financing options</li>
              </ul>

              <!-- Contact Box -->
              <table role="presentation" style="width: 100%; background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 179, 8, 0.05) 100%); border: 1px solid rgba(249, 115, 22, 0.2); border-radius: 12px; margin: 24px 0;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 12px; color: #f97316; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                      Questions? Contact Us Directly
                    </p>
                    <p style="margin: 0 0 8px; color: #ffffff; font-size: 14px;">
                      📞 ${contactConfig.phone.primary}
                    </p>
                    <p style="margin: 0; color: #ffffff; font-size: 14px;">
                      ✉️ ${contactConfig.email.sales}
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                Warm regards,<br>
                <strong style="color: #ffffff;">The Solar Team at ${contactConfig.companyName}</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0d0d12; padding: 24px 40px; border-top: 1px solid rgba(249, 115, 22, 0.2);">
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
    const body: SolarContactPayload = await request.json();

    const { name, email, phone, address, systemSize, budget, message, contactMethod, selectedPackageId } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, email, phone, message)" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter - prefer SOLAR_SMTP_* env vars, fall back to SMTP_*
    const transporter = nodemailer.createTransport({
      host: process.env.SOLAR_SMTP_HOST || process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SOLAR_SMTP_PORT || process.env.SMTP_PORT || "587"),
      secure: (process.env.SOLAR_SMTP_PORT || process.env.SMTP_PORT) === "465",
      auth: {
        user: process.env.SOLAR_SMTP_USER || process.env.SMTP_USER,
        pass: process.env.SOLAR_SMTP_PASS || process.env.SMTP_PASS,
      },
    });

    const recipientEmail = process.env.SOLAR_CONTACT_EMAIL || contactConfig.email.sales;
    const fromEmail = process.env.SMTP_FROM || process.env.SOLAR_SMTP_USER || process.env.SMTP_USER;

    // Send notification email to the company
    await transporter.sendMail({
      from: `"${contactConfig.companyName} Solar" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Solar Inquiry] New request from ${name}${selectedPackageId ? ` - ${selectedPackageId}` : ""}`,
      html: generateSolarEmailTemplate({
        name,
        email,
        phone,
        address,
        systemSize,
        budget,
        message,
        contactMethod,
        selectedPackageId,
      }),
    });

    // Send auto-reply to the sender
    await transporter.sendMail({
      from: `"${contactConfig.companyName} Solar" <${fromEmail}>`,
      to: email,
      subject: `Thank you for your solar inquiry - ${contactConfig.companyName}`,
      html: generateSolarAutoReplyTemplate(name),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    // Log error server-side (don't leak details to client)
    console.error("Error sending solar contact email:", error);
    
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
