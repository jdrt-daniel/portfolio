import { ThemeProvider } from "@/themes/ThemeProvider";
import "./globals.css";
import { Suspense } from "react";
import { Content } from "@/components";

import { Inter } from "next/font/google";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<>cargando...</>}>
            <Content>{children}</Content>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
