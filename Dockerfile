FROM node:10-alpine
LABEL maintainer="Nguyen Nguyen <nguyenbk92@gmail.com>"
# Set the working directory to /app
WORKDIR /app
RUN  apk add --update \
    git \
    bash \
    make \
    g++

# Copy the current directory contents into the container at /app
COPY topics /app/topics/
COPY template /app/template/
COPY init.sh /app/
COPY finish.sh /app/
COPY jest.config.js /app/
COPY package.json /app
COPY README.md /app/

RUN npm install -g npm@6.4.0
RUN npm install -g jest
RUN npm test

RUN chmod +x init.sh
RUN sed -i -e 's/\r$//' init.sh

RUN chmod +x finish.sh
RUN sed -i -e 's/\r$//' finish.sh
