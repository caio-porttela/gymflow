import Link from "next/link";
import { prisma } from "../lib/prisma";
import { excluirAluno } from "./actions";

export default async function AlunosPage() {
  const alunos = await prisma.aluno.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Alunos
        </h1>

        <a
          href="/alunos/novo"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Novo Aluno
        </a>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">Nome</th>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Telefone</th>
            <th className="text-left p-3">Plano</th>
            <th className="text-left p-3">Ações</th>
          </tr>
        </thead>

        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id} className="border-b">
              <td className="p-3">
                <Link
                  href={`/alunos/${aluno.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {aluno.nome}
                </Link>
              </td>

              <td className="p-3">{aluno.email}</td>
              <td className="p-3">{aluno.telefone}</td>
              <td className="p-3">{aluno.plano}</td>

              <td className="p-3">
                <div className="flex gap-2">
  <Link
    href={`/alunos/${aluno.id}/editar`}
    className="bg-blue-600 text-white px-3 py-1 rounded"
  >
    Editar
  </Link>

  <form
    action={async () => {
      "use server";
      await excluirAluno(aluno.id);
    }}
  >
    <button
      type="submit"
      className="bg-red-600 text-white px-3 py-1 rounded"
    >
      Excluir
    </button>
  </form>
</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}