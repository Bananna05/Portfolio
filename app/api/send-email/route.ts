import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectTitle, description, timeline, requirements, comments } = body;

    // Email to you (the developer)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: 'asjinigo@gmail.com',
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email/Phone:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Project Title:</strong> ${projectTitle}</p>
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, '<br>')}</p>
        <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
        <p><strong>Technical Requirements:</strong> ${requirements || 'N/A'}</p>
        <p><strong>Additional Comments:</strong> ${comments || 'N/A'}</p>
      `,
    };

    // Confirmation email to the client
    const mailToClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Project Inquiry Received',
      html: `
        <h2>Thank you for your inquiry, ${name}!</h2>
        <p>We have received your project inquiry and will get back to you soon.</p>
        <p><strong>Project Details:</strong></p>
        <p><strong>Project Title:</strong> ${projectTitle}</p>
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Anna Sofia J. Iñigo</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToClient);

    return NextResponse.json(
      { message: 'Inquiry sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    );
  }
}
