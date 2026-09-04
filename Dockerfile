FROM node:24-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm ci

COPY app/ .

EXPOSE 5000

CMD ["npm","start"]