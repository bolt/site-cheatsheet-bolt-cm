module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        loadPath: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/cheatsheet.css': 'scss/cheatsheet.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },

    concat: {
        js: {
            options: {
                separator: '\n\n// ----------------------------------------- \n\n',
                sourceMap: true,
                sourceMapStyle: 'link'
            },
            nonull: true,
            src: [
                'js/src/jquery-2.1.1.min.js',
                'js/src/packery.pkgd.min.js',
                'js/src/jquery.animate-colors-min.js',
                'bower_components/foundation/js/foundation/foundation.js',
                'bower_components/foundation/js/foundation/foundation.topbar.js',
                'js/src/cheatsheet.js'              
            ],
            dest: 'js/cheatsheet.js'
        }
    },

  });


  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['sass', 'concat:js', 'watch']);
}