/* RequireJS Ember.Handlebars Plugin v0.1.1
 * Copyright 2012, Tim Branyen (@tbranyen)
 * Copyright 2013, Sergii Danilov (@Pencroff)
 * hbs.js may be freely distributed under the MIT license.
 */
define(["ember", "text"], function (Ember) {

    var hbs = {
        version: "0.1.1",
        // Invoked by the AMD builder, passed the path to resolve, the require
        // function, done callback, and the configuration options.
        load: function (name, req, load, config) {
            "use strict";
            var tpl;
            // Dojo provides access to the config object through the req function.
            if (!config) {
                config = require.rawConfig;
            }
            tpl = config.hbs;
            if (!tpl) {
                tpl = {}
            }
            if (!tpl.prefixName) {
                tpl.prefixName = '';
            }
            if (!tpl.templateExtension) {
                tpl.templateExtension = 'hbs';
            }
            // Get the text for the template and compile it for Ember.
            req(["text!" + tpl.prefixName + name + "." + tpl.templateExtension], function (contents) {
                // Use global for now (maybe this?)
                return load(Ember.Handlebars.compile(contents));
            });
        }
    };
    return hbs;
});