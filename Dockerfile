FROM halverneus/static-file-server:latest

# Copy built frontend into the directory served by static-file-server
COPY ./dist /web