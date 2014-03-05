/* jshint node: true */

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
  //grunt.registerTask('default', ['test'])
};