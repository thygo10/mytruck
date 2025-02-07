// src/app/page.tsx
import Head from "next/head";  // Importando o Head corretamente
import "../styles/global.css";  // Importando o CSS global

export default function Page() {
  return (
    <>
      <Head>
        <title>My Truck</title>
        <meta name="description" content="My Truck" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <h1>Welcome to My Truck</h1>
      <p>This is the homepage content.</p>
    </>
  );
}
