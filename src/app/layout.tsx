import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: `O'Brien Construction`,
  description:
    'New Construction, Remodels, Restorations, Roofs, Decks, Kitchens, Bathrooms, Mitigation, Painting, Concrete, Electrical, Plumbing, Framing, Drywall, and More',
  creator: 'Clark Smith',
  author: 'Clark Smith',
  type: 'website',
  siteName: `O'Brien Construction`,
  openGraph: {
    title: `O'Brien Construction`,
    description:
      'New Construction, Remodels, Restorations, Roofs, Decks, Kitchens, Bathrooms, Mitigation, Painting, Concrete, Electrical, Plumbing, Framing, Drywall, and More',
    url: 'https://obrien-construction-website.vercel.app',
    siteName: `O'Brien Construction`,
    images: [
      {
        url: 'https//images.ctfassets.net/y9nl7oaic35n/3XRPIyccHhJMegiqVEmmjn/1266e263a968013be628247b9322dbe1/OB_Logo_Saw.png',
        width: 600,
        height: 600,
      },
      {
        url: 'https//images.ctfassets.net/y9nl7oaic35n/3XRPIyccHhJMegiqVEmmjn/1266e263a968013be628247b9322dbe1/OB_Logo_Saw.png',
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
