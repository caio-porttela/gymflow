"use server";
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";

export async function criarAluno(formData: FormData) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const telefone = formData.get("telefone") as string;
  const plano = formData.get("plano") as string;

  await prisma.aluno.create({
    data: {
      nome,
      email,
      telefone,
      plano,
    },
  });
}
export async function excluirAluno(id: number) {
  await prisma.aluno.delete({
    where: {
      id,
    },
  });
}
export async function editarAluno(
  id: number,
  formData: FormData
) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const telefone = formData.get("telefone") as string;
  const plano = formData.get("plano") as string;

  await prisma.aluno.update({
    where: {
      id,
    },
    data: {
      nome,
      email,
      telefone,
      plano,
    },
  });
  redirect("/alunos");
}