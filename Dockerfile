FROM node:21.6.1-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "preview"]
