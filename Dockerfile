# Base image
FROM node AS base
WORKDIR /usr/src/app

# Just a breakpoint to stop for dev
FROM base AS dev

# Build image
FROM base AS build
RUN npm config set @smart-home-the-verse:registry https://gitlab.com/api/v4/packages/npm/
COPY package*.json ./
RUN npm install
COPY . .
RUN yarn global add @angular/cli@9.0.7
# RUN npm install -g @angular/cli@9.0.7
RUN ng build --output-path=dist --prod --base-href /

# Prod Iimage
FROM nginx:alpine AS prod
LABEL version="0.1"
LABEL maintainer="Thomas Tacke <thomas@tacke.email>"

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
