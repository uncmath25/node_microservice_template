FROM node:14.3.0-alpine

RUN apk update \
  && apk upgrade \
  && apk add bash

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Root user is necessary to create Docker container directories
# USER node

CMD ["npm", "start"]
