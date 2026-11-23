# Etapa 1: imagem base
FROM node:22-bookworm-slim AS base

WORKDIR /app

# Etapa 2: instalar dependências
FROM base AS dependencies

COPY package.json package-lock.json ./

RUN npm ci

# Etapa 3: construir a aplicação
FROM base AS builder

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN npx prisma generate

RUN npm run build

# Etapa 4: imagem final
FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

WORKDIR /app

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

CMD ["node", "server.js"]
