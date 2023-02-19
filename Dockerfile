FROM node:16.13.0 AS builder
ADD ./ /app
WORKDIR /app
RUN apt-get update && apt-get install -y libglu1 && \
    apt-get install -y gettext &&  \
    yarn --pure-lockfile --ignore-engines && \
    npm run build

# Todo: нужно подружить это с nginx \

CMD ["npm start host='0.0.0.0'"]