FROM ruby:2.7.0

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV DEBCONF_NOWARNINGS=yes

ADD Gemfile /app/
ADD Gemfile.lock /app/

# RUN bundle config set path 'vendor/bundle'
RUN bundle install -j4
RUN apt-get update -qq && apt-get install -y postgresql-client

ADD . /app

VOLUME /app/public
VOLUME /app/tmp
VOLUME /app/log

EXPOSE 4000

# CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]