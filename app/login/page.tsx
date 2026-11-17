export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-[400px] border rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">
          Entrar
        </h1>

        <input
          type="email"
          placeholder="E-mail"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-black text-white p-3 rounded">
          Entrar
        </button>
      </div>
    </main>
  );
} 