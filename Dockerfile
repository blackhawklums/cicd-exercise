# ---- Build stage ----
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# ---- Runtime stage ----
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY src ./src
COPY package.json .

# Metadata labels
LABEL org.opencontainers.image.source="https://github.com/<YOUR_USERNAME>/cicd-exercise"

EXPOSE 3000
CMD ["node", "src/index.js"]