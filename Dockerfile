FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm*.yaml ./

RUN npm install -g pnpm && pnpm install

COPY ./dist .

EXPOSE 3000
CMD [ "node", "./bin/www.js" ]
