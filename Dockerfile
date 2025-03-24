# syntax=docker.io/docker/dockerfile:1

FROM node:23 AS base

FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Disable NextJS telemetry
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS dev
WORKDIR /app

RUN apt-get update \
    && apt-get install -y --quiet ffmpeg
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app .

CMD ["npm", "run", "dev"]
