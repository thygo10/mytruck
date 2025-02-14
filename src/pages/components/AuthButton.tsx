"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Carregando...</p>;

  return (
    <div>
      {session ? (
        <>
          <p>Olá, {session.user?.name}!</p>
          <button onClick={() => signOut()}>Sair</button>
        </>
      ) : (
        <button onClick={() => signIn("google")}>Entrar com Google</button>
      )}
    </div>
  );
}
