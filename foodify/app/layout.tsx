import { Mulish } from "next/font/google";

import './globals.css'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import Auth from "./components/Auth";

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
      <body className={font.className}>
        <ClientOnly>
          {/* <Modal actionLabel="Submit" title="Hello" isOpen />
          <Navbar /> */}
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
