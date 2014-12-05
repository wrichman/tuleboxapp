// server
Services = new Meteor.Collection('services');
Practices = new Meteor.Collection('practices');

// server
Meteor.publish('services', function() {
  return Services.find();
}); 

Meteor.publish('practices', function() {
  return Practices.find();
}); 