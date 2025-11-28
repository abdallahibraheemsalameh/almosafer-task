import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { QueryProvider } from "@/providers/QueryProvider";
import { MuiProvider } from "@/providers/MuiProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GitHub Explorer - Search Repositories & Users",
  description:
    "Search and explore GitHub repositories and users with a beautiful, fast interface powered by the GitHub Search API.",
  keywords: ["GitHub", "search", "repositories", "users", "developer tools"],
  authors: [{ name: "GitHub Explorer" }],
  openGraph: {
    title: "GitHub Explorer",
    description: "Search and explore GitHub repositories and users",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
        style={{
          fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <QueryProvider>
          <MuiProvider>{children}</MuiProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
