FROM node:12

# Create app directory
WORKDIR /usr/src/app
#把代码放在哪   下一步在镜像中创建一个文件夹存放应用程序代码，这将是你的应用程序工作目录
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 9234
CMD [ "npm", "start" ]
# RUN 是 docker build的时候 就执行了
# CMD 是允许 docker  (docker run)的时候 才执行