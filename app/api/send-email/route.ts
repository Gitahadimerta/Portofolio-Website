import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const MAX_NAME_LENGTH = 100
const MAX_MESSAGE_LENGTH = 5000

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, message: "Format pesan tidak valid." }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ success: false, message: "Format pesan tidak valid." }, { status: 400 })
  }

  const { name, email, message } = body as Record<string, unknown>
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ success: false, message: "Nama, email, dan pesan wajib diisi." }, { status: 400 })
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  if (
    trimmedName.length > MAX_NAME_LENGTH ||
    trimmedMessage.length > MAX_MESSAGE_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) ||
    /[\r\n]/.test(trimmedName)
  ) {
    return NextResponse.json({ success: false, message: "Periksa kembali nama, email, dan panjang pesan Anda." }, { status: 400 })
  }

  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS
  if (!emailUser || !emailPass) {
    console.error("Email delivery is not configured: EMAIL_USER or EMAIL_PASS is missing")
    return NextResponse.json(
      { success: false, message: "Pengiriman email belum dikonfigurasi. Silakan hubungi melalui WhatsApp." },
      { status: 503 },
    )
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: emailUser, pass: emailPass },
    })

    await transporter.sendMail({
      from: emailUser,
      to: process.env.CONTACT_EMAIL || "ketutgita04@gmail.com",
      replyTo: trimmedEmail,
      subject: `Pesan portofolio dari ${trimmedName}`,
      text: `Nama: ${trimmedName}\nEmail: ${trimmedEmail}\nWaktu: ${new Date().toISOString()}\n\n${trimmedMessage}`,
    })

    return NextResponse.json({ success: true, message: "Pesan berhasil dikirim." })
  } catch (error) {
    console.error("Email delivery failed:", error)
    return NextResponse.json(
      { success: false, message: "Email gagal dikirim. Periksa konfigurasi email atau coba lagi nanti." },
      { status: 502 },
    )
  }
}
