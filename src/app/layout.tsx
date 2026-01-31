
import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/components/font";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from 'react-toastify';

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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
