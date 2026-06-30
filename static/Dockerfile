FROM node:24-alpine

WORKDIR /usr/src/www

COPY ./package*.json ./
RUN --mount=type=cache,target=/root/.npm npm install

COPY ./src/ ./src/
COPY ./public/ ./public/
COPY ./static/astro.config.mjs ./astro.config.mjs
COPY ./tsconfig.json ./

ARG URL=http://localhost:4321
ENV PUBLIC_URL=$URL

CMD ["npm", "run", "dev"]
