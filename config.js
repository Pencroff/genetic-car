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
        underscore: {
            exports: "_"
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
        'hbs': 'lib/requirejs-plugins/hbs-0.4.0',
        'json2': 'lib/requirejs-plugins/hbs/json2',
        'i18nprecompile': 'lib/requirejs-plugins/hbs/i18nprecompile',
        'async': 'lib/requirejs-plugins/async-0.1.1'
    },
    /*hbs plugin options*/
    hbs: {
        disableI18n: true,
        templateExtension: "html"
    }
});