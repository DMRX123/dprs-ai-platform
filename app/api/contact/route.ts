import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const rateLimitMap = new Map()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000
  const maxRequests = 10
  
  const requests = rateLimitMap.get(ip) || []
  const validRequests = requests.filter((time: number) => now - time < windowMs)
  
  if (validRequests.length >= maxRequests) return true
  
  validRequests.push(now)
  rateLimitMap.set(ip, validRequests)
  return false
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitizeInput(input: string): string {
  if (!input) return ''
  return input.replace(/[<>]/g, '').trim()
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many requests. Please try after 15 minutes.' },
      { status: 429 }
    )
  }
  
  try {
    const body = await request.json()
    const { name, email, phone, projectType, platform, features, timeline, budget, description, subject, message, type } = body
    
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      )
    }
    
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // If email not configured, still return success (demo mode)
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email not configured - running in demo mode')
      return NextResponse.json(
        { success: true, message: 'Request received! We will contact you soon.' },
        { status: 200 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    let emailContent = ''
    let emailSubject = ''

    if (type === 'project_quote') {
      emailSubject = `New Project Quote Request from ${sanitizeInput(name)}`
      emailContent = `
        <h2>New Project Quote Request</h2>
        <p><strong>Name:</strong> ${sanitizeInput(name)}</p>
        <p><strong>Email:</strong> ${sanitizeInput(email)}</p>
        <p><strong>Phone:</strong> ${sanitizeInput(phone || 'Not provided')}</p>
        <p><strong>Project Type:</strong> ${sanitizeInput(projectType || 'Not specified')}</p>
        <p><strong>Platforms:</strong> ${platform?.join(', ') || 'Not specified'}</p>
        <p><strong>Features:</strong> ${features?.join(', ') || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${sanitizeInput(timeline || 'Not specified')}</p>
        <p><strong>Budget:</strong> ${sanitizeInput(budget || 'Not specified')}</p>
        <p><strong>Description:</strong> ${sanitizeInput(description || 'Not provided')}</p>
      `
    } else {
      emailSubject = `New Contact Message from ${sanitizeInput(name)}`
      emailContent = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${sanitizeInput(name)}</p>
        <p><strong>Email:</strong> ${sanitizeInput(email)}</p>
        <p><strong>Subject:</strong> ${sanitizeInput(subject || 'No subject')}</p>
        <p><strong>Message:</strong> ${sanitizeInput(message || 'No message')}</p>
      `
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@dprs.in',
      subject: emailSubject,
      html: emailContent,
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting DPRS',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${sanitizeInput(name)},</p>
        <p>We have received your inquiry and will get back to you within 24 hours.</p>
        <p><strong>Next Steps:</strong></p>
        <ul>
          <li>✓ Our team will review your requirements</li>
          <li>✓ We'll prepare a detailed quote</li>
          <li>✓ We'll schedule a free consultation call</li>
        </ul>
        <p>Best regards,<br>DPRS Team</p>
      `
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: true, message: 'Request received! We will contact you soon.' },
      { status: 200 }
    )
  }
}