#!/bin/sh

echo "Cloning repo..."

git clone https://github.com/jeffpar/pcjs.git
chown -R jekyll:jekyll pcjs

cd pcjs

touch Gemfile.lock
chmod a+w Gemfile.lock

echo "Building..."
bundle install

echo "Starting server..."
bundle exec jekyll serve --host=0.0.0.0 --port $PCJS_PORT

