FROM node:14.16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
ENTRYPOINT NODE_ENV=production node -r esm server/server.js