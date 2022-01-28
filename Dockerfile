# Imagem de Origem
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine
COPY  --from=build ./app/build  /usr/share/nginx/html
EXPOSE 80
ENV API_URL=http://localhost:8000/api/
WORKDIR /usr/share/nginx/html
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]