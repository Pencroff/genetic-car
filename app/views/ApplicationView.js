define([
	'ember',
	'hbs!templates/applicationTmpl'
], function(Ember, applicationTmpl) {
	var ApplicationView = Ember.View.extend({
		defaultTemplate: applicationTmpl
	});
	return ApplicationView;
});