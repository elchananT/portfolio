import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type BodyParams = {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const body: BodyParams = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_USER,
            subject: `New contact from ${name}`,
            text: message,
        });

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'We received your message',
            text: `Hello ${name},\n\nWe received your message:\n"${message}"\n\nWe will get back to you shortly.`,
        });

        return NextResponse.json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}