# website-react
Redoing website in React from Create React App

# Custom Domain for GitHub Pages
For more detailed instructions see original instructions [here](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site).

# How to Deploy
We use an npm package called `gh-pages` to deploy the site to the `gh-pages`
branch.

## Script
We have an alias for the two commands we need to run to build and deploy the
site.

## Command
```bash
npm run build-deploy
```

### Output
```bash

> website@0.1.0 build-deploy /Users/simon/Projects/website-react/website
> react-scripts build && gh-pages -d build

Creating an optimized production build...
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db
Compiled successfully.

File sizes after gzip:

  53.8 KB  build/static/js/2.953c6adb.chunk.js
  1.55 KB  build/static/js/main.3a0ff36b.chunk.js
  772 B    build/static/js/runtime-main.94a6af97.js
  279 B    build/static/css/main.d6c5fc23.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy

Published
```
