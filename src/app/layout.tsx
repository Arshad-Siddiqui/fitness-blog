import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Sidebar from "./sidebar";

export const metadata: Metadata = {
  title: "Paper Fitness",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Sidebar />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
