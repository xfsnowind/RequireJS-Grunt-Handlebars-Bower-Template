RequireJS-Grunt-Handlebars-Bower-Template
=========================================

This is a practical project after we almost finish a new front end project. I just want to reuse and learn all the techniques and tools applied in it.

Techniques used can be here:

* RequireJs
* Handlebars - Templating
* npm - install external libraries
* bower - reference to external libraries
* grunt - run the tasks in order
  * merge requirejs, handlebars, bower, test, copy, jslint/jshint, clean, watch, connect to server, 
* Promise pattern of javascript (async) (unimplemented)
* unit test of js, mocha/chai (unimplemented)
* scss, merge css to one file


Installation
------------

If you want to build the testBowerGruntHandlebarsRequireJs project yourself, you need
[npm](https://npmjs.org) and [Grunt](http://gruntjs.com).  Assuming npm is
installed, first install Grunt and dependencies like this:

```
> npm install grunt-cli -g
> npm install
```

Then you can build the package like this:

```
> grunt
```

The package will be in the `www` directory which you can copy to your app.
