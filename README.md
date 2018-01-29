
npm install --save gh-pages
edit package.json
+ "homepage": "http://mygithubid.github.io/projectname",
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",