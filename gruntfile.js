module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-webpack');

  grunt.initConfig({
    webpack: {
      options: require('./config/webpack.js'),
      build: {
      }
    }
  });

  grunt.registerTask('build', 'Build CSS test', function() {
    grunt.task.run('webpack:build');
  });
  grunt.registerTask('default', ['build']);
};
