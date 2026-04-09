# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project (includes SSR)
RUN npm run build

# Stage 2: Run
FROM node:20-alpine

WORKDIR /app

# Copy the build output from the build stage
COPY --from=build /app/dist/veterinaria /app/dist/veterinaria

# Expose the port the app runs on (standard for Angular SSR/Express)
EXPOSE 4000

# Set the entry point to run the SSR server
CMD ["node", "dist/veterinaria/server/server.mjs"]
