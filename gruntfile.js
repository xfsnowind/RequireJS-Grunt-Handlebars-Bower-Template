module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },
        copy: {
            src: {
                src: "src/*.js",
                dest: "www/"
            },
            lib: {
                src: "lib/**",
                dest: "www/"
            },
            templates: {
                src: "templates/*.hbs",
                dest: "www/"
            },
            css: {
                src: "css/*.css",
                dest: "www/"
            }
        },
        requirejs: {
            main: {
                options: {
                    mainConfigFile: "src/index.js",
                    appDir: 'src',
                    dir: "www/src",
                    findNestedDependencies: true,
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    optimize: 'none',
                    useStrict: true,
                    paths: {
                        templates: "../templates",
                        mousewheel: "empty",
                        fixedHeaderTable: "empty",
                        jquery: "empty",
                        migrate: "empty",
                        handlebars: "empty"
                    },
                    shim: {
                        migrate: {
                            deps: ['jquery'],
                            exports: "jquerymigrate"
                        },
                        fixedHeaderTable: {
                            deps: ['jquery', 'mousewheel'],
                            exports: "fixedheadertable"
                        }
                    }
                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'src/*.js'],
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            src: {
                files: "src/*.js",
                tasks: ["copy:src", "test"],
                options: {
                    atBegin: true
                }
            },
            html: {
                files: "www/index.html"
            },
            templates: {
                files: "templates/*.hbs",
                tasks: "copy:templates"
            },
            css: {
                files: "css/*.css",
                tasks: "copy:css"
            },
            lib: {
                files: "lib/**",
                tasks: "copy:lib"
            },
            bower: {
                files: "bower.json",
                tasks: "install"
            }
        },
        clean: {
            build: ['lib', "www/css", "www/src", "www/templates", "www/lib"],
            bower: ['bower_components']
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('install', ['bower']);
    grunt.registerTask('default', ['bower', 'jshint', 'requirejs', 'copy']);
};