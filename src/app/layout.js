import "./globals.css";

import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <GoogleTagManager gtmId="GTM-M2V3XV4N" />
      <body>
        {children}
      </body>
    </html>
  );
}
