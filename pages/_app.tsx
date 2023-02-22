import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Script from 'next/script'

const openSans = Open_Sans({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=YNKDVFB2T2`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YNKDVFB2T2');
        `}
      </Script>

      <div className={openSans.className}>
        <Component {...pageProps} />
      </div>
    </>

  );
}
