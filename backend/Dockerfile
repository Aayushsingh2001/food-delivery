FROM node:22-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN +x chmod node_modules/.bin/tsc

EXPOSE 4000
ENTRYPOINT [ "node"]
CMD [ "server.js" ]