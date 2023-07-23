import { Mulish } from "next/font/google";

import './globals.css';
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import AddRecipeModal from "./components/modals/AddRecipeModal";
import SearchModal from "./components/modals/SearchModal";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/Footer";

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Foodify',
  description: 'An all-in-one recipe app',
}

const font = Mulish({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <AddRecipeModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          <div className="hidden sm:hidden">
            <Navigation currentUser={currentUser} />
          </div>
        </ClientOnly>
        <div className="pb-20 pt-28 dark:bg-dark">
          {children}
        </div>
        <ClientOnly>
          <Footer />
        </ClientOnly>
        <Analytics />
      </body>
    </html>
  )
}
