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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}