export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('contact');
	},
	afterModel: function(contacts) {
		if ( contacts.get('length') === 1 ) {
			this.transitionTo('contacts.show', contacts.get('firstObject'));
		}
	} 
});
