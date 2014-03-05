/* jshint node: true */
/* Reference : http://travisjeffery.com/b/2013/09/testing-javascript-projects-with-grunt-jasmine-jshint/ */

module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')
      , jasmine: {
        src: "*.js"
      , options: {
          specs: "spec/*.js"
        , version: '2.0.0'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.registerTask('test', ['jasmine'])
  grunt.registerTask('default', ['test'])
};