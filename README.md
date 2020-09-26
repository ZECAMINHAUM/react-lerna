### React - Lerna

This is just a simple project that i create for play with monorepos using lerna.
I'll leave the links bellow if you're interested about it.

#### Links
 - [Monorepos](https://blog.npmjs.org/post/186494959890/monorepos-and-npm)
 - [Lerna](https://lerna.js.org/)
 - [Storybook](https://storybook.js.org/)

#### Resume

Well, actually I didn't that much, I just split a components in in small modules and I joined them in one main module.

#### Usage

If you're interested of check out the components, run these commands.

fisrt of all you need to link the local packages so run:
```console
$ npx lerna bootstrap
```
Or if you already have Lerna installed in your computer run: 
```console
$ lerna bootstrap
```

Then you need to install these packages in your main project by running: 
```console
$ npm i
or
$ yarn
```

And finnelly run the server with:

```console
$ yarn storybook
or 
$ npm run storybook
```

