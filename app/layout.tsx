import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratheek Rao | Portfolio",
  description: "Modern premium portfolio showcasing software engineering expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-[100vh] bg-[#050505] text-white antialiased">
        <Script id="reset-scroll-on-reload" strategy="beforeInteractive">
          {`(() => {
            const navigation = performance.getEntriesByType("navigation")[0];
            if (navigation?.type === "reload" && !window.location.hash) {
              window.history.scrollRestoration = "manual";
              window.scrollTo(0, 0);
              window.addEventListener(
                "load",
                () => {
                  window.history.scrollRestoration = "auto";
                },
                { once: true }
              );
            }
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}