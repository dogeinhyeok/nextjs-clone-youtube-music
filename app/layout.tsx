import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouTube Music - Next.js",
  description: "Next.js로 만든 YouTube Music 클론 코딩입니다.",
  metadataBase: new URL("https://nextjs-clone-youtube-music.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "YouTube Music - Next.js",
    description: "Next.js로 만든 YouTube Music 클론 코딩입니다.",
    url: "https://nextjs-clone-youtube-music.vercel.app",
    images: [
      {
        url: "https://nextjs-clone-youtube-music.vercel.app/og-image.png",
        alt: "og-image",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
