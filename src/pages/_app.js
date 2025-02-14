import { SessionProvider } from "next-auth/react";

export default function RootLayout({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}