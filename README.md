# Code Portfolio Website

A personal code portfolio website built with React and Vite. The site showcases projects, skills, experience, and education, and includes an AI chatbot integration.

## Tech Stack

- **React 19** with Vite
- **Caddy** web server (served via Docker)

## Development

Install dependencies and start the local dev server:

```bash
npm install
npm run dev
```

## Building and Running with Docker

The site is built locally with Vite and then served from a Docker container using Caddy.

**Build the Docker image and run the container:**

```bash
npm run build
docker build -t website-image .
docker run -p 80:80 --name website website-image
```

The site will be available at [http://localhost](http://localhost).

**To rebuild after changes** (removes the existing container and image first):

```bash
docker rm website
docker rmi website-image
npm run build
docker build -t website-image .
docker run -p 80:80 --name website website-image
```

On Windows, `build.cmd` automates these steps.
