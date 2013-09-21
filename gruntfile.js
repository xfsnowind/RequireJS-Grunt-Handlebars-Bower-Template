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
                src: "src/**", 
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
        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //     },
        //     build: {
        //         src: 'src/*.js',
        //         dest: 'dist/<%= pkg.name %>.min.js'
        //     }
        // },
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
                files: ["src/*.js", "templates/*.hbs", "css/*.css"],
                tasks: ["test", "install"],
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
            }
        },
        clean: {
            build: ['lib', "www/css", "www/src", "www/templates", "www/lib"],
            bower: ['bower_components']
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('install', ['bower']);
    grunt.registerTask('default', ['bower', 'jshint', 'copy']);
};