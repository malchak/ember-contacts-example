export default DS.Model.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  email: DS.attr('string'),
  favorite: DS.attr('boolean')
});
