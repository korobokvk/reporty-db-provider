FROM node:10.16
WORKDIR /usr/src/app
COPY package.json package.json 
RUN npm install && npm install typescript -g && npm install grpc
ENV DB_URL=18.189.167.126
COPY . /usr/src/app
RUN tsc

CMD ["npm", "run", "start:prod"]