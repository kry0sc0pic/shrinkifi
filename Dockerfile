FROM alpine
RUN apk update
RUN apk upgrade
RUN apk add --update nodejs 
RUN apk add --update nodejs-npm
COPY . .
RUN rm -rf node_modules
RUN npm install
EXPOSE 5000
CMD ["npm" , "start"]
