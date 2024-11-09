import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const mulish = Mulish({
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: "HomeFinance.ai",
  description: "HomeFinance.ai, organize as finanças da sua casa!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${mulish.className}  dark antialiased`}
      >
        <ClerkProvider appearance={{
          baseTheme: dark,

        }}>{children}</ClerkProvider>
      </body>
    </html>
  );
}
