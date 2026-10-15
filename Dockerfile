FROM node:20-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy seluruh source code
COPY . .

# Expose port aplikasi
EXPOSE 3005

# Jalankan aplikasi
CMD ["npm", "start"]
