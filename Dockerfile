FROM node:8-alpine

COPY . .
RUN yarn --prod && yarn build && yarn global add serve

EXPOSE 5000
CMD ["serve", "-s", "build"]
