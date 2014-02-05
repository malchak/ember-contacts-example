export default Ember.Component.extend({
	tagName: 'img',
	attributeBindings: ['src', 'alt'],
	src: function(){
		var email = this.get('email'), computedMD5;
		if (Ember.isEmpty(email)){
			computedMD5 = '00000000000000000000000000000000';
		}
		else{
			computedMD5 = md5(email);
		}
		return 'http://www.gravatar.com/avatar/%@.jpg?s=200'.fmt(computedMD5);
	}.property('email')
});
