/**
 * Created with JetBrains WebStorm by Pencroff for genetic-car.
 * Date: 13.07.2013
 * Time: 19:21
 */
/*global define:true*/
define([
    'views/ApplicationView',
    'views/MainMenuView',
    'controllers/ApplicationController',
    'app/router',
    // extra lib
    'bootstrap'
], function (ApplicationView, MainMenuView, ApplicationController, Router) {
    'use strict';
    /*Module Pattern*/
    var App = {
        ApplicationView: ApplicationView,
        MainMenuView: MainMenuView,
        ApplicationController: ApplicationController,
        Router: Router
    };

    return App;
});