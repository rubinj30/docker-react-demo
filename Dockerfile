FROM node:8-alpine

COPY . .
RUN yarn --prod

EXPOSE 3000
CMD ["npm", "start"]
