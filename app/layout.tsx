import { Inter, MuseoModerno } from 'next/font/google'
import './globals.css'
import Nav from '@/components/ui/Nav'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const museo = MuseoModerno({ subsets: ['latin'], variable: '--font-museo', weight: ['700'] })

export const metadata = {
  title: 'Ayika — Cycle‑Aware Scheduling for Outlook & Google Calendar',
  description:
    "Align your calendar with your energy. Smart scheduling, energy forecasts, and privacy‑first controls. Join 2,847+ professional women on the waitlist."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${museo.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
