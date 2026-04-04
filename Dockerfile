# Use an official Node.js runtime as the build stage
FROM node:20-bullseye-slim AS builder

WORKDIR /usr/src/app

# Install dependencies based on package-lock for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code and build the app
COPY . .
RUN npm run build

# Use a smaller image for the final runtime
FROM node:20-bullseye-slim AS runner

WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV PORT=8080

# Copy only the production dependencies and built app files
COPY package*.json ./
COPY --from=builder /usr/src/app/dist ./dist

RUN npm ci --omit=dev

EXPOSE 8080
CMD ["npm", "start"]
