export default Ember.Route.extend({
	model: function(){
		return {}
	},
	actions: {
		save: function(){
			var attrs = this.get('controller').getProperties('first', 'last', 'email');
			var contact = this.get('store').createRecord('contact', attrs);
			
			$.post('api/v1/contacts', {contact: attrs}, function(results){
				this.transitionTo('contacts.show', results);
			}).fail(function(jqxhr, textStatus, error){
				if (jqxhr.status === 422) {
					var errs = JSON.parse(jqxhr.responseText);
					contact.set('errors', errs.errors);
				}
			});
		},
		cancel: function(){
			this.transitionTo('contacts');
		}
	}
});