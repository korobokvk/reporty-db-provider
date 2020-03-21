FROM node:latest
WORKDIR /usr/src/app
COPY package.json package.json 
RUN npm install && npm install typescript -g && npm install grpc
ENV DB_URL=172.31.16.105
COPY . /usr/src/app
RUN tsc

CMD ["npm", "run", "start:prod"]