export default Ember.Route.extend({
	model: function(){
		return {}
	},
	actions: {
		save: function(){
			var attrs = this.get('controller').getProperties('first', 'last', 'email');
			var contact = this.get('store').createRecord('contact', attrs);
			contact.save();
			this.transitionTo('contacts.show', contact);
		},
		cancel: function(){
			this.transitionTo('contacts');
		}
	}
});