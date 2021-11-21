
FROM node:14
RUN npm i -g npm@8.1.4
RUN npm i -g @angular/cli@13.0.3
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .
RUN npm i
EXPOSE 4200
CMD ["ng", "serve"]

