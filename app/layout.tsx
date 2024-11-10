/* eslint-disable import/order */
import { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
// eslint-disable-next-line import/order

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
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}