define([
	"ember",
	"text!templates/applicationTmpl.html"
], function(Ember, applicationTmpl) {
	var ApplicationView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(applicationTmpl)
	});
	return ApplicationView;
});