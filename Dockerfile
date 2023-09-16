
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY  build/ /usr/share/nginx/html
EXPOSE 4005
CMD ["nginx", "-g", "daemon off;"]