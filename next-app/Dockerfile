# --- Dependencies --- #
FROM node:14-alpine AS deps
WORKDIR /next-app

COPY package*.json ./

RUN npm ci

# --- Build --- #
FROM node:14-alpine AS builder
WORKDIR /next-app

COPY . ./

COPY --from=deps next-app/node_modules/ node_modules/

RUN npm run build

# --- Run --- #
FROM node:14-alpine AS runner
WORKDIR /next-app

COPY public/ public/
COPY next.config.js ./
COPY package.json ./

COPY --from=deps next-app/node_modules/ node_modules/

COPY --from=builder next-app/.next/ .next/

EXPOSE 3000

CMD ["npm", "start"]
