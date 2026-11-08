FROM jekyll/jekyll:4.2.2

COPY docker-init.sh /

ENTRYPOINT [ "sh", "/docker-init.sh" ]

