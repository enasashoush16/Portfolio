import { Resend } from 'resend';

// Initialize Resend with the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. Accept POST requests only
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // 2. Extract values and trim whitespace
    const { name, email, message } = req.body || {};
    const trimmedName = (name || '').trim();
    const trimmedEmail = (email || '').trim();
    const trimmedMessage = (message || '').trim();

    // 3. Validation
    if (!trimmedName) {
      return res.status(400).json({ error: 'Name is required.' });
    }

    // Basic email validation regex matching the frontend validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return res.status(400).json({ error: 'Enter a valid email address.' });
    }

    if (!trimmedMessage) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    if (trimmedMessage.length < 12) {
      return res.status(400).json({ error: 'Message should be at least 12 characters.' });
    }

    const toEmail = process.env.CONTACT_EMAIL || 'enasashoushc41@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    console.log({
      apiKey: !!process.env.RESEND_API_KEY,
      contact: process.env.CONTACT_EMAIL,
      from: process.env.FROM_EMAIL,
    });

    // Format the email body precisely as requested
    const textBody = `New Portfolio Contact\n\nName:\n${trimmedName}\n\nEmail:\n${trimmedEmail}\n\nMessage:\n\n${trimmedMessage}`;

    // Send email using Resend SDK
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: trimmedName,
      replyTo: trimmedEmail,
      text: textBody,
    });

    if (error) {
      console.error('Resend SDK Error:', error);
      return res.status(500).json({ error: error.message || 'Failed to send email.' });
    }

    return res.status(200).json({ success: true, messageId: data?.id });
  } catch (err) {
    console.error('Contact API Error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
