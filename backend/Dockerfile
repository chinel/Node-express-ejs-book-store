FROM node:18

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD [ "node", "server" ]



#ENV PORT=3001 You can specify you env variables manually

#Or you can copy all you env variable into you docker using the command like the below
#docker run --env-file env.list