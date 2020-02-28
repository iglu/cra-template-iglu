# Iglu Front

## Additional changes required (Custom Template limitations) before use

Copy files from `project-folder/src/_PROJECT_ROOT_` to `project-folder/` (can't be added with custom template)

Currently template only updates `package.json` dependencies and scripts object, so we have to add few lines manually:

```sh
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && npm run test:coverage"
    }
  },
  "lint-staged": {
    "**/*.{ts, tsx}": [
      "eslint --fix",
      "git add"
    ],
    "**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

## Features

- Quality tools (code): [Typescript](http://www.typescriptlang.org/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [React-testing-library](https://testing-library.com/docs/react-testing-library/intro), [Husky](https://github.com/typicode/husky)
- Quality tools (UI): [Storybook](https://storybook.js.org/)
- Quality tools (A11y): [React Axe](https://github.com/dequelabs/react-axe), [Why Did You Render](https://github.com/welldone-software/why-did-you-render)
- Addons: [MobX](https://mobx.js.org/README.html), [SASS](https://sass-lang.com/), [Formik](https://jaredpalmer.com/formik/docs/overview), [ReactGA](https://github.com/react-ga/react-ga)
- Performance: [Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- Hosting: [Netlify](https://www.netlify.com)

## Available Scripts

- `yarn` - Install dependencies
- `yarn start` - Runs the app in the development mode.
- `yarn test` - Launches the test runner in the interactive watch mode.
- `yarn test:coverage` - Runs the tests once.
- `yarn build` - Builds the app for production to the `build` folder.
- `yarn lint` - Look for linting errors
- `yarn lint:fix` - Look and fix linting errors
- `yarn storybook` - manage UI components
- `yarn eject` - will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them.

## Guidelines

- [Front-End: System of components](https://medium.com/@antonaavik/front-end-system-of-components-aac7cc45f05)
- [React: Custom Template for Iglu](https://medium.com/iglu-ou/react-custom-template-for-iglu-7644e1303668)
