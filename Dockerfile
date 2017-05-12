FROM node:alpine

RUN mkdir -p /usr/src/lt.surge.sh
WORKDIR /usr/src/lt.surge.sh

ADD package.json /usr/src/lt.surge.sh
ADD yarn.lock /usr/src/lt.surge.sh
RUN yarn

ADD config /usr/src/lt.surge.sh/config
ADD public /usr/src/lt.surge.sh/public
ADD scripts /usr/src/lt.surge.sh/scripts
ADD src /usr/src/lt.surge.sh/src

CMD yarn start
EXPOSE 3000
