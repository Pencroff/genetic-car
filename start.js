/**
 * Created with JetBrains WebStorm by Pencroff for genetic-car.
 * Date: 12.07.2013
 * Time: 21:51
 */
/*global require:true, requirejs:true*/
(function (root) {
    'use strict';
    require(["config"], function (config) {
        requirejs.config(config);
        require(["App", "ember"], function (App, Ember) {
            var app_name = config.app_name || "App";
            App = Ember.Application.create(App);
            root[app_name] = App;
        });
    });
}(this));