import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">
          GymFlow
        </h1>

       <div className="flex gap-4">
  <Link href="/login">Login</Link>
  <Link href="/dashboard">Dashboard</Link>
  <Link href="/alunos">Alunos</Link>
</div>
      </nav>

      <section className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-6xl font-bold">
          Gestão completa para academias
        </h2>

        <p className="mt-4 text-xl">
          Alunos, pagamentos, treinos e relatórios em um único sistema.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg">
          Começar Agora
        </button>
      </section>
    </main>
  );
}