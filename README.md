# Nuxt3 + CodyHouse starter

Kick off your project with this boilerplate. This starter ships with the main Nuxt 3 configuration files you might need to get up and running blazing fast with the blazing fast app generator for Vue paired with the [CodyFrame CSS framework](https://codyhouse.co/ds/get-started). Include CodyHouse [components](https://codyhouse.co/ds/components) easily by following their directions on using [components with Vue](https://codyhouse.co/blog/post/using-the-codyhouse-components-with-vue-jst).

## 🚀 Quick start

1.  **Clone this repo**

    ```shell
    $ git clone git@github.com:justerhan/nuxt3-starter-codyhouse.git
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd nuxt3-codyhouse-starter/
    yarn install && yarn dev
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

    Open the `nuxt3-codyhouse-starter` directory in your code editor of choice and edit `pages/index.vue`. Save your changes and the browser will update in real time!

    By default, the codyhouse 'confetti button' component is included  as an example in `components/confetti-btn.vue`. You may want to delete this component and its corresponding SCSS file if you are not using it.


4. **Importing a new codyhouse component**
   1. Make sure that `assets/css/codyhouse/main/_base.scss` has the correct path.
   2. Place the component SCSS file into `assets/css/codyhouse/main/components/` folder.
   3. Import the new SCSS file by adding a `@use` statement in `assets/css/codyhouse/main/_components.scss`
   4. Create a new vue component by adding a `.vue` file in `./components` folder.
   5. Copy and paste the component HTML into the `<template>` tag section from [codyhouse component library](https://codyhouse.co/ds/components)
   6. Copy and paste the component JS in the `<script>` tag section's `mounted()` function from [codyhouse component library](https://codyhouse.co/ds/components)
   7. ...modify components as needed to make them dynamic

    By default, `components/confetti-btn.vue` has been added for you as an example component. See comments in that file for more info.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this Nuxt3 project.

    .
    ├── node_modules/
    ├── assets/
        ├── css/codyhouse/main/
            ├── components/
                ├── _1_confetti-button.scss
            ├── custom-style/
            ├── _base.scss
            ├── _components.scss
            ├── _custom-style.scss
            ├── main.scss
            ├── style.scss
    ├── components/
        ├── confetti-btn.vue
        .gitkeep 
    ├── layouts/
        ├── default.vue
    ├── pages/
        ├── index.vue
    ├── public/
        ├── js/codyhouse/
            ├── pe.js
            ├── util.js
    ├── .gitignore
    ├── nuxt.config.ts
    ├── app.vue
    ├── tsconfig.json
    ├── package.json
    ├── yarn.lock
    ├── LICENSE.md
    └── README.md

## Important locations

1.  **`assets/`**: The assets/ directory is used to add all the website assets that will be processed by the build tool (Webpack or Vite). This is where we put our codyhouse SCSS files for preprocessing. *Ensure that `assets/css/codyhouse/main/_base.scss` has the correct import path.*

2. **`components/`**: The components/ directory is where you put all your Vue components which can then be imported inside your pages or other components. This is where we put our codyhouse component HTML and JS into a [vue component format](https://codyhouse.co/blog/post/using-the-codyhouse-components-with-vue-jst). By default, an example confetti button component is included. 

3. **`layouts/`**: Page layouts are placed in the layouts/ directory and will be automatically loaded via asynchronous import when used. If you create a layouts/default.vue this will be used for all pages in your app. Other layouts are used by setting a layout property as part of your component's options.

4. **`pages/`**: The pages/ directory is optional, meaning that if you only use app.vue , vue-router won't be included, reducing your application's bundle size. Here we put our index page containing an example codyhouse confetti button.

5. **`public/`**: The public/ directory is directly served at server root and contains public files that have to keep their names (e.g. robots.txt) or likely won't change (e.g. favicon.ico). Here we place codyhouse global scripts such as `pe.js` for [progressive enhancement](https://codyhouse.co/ds/docs/components#progressive-enhancement) and a global [`util.js`](https://codyhouse.co/ds/docs/framework/js-utilities) used by various codyhouse components.   

6.  **`nuxt.config.ts`**: The nuxt configuration file. For codyhouse, we added SCSS compiler options.

7.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project. For codyhouse, we added `codyhouse`, `postcss`, `autoprefixer` and `sass` required for codyhouse.

## 🎓 Learning Nuxt3

Looking for more guidance? Full documentation for Nuxt lives [on the website](https://v3.nuxtjs.org/getting-started/introduction). 

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justerhan/nuxt3-starter-codyhouse)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/justerhan/nuxt3-starter-codyhouse)
