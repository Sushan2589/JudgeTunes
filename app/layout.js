import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import UserSync from "@/components/userSync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JudgeTunes",
  description: "Join music communities and share your favorite tracks.",
  icons:{
    icon:"./judge-tunes.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <UserSync />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

