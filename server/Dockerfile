# build environment
FROM node:8.17.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

FROM node:8.17.0-alpine
ENV NODE_ENV production
COPY --from=build /app/build /opt/app/build/
COPY --from=build /app/package.json /opt/app/
RUN npm install --prefix /opt/app --production
WORKDIR /opt/app
CMD npm start