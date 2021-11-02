#!/bin/sh

echo "Preparing..."
chown -R jekyll:jekyll .

echo "Building..."
bundle install

echo "Starting server..."
bundle exec jekyll serve --host=0.0.0.0

