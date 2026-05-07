import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FormGuard – Never Lose Form Data Again",
  description: "Browser extension that automatically saves form inputs as you type and restores them after crashes, with encrypted local storage."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0663a384-29d0-4a14-9d8b-294c4778e191"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
