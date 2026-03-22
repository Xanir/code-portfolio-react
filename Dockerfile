FROM caddy:2-alpine

# Copy built frontend into the directory served by Caddy
COPY ./dist /srv

# Copy the custom Caddy config file into the image
COPY ./Caddyfile /etc/caddy/Caddyfile