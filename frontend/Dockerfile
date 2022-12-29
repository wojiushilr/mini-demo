FROM node:14.20.1
WORKDIR /app

ENV DEBCONF_NOWARNINGS=yes
COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY ./ /app/

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

RUN yarn exec nuxt build

EXPOSE 3000

CMD ["yarn", "run", "nuxt", "start"]