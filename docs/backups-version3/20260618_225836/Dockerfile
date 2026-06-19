FROM node:20-alpine

LABEL org.opencontainers.image.authors="Andres Alejandro Silva Aguilar"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run compile

CMD ["npm", "test"]