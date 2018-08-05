FROM node:8-alpine

COPY build ./build
RUN yarn global add serve

EXPOSE 5000
CMD ["serve", "-s", "build"]
