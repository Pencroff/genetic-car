/**
 * Created with JetBrains WebStorm by Pencroff for genetic-car.
 * Date: 13.07.2013
 * Time: 19:19
 */

define({
    app_name: "GCar",
    shim: {
        'ember': {
            deps: ['handlebars', 'jquery'],
            exports: 'Ember'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        handlebars : {
            exports: 'Handlebars'
        },
        underscore: {
            exports: "_"
        },
        hbs: {
            deps: ['ember']
        }
    },
    paths: {
        'App': 'app/application',
        'models': 'app/models',
        'views': 'app/views',
        'controllers': 'app/controllers',
        'templates': 'app/templates',
        'routes': 'app/routes',
        // lib
        'jquery': 'lib/jquery-2.0.3',
        'handlebars': 'lib/handlebars-1.0.0-rc.4',
        'ember': 'lib/ember-1.0.0-rc.6',
        'underscore': 'lib/underscore-1.5.1',
        'bootstrap': 'lib/bootstrap-2.3.2',
        // requirejs-plugins
        'text': 'lib/requirejs-plugins/text-2.0.7',
        'hbs': 'lib/requirejs-plugins/hbs',
        'async': 'lib/requirejs-plugins/async-0.1.1'
    },
    /*hbs plugin options*/
    hbs: {
        //prefixName: '', // if it needs
        templateExtension: "html"
    }
});