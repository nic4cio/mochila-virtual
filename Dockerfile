FROM node:14

WORKDIR /pds-project-3

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]