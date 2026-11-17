import { prisma } from "../../lib/prisma";
import Link from "next/link";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function AlunoPage({ params }: Props) {
  const { id } = await params;

  const aluno = await prisma.aluno.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!aluno) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">
          Aluno não encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        {aluno.nome}
      </h1>

      <div className="border rounded-lg p-6 space-y-4">
        <p>
          <strong>ID:</strong> {aluno.id}
        </p>

        <p>
          <strong>E-mail:</strong> {aluno.email}
        </p>

        <p>
          <strong>Telefone:</strong> {aluno.telefone}
        </p>

        <p>
          <strong>Plano:</strong> {aluno.plano}
        </p>

        <p>
          <strong>Data de Cadastro:</strong>{" "}
          {aluno.createdAt.toLocaleDateString("pt-BR")}
        </p>

        <div className="pt-4">
          <Link
            href={`/alunos/${aluno.id}/editar`}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Editar Aluno
          </Link>
        </div>
      </div>
    </main>
  );
}