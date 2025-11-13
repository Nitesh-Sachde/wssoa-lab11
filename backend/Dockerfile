FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install --only=production

# Copy source
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
