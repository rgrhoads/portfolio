docker build -t portfolio .
docker run -d --restart unless-stopped --network host --name portfolio -p 5173:5173 portfolio
