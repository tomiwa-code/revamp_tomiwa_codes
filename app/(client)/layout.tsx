import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/general/Navbar";
import ToggleTheme from "@/components/general/ToggleTheme";
import ThemeContextProvider from "@/context/Theme.Context";
import NextTopLoader from "nextjs-toploader";

const StretchPro = localFont({
  src: "./fonts/StretchPro.otf",
  variable: "--StretchPro",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tomiwa.codes",
    default: "Tomiwa.codes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${StretchPro.variable} antialiased`}>
        <NextTopLoader color="#b251e6" showSpinner={false} />
        <ThemeContextProvider>
          <main className="bg-dark-100 text-white min-h-screen w-full">
            <Navbar />
            <ToggleTheme />
            {children}
          </main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
