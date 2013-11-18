/*global $, define*/
define(function (require) {
    'use strict';
    var backbone = require("backbone"),
        jque = require("jquery"),
        lodash = require("lodash");

    function test () {
        lodash.times(4, function (n) {console.log(n);});
        console.log(backbone);
        console.log(jque);
    }

    return {
        test: test
    };
});