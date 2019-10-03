# Showkokhon Website
> Why make an app when you can make a website? 🤔


[![CodeFactor](https://www.codefactor.io/repository/github/shawonashraf/showkokhon-web/badge)](https://www.codefactor.io/repository/github/shawonashraf/showkokhon-web) [![DeepScan grade](https://deepscan.io/api/teams/4763/projects/6518/branches/54716/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=4763&pid=6518&bid=54716) [![Netlify Status](https://api.netlify.com/api/v1/badges/2c10d790-d239-49b0-96f5-bafbf2a8d05c/deploy-status)](https://app.netlify.com/sites/showkokhon/deploys)

## Live @
[https://showkokhon.netlify.com](https://showkokhon.netlify.com)

## PWA

![pwa](./pwa.png)

If you're running Chrome 77 or newer browsers you can install ShowKokhon as a PWA. Chrome will show a install button when you load the page.

## Repo
- [GitLab](https://gitlab.com/ShawonAshraf/showkokhon-web)
- [GitHub](https://github.com/ShawonAshraf/showkokhon-web)

## API in use
 - [showkokhon-core-api](https://github.com/ShawonAshraf/showkokhon-core-api)
 - [showkokhon-scraper-api](https://github.com/ShawonAshraf/showkokhon-scraper-api)

## Running locally
 - Clone and start the `core-api` service first
 - Clone this repo
 - Create a `.env` file at the project root and add the following info
 ```
 REACT_APP_API_ROOT_URL="http://localhost:3000"
 PORT=9090
 SKIP_PREFLIGHT_CHECK=true
 ```
 _Change the values accordingly with the core-api_

 - `yarn install` (You can use NPM if you want to)
 - `yarn run start`

## Screenshot
![screenshot](./sc.png)

## LICENSE
MIT
