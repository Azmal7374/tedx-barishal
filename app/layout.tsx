/* eslint-disable import/order */
import { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
// eslint-disable-next-line import/order
import { Bebas_Neue } from "@next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Specify weights if available
});

export const metadata: Metadata = {
  title: "TEDX BARISHAL",
  description: "TEDX Platform",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          href="https://cdn-icons-png.flaticon.com/128/1790/1790457.png"
          rel="icon"
        />
      </head>
      <body className={bebasNeue.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}