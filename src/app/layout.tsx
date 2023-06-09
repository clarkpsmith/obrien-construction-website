import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: `O'Brien Construction`,
  description:
    'The portfolio site of full stack developer Clark Smith, check out some of the projects Clark has built!',
  creator: 'Clark Smith',
  author: 'Clark Smith',
  type: 'website',
  siteName: `'O'Brien Construction'`,
  openGraph: {
    title: `'O'Brien Construction'`,
    description:
      'The portfolio site of full stack developer Clark Smith, check out some of the projects Clark has built!',
    url: 'https://www.clarksmith.dev',
    siteName: `'O'Brien Construction'`,
    images: [
      {
        url: 'https://images.ctfassets.net/mrg9gspwlszz/7lPe1ziYbXKC1JBCEja3lG/5449926b85a176382fdbc2e9a3ab85b5/profile-pic-2.jpeg',
        width: 600,
        height: 600,
      },
      {
        url: 'https://images.ctfassets.net/mrg9gspwlszz/7lPe1ziYbXKC1JBCEja3lG/5449926b85a176382fdbc2e9a3ab85b5/profile-pic-2.jpeg',
        width: 1600,
        height: 1600,
        alt: 'preview image',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
