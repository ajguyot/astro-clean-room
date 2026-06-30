# Astro Clean Room

**A clean init setup for an Astro project.**

This repo includes configurations for both static and dynamic Astro deployments. For each, a hot-reloading dev setup and a production build setup are included. A consuming project would select either static or dynamic and flatten the build hierarchy accordingly (primarily: elevate the `astro.config.mjs` file to the top level).

## Usage

### Static

- Builds the Astro site to static files.
- Routing by [Caddy](https://caddyserver.com).

**Dev Configuration:**
```sh
docker compose -f static/docker-compose.yaml up --build
```

**Production Configuration:**
```sh
docker compose -f static/docker-compose-prod.yaml up --build
```

### Dynamic

- Builds the Astro site and serves pages dynamically on request.
- Routing by the [Astro Node.js Adapter](https://docs.astro.build/en/guides/integrations-guide/node/).

**Dev Configuration:**
```sh
docker compose -f dynamic/docker-compose.yaml up --build
```

**Production Configuration:**
```sh
docker compose -f dynamic/docker-compose-prod.yaml up --build
```

## Notes

- These configurations can be run outside of Docker if desired, but this will require flattening the hierarchy such that `astro.config.mjs` is at the top level.
