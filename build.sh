docker rm website
docker rmi website-image

npm run build

docker build -t website-image .
docker run -p 80:80 --name website website-image
