/**
 * Created with JetBrains WebStorm by Pencroff for genetic-car.
 * Date: 12.07.2013
 * Time: 21:51
 */
/*global require:true*/
(function(root){
    require(["config"], function(config){
        requirejs.config(config);
        require(["App", "ember"], function(App, Ember){
            var app_name = config.app_name || "App";
            root[app_name] = App = Ember.Application.create(App);
        });
    });
})(this);

//require.config({
//    // The shim config allows us to configure dependencies for
//    // scripts that do not call define() to register a module
//    //urlArgs: 'cb=' + Math.random(),
//    //urlArgs: 'ver=' + 3,
//    shim: {
//        bootstrapjs: {
//            deps: [
//                'jquery'
//            ]
//        }
//    },
//    paths: {
//        async: '/js/async',
//        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min',
//        bootstrapjs : '/js/bootstrap.min'
//    }
//});
//
//require([
//    'gmaps',
//    'history',
//    'jquery',
//    'bootstrapjs'
//], function (gmaps, history) {
//    "use strict";
//    gmaps.initialize();
//    gmaps.makeCurrentPositionMarker();
//    history.initialize(gmaps);
//});