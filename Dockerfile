FROM node:10

MAINTAINER "Tan Guanghua" "guanghua.tan@desay-svautomotive.com"

ADD ./dist /rsp-server/

WORKDIR /rsp-server

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

RUN npm config set registry http://10.219.107.16:8081/repository/itti-npm-registry/

RUN cd server && npm install

EXPOSE 8080

CMD ["npm","run","prod"]

