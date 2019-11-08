npm install
npm run build
cp -r ../dist ./dist
sudo docker build -t rsp-server .
rm -rf ./dist
