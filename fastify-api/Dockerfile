# --- Dependencies --- #
FROM node:14-alpine AS deps
WORKDIR /fastify-api

COPY package*.json ./

RUN npm ci

# --- Build --- #
FROM node:14-alpine AS builder
WORKDIR /fastify-api

COPY . ./

COPY --from=deps fastify-api/node_modules/ node_modules/

RUN npm run build

# --- Run --- #
FROM node:14-alpine AS runner
WORKDIR /fastify-api

COPY --from=deps fastify-api/node_modules/ node_modules/

COPY --from=builder fastify-api/build/ build/

EXPOSE 4000

CMD ["node", "build/index.js"]
