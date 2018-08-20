Examples of using Font Awesome in Vue.js applications

This repository contains a series of example applications showing how to use Font Awesome icons in a Vue.js application.  

For a detailed tutorial/article discussing these examples, see: 

Each of the example applications were created by running:

```
$ vue init webpack-simple application-name
```

Hence, inside each subdirctory is a Node.js-style application with a `package.json`.  Therefore you interact with the subdirectories by running

```
$ npm install     # to install dependencies
$ npm run dev     # to run the app in development mode
$ npm run build   # to build a deployable application bundle
```

The directories are:

* `001-start`: a simple starting application -- Live: https://codesandbox.io/s/rwzyq379jn
* `002-brands`: shows display of icons from the "brands" collection -- Live: https://codesandbox.io/s/v8q75q6w57
* `003-css`: shows using the Font Awesome CSS file -- Live: https://codesandbox.io/s/nk6j724080
* `004-fontawesome-free`: Shows using the fontawesome-free npm package -- Live: https://codesandbox.io/s/mozr017zjp (does not work as expected)
* `005-brands-2`: in 002-brands the demonstration is incomplete, and in 005-brands-2 we fixed the problem -- Live: https://codesandbox.io/s/jn40584rv
* `006-effects`: special effects with Font Awesome icons -- Live: https://codesandbox.io/s/2wk112xk50
* `007-buttons-conditionals`: Using Font Awesome icons in Vue.js buttons, and using Vue.js conditionals -- Live: https://codesandbox.io/s/7w8jpjlvlx

