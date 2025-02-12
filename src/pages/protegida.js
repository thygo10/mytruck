import { getSession } from "next-auth/react";

export default function PaginaProtegida({ user }) {
  return <h1>Olá, {user.name}! Você acessou uma página protegida.</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}
