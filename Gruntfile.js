module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'public/sass',
          cssDir: 'public/css',
          environment: 'production'
        }
      },
      dev: {
        options: {
          sassDir: 'public/sass',
          cssDir: 'public/css'
        }
      }
    },
    watch: {
      scripts: {
          files: ['public/**/*.scss'],
          tasks: ['compass'],
          options: {
            spawn: false,
          },
       },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['watch']);
}
