module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: "www/lib/"
                }
            }
        },

        sass: {
            main: {
                options: {
                    noCache: true
                },
                files: {
                    'www/css/main.css': 'css/main.scss'
                }
            }
        },

        handlebars_requirejs: {
            main: {
                options: {
                  makePartials: true
                },
                files: {
                  // folder : files
                  // this task will find the hbs files automatically and convert them into modules and dumped into the folder
                  'www/': ['templates/*.hbs']
                }
            }
        },

        requirejs: {
            main: {
                options: {
                    mainConfigFile: "src/index.js",
                    appDir: 'src',
                    dir: "www/src",
                    findNestedDependencies: true,
                    preserveLicenseComments: false,
                    optimize: 'none',
                    useStrict: true
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

        // uglify: {
        //     compile: {
        //         // options: {
        //         //     sourceMap: "www/src/sourceMap.js"
        //         // },
        //         files: {
        //             "www/src/main.js": "src/main.js",
        //             "www/src/common.js": "src/common.js"
        //         }
        //     }
        // },

        copy: {
            src: {
                src: "src/*.js",
                dest: "www/"
            }
            // templates: {
            //     cwd: "buildTemp",
            //     expand: true,
            //     src: "templates/*.js",
            //     dest: "www/"
            // }
        },

        watch: {
            options: {
                livereload: true
            },
            gruntfiles: {
                files: "gruntfile.js",
                task: ['clean', 'default']
            },
            src: {
                files: "src/*.js",
                tasks: ['check'/*, 'uglify'*/, 'copy'],
                options: {
                    atBegin: true
                }
            },
            templates: {
                files: "templates/*.hbs",
                tasks: "handlebars_requirejs"
            },
            css: {
                files: "css/*.scss",
                tasks: "sass"
            },
            bower: {
                files: "bower.json",
                tasks: "bower"
            }
        },

        clean: {
            build: ['lib', "buildTemp", "www/css", "www/src", "www/templates", "www/lib"],
            bower: 'bower_components'
        },
        
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: "www"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks("grunt-handlebars-requirejs");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Default task(s).
    grunt.registerTask('check', ['jshint']);
    grunt.registerTask('build', ['bower', 'sass', 'handlebars_requirejs'/*, 'uglify'*/, 'copy']);
    grunt.registerTask('install', ['requirejs']);
    grunt.registerTask('default', ['check', 'build', 'install', 'connect', 'watch']);
};
