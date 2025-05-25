FROM oven/bun:alpine AS base

FROM base AS deps
WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ADD package*.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS production-deps
WORKDIR /app    
ADD package*.json bun.lock ./
RUN bun install --frozen-lockfile --omit=dev

FROM base AS build
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bunx prisma generate
RUN bunx prisma migrate deploy && bun build