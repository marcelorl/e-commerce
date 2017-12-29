FROM node:alpine

RUN mkdir /project
WORKDIR /project

ENV npm_config_tmp=/temp

COPY package.json yarn.lock ./
