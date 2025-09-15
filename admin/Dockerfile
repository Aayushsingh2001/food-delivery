FROM node:22-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run dist

FROM nginx:alpine-slim
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]