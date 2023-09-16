# Stage 0
FROM node:16.16 as build
COPY . /app
WORKDIR /app
ENV GENERATE_SOURCEMAP=false
RUN yarn install --prod
RUN yarn run build
# Stage 1
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/ /usr/share/nginx/html
EXPOSE 4005
CMD ["nginx", "-g", "daemon off;"]