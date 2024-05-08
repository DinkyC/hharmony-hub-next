import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'info@harmonyhubspot.com',
    pass: `${process.env.PASS}`,
  },
});

export async function POST(req) {
  try {
    // Assuming req.body is already parsed as JSON (Next.js does this by default)
    const {email, name, count, product} = await req.json();
    const mailOptions = {
      from: 'info@harmonyhubspot.com',
      to: 'info@harmonyhubspot.com',
      subject: 'Contact Request from Website',
      text: `You have received a new message from ${name} (${email}): ${count} for ${product}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(`Failed to send email: ${error.message }`);
  }
}
