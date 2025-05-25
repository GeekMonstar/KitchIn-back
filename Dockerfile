FROM oven/bun:alpine AS base

FROM base AS deps
WORKDIR /app
ADD package*.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS production-deps
WORKDIR /app    
ADD package*.json bun.lock ./
RUN bun install --frozen-lockfile --omit=dev

FROM base AS build
WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN echo "DATABASE_URL: ${DATABASE_URL}"
RUN bunx prisma generate
RUN bunx prisma migrate deploy && bun run build