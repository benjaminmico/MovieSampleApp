# MovieSampleApp LcFlix

![](./assets/gif.gif)

## Available Scripts

### `yarn`

Install packages

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn start`

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `yarn ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

## Features

Création d'un dashboard de films:

- Menu en bas
  - Au centre le nom de l'app LcFlix
  - Icon Wishlist + nombre de films qui s'y trouvent à droite
- Homepage
  - Hero (Image + nom du film)
  - Liste de 5 films (photo + titre + ajout à la wishlist) dans un slider
  - Au click sur la vignette ça renvoit vers la Page Detail
- Page Détail - BigPhoto, titre, Synopsis, Réalisateur, ajout à la wishlist
- Wishlist :
  - Vignette horizontal (img + titre + icon supprimer wishlist)

Api utilisée : https://developers.themoviedb.org/3/getting-started/introduction

## Improvements if we should go further...

- CI/CD : build and deploy with GitHub Actions + Configure Fastlane
- Code duplication (especially styles)
- Init e2e testing stack Detox
- Add some utils tools (Rest, jest HOC, store encryption...)
