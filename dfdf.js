let c = {
  "name": "test","version": "1.0.0","description": "Test project by Inikon",
  "main": "index.js",
  "scripts": {
    "test": "npx jest ./test/test.js",
    "lint": "npx eslint ./src",
    "fix": "npx eslint ./src --fix",
    "prod": "npx webpack --mode production",
    "dev": "npx webpack --mode development",
    "start": "npx webpack-dev-server"
  },
  "author": "Inikon",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.5",
    "babel-loader": "^8.1.0",
    "copy-webpack-plugin": "^5.1.1",
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.1.0",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-prettier": "^3.1.2",
    "jest": "^26.0.1",
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {}
}
