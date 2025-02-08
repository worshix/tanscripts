import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    pool: true,
    host: 'rssd4286.webaccountserver.com',
    // Typically, SMTP uses port 465 (SSL) or 587 (TLS), not 993 (which is IMAP).
    port: 465, 
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Bypass the certificate check; use with caution.
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Must be your authenticated email
    replyTo: email,               // The user's email, so you can reply to them
    to: process.env.EMAIL_USER,
    subject: `Contact Us Form Submission from ${name}`,
    text: message,
  };

  console.table({ name, email, message, processEmail: process.env.EMAIL_USER });

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email.' }), {
      status: 500,
    });
  }
}
