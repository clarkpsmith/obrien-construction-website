import mailgun from 'mailgun-js'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const mg = mailgun({
    apiKey: String(process.env.MAILGUN_API_KEY),
    domain: String(process.env.MAILGUN_DOMAIN),
  })

  const body = await req.json()
  console.log('DATA', body.data)
  try {
    await mg.messages().send(body.data)

    return NextResponse.json(
      { message: 'email sent successfully' },
      { status: 200 }
    )
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
