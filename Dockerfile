# stage 1 - Build our application
FROM  node as build

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# stage 2 - Serve our application using Nginx
FROM nginx:alpine as runtime
COPY /nginx.conf /etc/nginx/conf.d/default.conf
ENV PORT 80
ENV HOST 0.0.0.0
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]