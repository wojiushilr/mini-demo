FROM node:14.20.1

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install