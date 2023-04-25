import { Mulish } from "next/font/google";

import './globals.css'

export const metadata = {
  title: 'Foodify',
  description: 'A all-in-one recipe app',
}

const font = Mulish({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
