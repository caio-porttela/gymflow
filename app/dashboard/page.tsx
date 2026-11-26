import { prisma } from "../lib/prisma";
export const dynamic = "force-dynamic";
export default async function DashboardPage() {
  const totalAlunos = await prisma.aluno.count();

  const mensal = await prisma.aluno.count({
    where: {
      plano: "Mensal",
    },
  });

  const trimestral = await prisma.aluno.count({
    where: {
      plano: "Trimestral",
    },
  });

  const anual = await prisma.aluno.count({
    where: {
      plano: "Anual",
    },
  });

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="border rounded-lg p-4">
          <h2>Total de Alunos</h2>
          <p className="text-4xl font-bold">
            {totalAlunos}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2>Mensal</h2>
          <p className="text-4xl font-bold">
            {mensal}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2>Trimestral</h2>
          <p className="text-4xl font-bold">
            {trimestral}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h2>Anual</h2>
          <p className="text-4xl font-bold">
            {anual}
          </p>
        </div>
      </div>
    </main>
  );
}