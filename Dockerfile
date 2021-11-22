
FROM node:14
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable
RUN npm i -g npm@8.1.4
RUN npm i -g @angular/cli@13.0.3
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .
RUN npm i
EXPOSE 4200
CMD ["ng", "serve"]

