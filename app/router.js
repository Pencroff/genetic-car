/*global define:true*/
define(['ember'], function (Ember) {
    'use strict';
    var Router = Ember.Router.extend();
    Router.map(function () {
        this.route("index", {
            path: "/"
        });
        this.route("simulation", {
            path: "simulation"
        });
        this.route("visualization", {
            path: "visualization"
        });
        this.route("evolution", {
            path: "evolution"
        });
    });
    return Router;
});