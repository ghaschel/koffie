```shell
                         _                                     
                        | |                                    
                        | |_ _ __ ___  __ _ ___ _   _ _ __ ___ 
                        | __| '__/ _ \/ _` / __| | | | '__/ _ \
                        | |_| | |  __/ (_| \__ \ |_| | | |  __/
                         \__|_|  \___|\__,_|___/\__,_|_|  \___|
                                                               
```


#Treasure 1.0


> A pack of useful LESS mixins and JS/jQuery functions found on the internet, or made by myself. The ones found on the internet, or used as a base, are properly credited and linked on the sourcefiles.

=========

> The current documentation covers only the LESS part.

*When importing the treasure.less file into your project, use it as reference*
```less
@import (reference) "treasure.less";
```


### Bower Package
*To include treasure on your bower/grunt project*
```shell
bower install treasure
```
>The pie htc file must be copied to the output folder via `gruntfile.js` or manually
####Via gruntfile.js
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
