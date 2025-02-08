import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'rssd4286.webaccountserver.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Us Form Submission from ${name}`,
        text: message,
    }
    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
          status: 200,
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Error sending email.' }), {
          status: 500,
        });
      }
}