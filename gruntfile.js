var fs = require('fs');
var glob = require('glob');

module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-webpack');
  global['styleType'] = grunt.cli.tasks[0] === 'build-inline'
    ? 'inline' : 'file';

  grunt.initConfig({
    webpack: {
      options: require('./config/webpack.js'),
      build: {
      }
    }
  });

  function clean() {
    grunt.log.writeln('Cleaning previous build...');
    var files = glob.sync('./output/**/*');
    var n;
    for (n = 0; n < files.length; ++n) {
      fs.unlinkSync(files[n]);
    }
  }

  grunt.registerTask('build-extract', 'Build CSS test', function() {
    grunt.log.writeln('Building with CSS in a separate file.'.yellow);
    clean();
    grunt.task.run('webpack:build');
  });
  grunt.registerTask('build-inline', 'Build CSS test', function() {
    grunt.log.writeln('Building with CSS in the JS (standard).'.yellow);
    clean();
    grunt.task.run('webpack:build');
  });
  grunt.registerTask('default', ['build']);
};
