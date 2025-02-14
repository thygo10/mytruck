import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="p-6 text-center">
      {session ? (
        <>
          <h1>Bem-vindo, {session.user?.name}!</h1>
          <img
            src={session.user?.image ?? ""}
            alt="Foto de perfil"
            className="rounded-full w-16 h-16 mx-auto"
          />
          <button
            onClick={() => signOut()}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Sair
          </button>
        </>
      ) : (
        <>
          <h1>Bem-vindo ao meu site!</h1>
            <button
              onClick={() => signIn("github")}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
              disabled={!session}
            >
              Entrar com GitHub
            </button>
            <button
              onClick={() => signIn("google")}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded disabled:opacity-50"
              disabled={!session}
            >
              Entrar com Google
            </button>
        </>
      )}
    </div>
  );
}
