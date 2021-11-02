FROM jekyll/jekyll

ENV PCJS_PORT=4000

RUN apk add --no-cache git

COPY docker-init.sh /
#RUN chmod a+x /docker-init.sh

ENTRYPOINT [ "sh", "/docker-init.sh" ]

