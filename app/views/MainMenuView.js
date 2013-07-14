/**
 * Created with JetBrains WebStorm by Pencroff for genetic-car.
 * Date: 14.07.2013
 * Time: 7:49
 */
define([
    "ember",
    "text!templates/mainMenuTmpl.html"
], function(Ember, mainMenuTmpl) {
    var MainMenuView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(mainMenuTmpl)
    });
    return MainMenuView;
});