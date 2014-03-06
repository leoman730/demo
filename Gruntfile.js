/* jshint node: true */
/* Reference : http://travisjeffery.com/b/2013/09/testing-javascript-projects-with-grunt-jasmine-jshint/ */
var module = module || {};

module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')
      , jasmine: {
        src: "*.js"
      , options: {
          specs: "test/*.js"
        , version: '1.3.1'
        , display: 'full'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.registerTask('test', ['jasmine'])
  grunt.registerTask('default', ['test'])
};