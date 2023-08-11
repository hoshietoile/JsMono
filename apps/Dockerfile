FROM node:16

WORKDIR /app
COPY ./backend/ ./backend
COPY ./frontend/ ./frontend
RUN npm i -g @nestjs/cli

WORKDIR /app/frontend/app
RUN yarn install

WORKDIR /app/backend/app
RUN yarn install

WORKDIR /app

# TODO: monorepo用実行関数
# CMD ["yarn", "dev"]
# CMD ["yarn", "start"]