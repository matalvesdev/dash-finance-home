import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Dash-Home.ai",
  description: "Dash Home, organize as finanças da sua casa!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
