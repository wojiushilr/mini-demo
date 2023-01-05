FROM ruby:2.7.0

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV DEBCONF_NOWARNINGS yes

RUN mkdir /app
WORKDIR /app

ADD Gemfile /app/Gemfile

# backend から db　まで  postgresql-clientが必要、バージョン合う必要
RUN apt-get update -qq && apt-get install -y postgresql-client-11

RUN bundle install

ADD . /app