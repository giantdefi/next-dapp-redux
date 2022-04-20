# next-dapp-redux
NextJS Decentrilized Apps with Tailwind Css and Redux State Management

This page is the continue version of next-dapps repository

## Refractoring folder

Create new src folder and move pages folder to this folder.

create jsconfig.json on the root folder to pointing the path to src folder.

```bash
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

Modify tailwind.config.js file to enable css to all files inside 'src' folder :

```bash
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Install redux toolkit

```bash
yarn add @reduxjs/toolkit react-redux redux-devtools-extension redux-persist redux-thunk

```

Inside src folder create new folder : redux

Check local storage for persist State.
Also install Redux dev tools to monitor the state.

## Deploy on Vercel

Check out the deployed of this script on vercel.

