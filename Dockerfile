# Base image
FROM node AS base
WORKDIR /usr/src/app
RUN npm install -g @angular/cli

FROM base AS dev
COPY package*.json ./
RUN npm install

# Build image
FROM base AS build
COPY . .
RUN npm install
RUN ng build --output-path=dist --prod --base-href /

# Prod Iimage
FROM nginx:alpine AS prod
LABEL version="0.1"
LABEL maintainer="Thomas Tacke <thomas@tacke.email>"

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
