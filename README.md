<div align="center">
<img src="./readme-assets/icon.png" >
<br>
<img src="./readme-assets/text.png" >
<br>
<img src="https://img.shields.io/static/v1?label=LATEST&message=v1.0&color=DD2470&style=for-the-badge">

<a href="https://shrinkifi.herokuapp.com"><img src="https://img.shields.io/static/v1?label=WEBSITE&message=https://shrinkify.herokuapp.com&color=DD2470&style=for-the-badge"></a >

<a href="https://heroku.com/deploy?template=https://github.com/krishaayjois21/shrinkifi/">
<img src="https://img.shields.io/badge/%E2%86%91_Deploy_to-Heroku-7056bf.svg?style=for-the-badge"></a>
<a href="https://github.com/krishaayjois21/shrinkifi/blob/main/LICENSE"><img src="https://img.shields.io/static/v1?label=LICENSE&message=APACHE&color=E64B40&style=for-the-badge"></a>
<a href="https://github.com/krishaayjois21/shrinkifi/network/members">
<img src="https://img.shields.io/github/forks/krishaayjois21/shrinkifi?logo=github&style=for-the-badge"></a>
<a href="https://github.com/krishaayjois21/shrinkifi/stargazers"><img src="https://img.shields.io/github/stars/krishaayjois21/shrinkifi?logo=github&style=for-the-badge"></a>
<img src="https://img.shields.io/github/issues/krishaayjois21/shrinkifi?logo=github&style=for-the-badge">
<img src="https://img.shields.io/github/issues-pr/krishaayjois21/shrinkifi?logo=github&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=DONATE&message=WITH CRYPTO&color=0A58B8&style=for-the-badge">
<br>
<img src="./readme-assets/website_dark.png">
</div>
<hr>

# Setup

## Prerequisites
- [NodeJS](https://nodejs.org/en/)

## Environment Setup
- Create a MongoDB Cluster. [Here](https://www.youtube.com/watch?v=rPqRyYJmx2g) is a video tutorial
- Copy you connection URI/URL for NodeJS and note it down
- Create a `.env` file in the root of the project
- Also note down your domain name (if you are using heroku it will be `<app-id>.herokuapp.com`)
- Enter the following data into the `.env` file
```d
MONGODB_URI="mongodb+srv://<username>:<password>@<your-cluster-url>/<databse_name>?retryWrites=true&w=majority"
DOMAIN="<app-name>.herokuapp.com"
```

**Sample `.env` file**
<img src="./readme-assets/env-example.png">

## Node Setup
- Install all dependencies `npm install`
- To run the app with nodemon: `npm run develop`
- To run the app without nodemon: `npm start`
- Open `locahost:5000` on your browser
 
*and you are good to go!*

