import type React from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css"; // Ensure this file exists

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raghunandan Gaushala Seva Trust",
  description: "Dedicated to the protection and welfare of cows through compassionate care and sustainable practices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
