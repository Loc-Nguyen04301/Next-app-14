
import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/components/font";
import Sidebar from "@/components/layouts/Sidebar";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng học lập trình trực tuyến siêu cấp vip pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
