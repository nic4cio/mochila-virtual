FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_API_URL=http://pds-2023-1-03.edge.net.br:9003/

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
