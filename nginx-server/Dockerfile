FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["/bin/sh", "-c", "while :; do sleep 6h & wait ${!}; nginx -s reload; done & nginx -g \"daemon off;\""]
