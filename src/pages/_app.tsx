import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (<>
  <Script src="../scripts/ayoba.js"/>
  <Script src="../scripts/microapp.js"/><Component {...pageProps} /></>)
}
