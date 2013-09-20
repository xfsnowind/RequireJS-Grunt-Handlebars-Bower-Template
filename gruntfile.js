module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
          //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
      }
    },
    concat: {
      options: {
        separator: ';\n',
      },
      dist: {
        src: ['src/*.js'],
        dest: 'dist/test.js',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'dist/<%= pkg.name %>.min.js'
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
    clean: {
      build: ['dist', 'lib'],
      bower: ['bower_components']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('install', ['bower']);
  grunt.registerTask('default', ['bower', 'jshint', 'concat', 'uglify']);

};