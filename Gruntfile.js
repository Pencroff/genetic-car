/**
 * Created with JetBrains WebStorm by Pencroff for genetic-car.
 * Date: 12.07.2013
 * Time: 11:34
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
//        concat: {
//            options: {
//                separator: '\n'
//            },
//            dist: {
//                src: [
//                    '_extra-libs/box2d/collision/*.js',
//                    '_extra-libs/box2d/collision/**/*.js',
//                    '_extra-libs/box2d/common/*.js',
//                    '_extra-libs/box2d/dynamics/*.js',
//                    '_extra-libs/box2d/dynamics/**/*.js'
//                ],
//                dest: 'lib/webBox2d.js'
//            }
//        }
        'closure-compiler': {
            Box2dWeb: {
                closurePath: '_extra',
                js: 'lib/Box2dWeb-2.1.a.3.js',
                jsOutputFile: 'lib/Box2dWeb-2.1.a.3.min.js',
                maxBuffer: 500, // in kb; Default: 200kb
                options: {
                    //WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS
                    compilation_level: 'SIMPLE_OPTIMIZATIONS',
                    // ECMASCRIPT3, ECMASCRIPT5, ECMASCRIPT5_STRICT
                    language_in: 'ECMASCRIPT5'
                }
            }
//            ember: {
//                closurePath: '_extra',
//                js: 'lib/ember-1.0.0-rc.6.js',
//                jsOutputFile: 'lib/ember-1.0.0-rc.6.min.js',
//                maxBuffer: 500, // in kb; Default: 200kb
//                options: {
//                    //WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS
//                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
//                    // ECMASCRIPT3, ECMASCRIPT5, ECMASCRIPT5_STRICT
//                    language_in: 'ECMASCRIPT5'
//                }
//            },
//            handlebars: {
//                closurePath: '_extra',
//                js: 'lib/handlebars-1.0.0-rc.4.js',
//                jsOutputFile: 'lib/handlebars-1.0.0-rc.4.min.js',
//                maxBuffer: 500, // in kb; Default: 200kb
//                options: {
//                    //WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS
//                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
//                    // ECMASCRIPT3, ECMASCRIPT5, ECMASCRIPT5_STRICT
//                    language_in: 'ECMASCRIPT5'
//                }
//            },
//            jquery: {
//                closurePath: '_extra',
//                js: 'lib/jquery-2.0.3.js',
//                jsOutputFile: 'lib/jquery-2.0.3.min.js',
//                maxBuffer: 500, // in kb; Default: 200kb
//                options: {
//                    //WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS
//                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
//                    // ECMASCRIPT3, ECMASCRIPT5, ECMASCRIPT5_STRICT
//                    language_in: 'ECMASCRIPT5'
//                }
//            }
        },
        'less': {
            development:{
                options: {
                    paths: ['_extra/less'],
                    yuicompress: true
                },
                files: {
                    'content/css/g-car.css': '_extra/less/g-car.less'
                }
            }
        },
        'watch': {
            less: {
                files: '_extra/less/*',
                tasks: 'lessTask'
            }
        }
    });

    // Load the plugin that provides the "concat" task.
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('lessTask', ['less']);
};