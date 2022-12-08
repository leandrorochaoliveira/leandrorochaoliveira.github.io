import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const openSans = Open_Sans({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={openSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
