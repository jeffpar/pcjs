FROM jekyll/jekyll

COPY docker-init.sh /

ENTRYPOINT [ "sh", "/docker-init.sh" ]

