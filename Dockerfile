# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all other files into the container
COPY . .

# Run the app
CMD ["node", "server/server.js"]
