# GymFlow

Sistema web de gestão de academias, desenvolvido como projeto prático de 
aprendizado em desenvolvimento web, infraestrutura e práticas DevOps.

## Sobre o projeto

O GymFlow tem como objetivo facilitar o gerenciamento de alunos de uma 
academia, oferecendo uma interface para cadastro, consulta e edição de 
informações.

O projeto também será utilizado para aplicar conhecimentos de Docker, 
automação, CI/CD, Cloud Engineering e segurança.

## Tecnologias utilizadas

- **Next.js 16** — framework React.
- **React 19** — construção da interface.
- **TypeScript** — tipagem estática.
- **Tailwind CSS 4** — estilização.
- **Prisma ORM 6** — comunicação com o banco de dados.
- **SQLite** — banco de dados local.

## Funcionalidades implementadas

- Dashboard.
- Listagem de alunos.
- Cadastro de alunos.
- Edição de dados dos alunos.
- Persistência de dados com SQLite.

## Executar localmente

### Pré-requisitos

- Node.js
- npm

### Instalação

```bash
git clone URL_DO_REPOSITORIO
cd gymflow
npm install
```

### Preparar o banco de dados

```bash
npx prisma migrate deploy
npx prisma generate
```

### Iniciar a aplicação

```bash
npm run dev
```

Acesse:

http://localhost:3000

## Próximas etapas

- Containerização com Docker.
- Implementação de pipeline CI/CD.
- Melhorias de segurança.
- Monitoramento da aplicação.
- Estudos de implantação em Cloud.

## Objetivo

Desenvolver um projeto prático que conecte desenvolvimento de aplicações, 
infraestrutura, automação e segurança, aplicando conceitos importantes para 
a área de DevOps e Cloud Engineering.
