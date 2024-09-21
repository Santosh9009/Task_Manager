import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".././globals.css";
import StoreProvider from "@/redux/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager App",
  description: "A Task Management app in nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          {children}
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}
