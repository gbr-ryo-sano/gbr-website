# 開発環境ステージ
FROM node:lts-alpine AS dev
WORKDIR /web
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]
EXPOSE 5173

# 本番環境ビルドステージ
FROM node:lts AS build
WORKDIR /web
COPY package*.json ./
RUN npm run build
COPY /app/build .
CMD ["node", "index.js"]
EXPOSE 3000