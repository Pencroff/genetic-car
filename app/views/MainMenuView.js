/**
 * Created with JetBrains WebStorm by Pencroff for genetic-car.
 * Date: 14.07.2013
 * Time: 7:49
 */
define([
    'ember',
    'hbs!templates/mainMenuTmpl'
], function(Ember, mainMenuTmpl) {
    var MainMenuView = Ember.View.extend({
        defaultTemplate: mainMenuTmpl
    });
    return MainMenuView;
});