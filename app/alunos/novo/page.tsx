import { criarAluno } from "../actions";

export default function NovoAlunoPage() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Novo Aluno
      </h1>

      <form
        action={criarAluno}
        className="flex flex-col gap-4"
      >
        <input
          name="nome"
          type="text"
          placeholder="Nome completo"
          className="border p-3 rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="E-mail"
          className="border p-3 rounded"
        />

        <input
          name="telefone"
          type="text"
          placeholder="Telefone"
          className="border p-3 rounded"
        />

        <select
          name="plano"
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
          Salvar Aluno
        </button>
      </form>
    </main>
  );
}