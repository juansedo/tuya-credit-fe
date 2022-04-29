FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn global add expo-cli@5.4.3
RUN yarn add --dev typescript@~4.3.5

COPY . .

EXPOSE 19000 19001 19002 19006
CMD ["yarn", "start"]
