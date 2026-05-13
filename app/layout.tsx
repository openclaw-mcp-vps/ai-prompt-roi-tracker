import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt ROI Tracker — Measure the Business Impact of Every Prompt',
  description: 'Track ROI of each AI prompt variation. Connect your APIs, run A/B tests, and see exactly which prompts drive revenue for your SaaS.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a1b73992-bda0-4f53-832a-e2b87fe09ff0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
