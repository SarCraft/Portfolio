# ---- Build Stage ----
FROM oven/bun:1 AS builder

WORKDIR /app

# Cache dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source and build
COPY . .
RUN bun run build

# ---- Runtime Stage ----
FROM nginx:alpine AS runtime

# Copy built assets to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
