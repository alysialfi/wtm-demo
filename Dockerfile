FROM node:21.6.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY . .

CMD ["npm", "run", "preview"]
