#Treasure 1.1

![https://camo.githubusercontent.com/06c5d22b7908c0c4928071ac314e75c3da29d750/687474703a2f2f62656e7363687761727a2e6769746875622e696f2f626f7765722d6261646765732f62616467654032782e706e67](https://camo.githubusercontent.com/06c5d22b7908c0c4928071ac314e75c3da29d750/687474703a2f2f62656e7363687761727a2e6769746875622e696f2f626f7765722d6261646765732f62616467654032782e706e67)
*A pack of useful LESS/Stylus mixins/classes/functions and JS / jQuery functions found on the internet, or made by myself. The ones found on the internet, or used as a base, are properly credited and linked on the sourcefiles.*

=========

> The current [documentation](https://github.com/ghaschel/treasure/tree/master/demo) covers only the LESS part.

*When importing the treasure.less file into your project, use it as reference*
```less
@import (reference) "treasure.less";
```
=========
### Bower Package
*To include treasure on your bower/grunt project*
```shell
bower install treasure
```
>The pie.htc file must be copied to the output folder via `Guntfile.js` or manually
####Via Gruntfile.js
```shell
npm install grunt-contrib-copy --save-dev
```
*And add the copy task to the output folder*
```shell
copy: {
    files: {
       cwd: './bower_components/treasure/dist/htc',
       src: '**/*',
       dest: './public/assets/htc', //on the same root folder as your output css folder
       expand: true
    }
}
```
