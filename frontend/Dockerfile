FROM node:18

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3002

CMD [ "node", "server" ]