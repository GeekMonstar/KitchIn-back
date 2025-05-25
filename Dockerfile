FROM oven/bun:alpine AS base

FROM base AS deps
WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
ADD package*.json bun.lock ./ 
RUN bun install --frozen-lockfile

FROM base AS production-deps
WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL  
ADD package*.json bun.lock ./ 
RUN bun install --frozen-lockfile --omit=dev

FROM base AS build
WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Debug temporaire pour vérifier si la variable est bien transmise
RUN echo "🎯 DATABASE_URL=$DATABASE_URL"

RUN bunx prisma generate
RUN bunx prisma migrate deploy

EXPOSE 3000

CMD ["bun", "index.ts"]
