export default Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function(){
			this.set('isEditing', true);
		},
		done: function(){
			var contact = this.get('model');
			contact.save();
			this.set('isEditing', false);			
		},
		cancel: function(){
			this.get('model').rollback();
			this.set('isEditing', false);
		}
	}
});
