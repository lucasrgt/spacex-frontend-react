FROM node:16

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
RUN yarn global add serve

COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
