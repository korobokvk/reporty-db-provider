FROM node:latest
WORKDIR /usr/src/app
COPY package.json package.json 
RUN npm install && npm install typescript -g && npm install grpc
COPY . /usr/src/app
RUN tsc

CMD ["npm", "run", "start:prod"]