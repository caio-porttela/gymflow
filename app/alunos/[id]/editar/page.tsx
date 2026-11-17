import { prisma } from "../../../lib/prisma";
import { editarAluno } from "../../actions";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditarAlunoPage({ params }: Props) {
  const { id } = await params;

  const aluno = await prisma.aluno.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!aluno) {
    return <h1>Aluno não encontrado</h1>;
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Editar Aluno
      </h1>

      <form
        action={async (formData) => {
          "use server";

          await editarAluno(aluno.id, formData);
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="nome"
          defaultValue={aluno.nome}
          className="border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          defaultValue={aluno.email}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="telefone"
          defaultValue={aluno.telefone}
          className="border p-3 rounded"
        />

        <select
          name="plano"
          defaultValue={aluno.plano}
          className="border p-3 rounded"
        >
          <option>Mensal</option>
          <option>Trimestral</option>
          <option>Anual</option>
        </select>

        <button
          type="submit"
          className="bg-black text-white p-3 rounded"
        >
          Salvar Alterações
        </button>
      </form>
    </main>
  );
}