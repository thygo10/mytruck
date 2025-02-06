import Head from "next/head";
import { AppProps } from "next/app";
import "../app/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Truck</title>
        <meta name="description" content="My Truck" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}