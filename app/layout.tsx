import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBM_PlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", '500', '600', "700"], variable: "--font-ibm-plex" });

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#624cf5" } }}>
      <html lang="en">
        <body className={cn("font-IBM_PlexSans min-h-screen bg-background antialiased", IBM_PlexSans.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
