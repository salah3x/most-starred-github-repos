<div align="center">
  <img src="./src/assets/icon/favicon.png" width="200" alt="App Logo" />
  <h2>Most Starred Github Repos</h2>

![GitHub release](https://img.shields.io/github/release/salah3x/most-starred-github-repos.svg?color=%23f441be)
![GitHub](https://img.shields.io/github/license/salah3x/most-starred-github-repos.svg?color=%232196F3)

</div>

---

A demo web app that lists the most starred Github repos that were created in the last 30 days.

## Idea of the App

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. You'll be fetching the sorted JSON data directly from the [Github API](https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc)

---

## Development server

- First clone the repo: `git clone git@github.com:salah3x/most-starred-github-repos.git`
- Install dependencies for the app (assuming `node`, `npm` and `ionic` are already installed): `cd most-starred-github-repos && npm install`
- Run `ionic serve` for a dev server.
- Navigate to `http://localhost:8100/`.

> The app will automatically reload if you change any of the source files.

## Build

Run `ionic build` to build the project. The build artifacts will be stored in the `www` directory.

> Use the `--prod` flag for a production build.

## Android/iOS

- First, build the app: `ionic build --prod`
- Next, add the platforms that you'd like to build for:
  ```
  npx cap add ios
  npx cap add android
  ```
  > Upon running these commands, both `android` and `ios` folders at the root of the project are created. These are entirely separate native project artifacts that should be considered part of this app (i.e., check them into source control).
- From the Terminal, run the Capacitor copy command, which copies all web assets into the native iOS project: `npx cap copy`

  > Note: After making updates to the native portion of the code (such as adding a new plugin), use the sync command: `npx cap sync`

- Next, run the Capacitor open command, which opens the native project in Android Studio/Xcode:
  ```
  npx cap open android
  npx cap open ios
  ```
- Change the permissions in each project, generate the build artifacts and push them to the play/app store like you do in a normal Android/iOS project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Ionic CLI use `ionic help` or go check out the [Ionic CLI README](https://ionicframework.com/docs/cli).

---

This project was generated with [Ionic CLI](https://github.com/ionic-team/ionic-cli) version 5.2.3.
