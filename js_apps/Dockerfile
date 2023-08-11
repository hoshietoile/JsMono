FROM node:16

WORKDIR /repo_root
COPY ./repo_root /repo_root

RUN apt update -y
RUN apt-get install -y graphviz
RUN npm i -g @nestjs/cli
RUN npm i -g turbo
RUN yarn install

CMD ["yarn", "dev"]