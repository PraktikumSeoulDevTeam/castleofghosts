FROM node:12-slim
WORKDIR /root
COPY package.json yarn.lock /root/
RUN yarn install
COPY . /root
CMD ["yarn", "start"]
