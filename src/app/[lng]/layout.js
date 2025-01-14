import "./globals.css";

import { GoogleTagManager } from '@next/third-parties/google'
import { dir } from 'i18next'

import { languages } from '../i18n/settings'

export const metadata = {
  title: "Auto China: Your trusted source for Electric Vehicles in Europe & the Middle East",
  description: "Discover top brands like Xiaomi SU7, Li Auto, Avatr, and premium EV accessories.",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children,
  params: {
    lng
  }
 }) {
  return (
    <html  lang={lng} dir={dir(lng)}>
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
