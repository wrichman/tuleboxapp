Template.practicesList.helpers({
  practices: function(serviceId) {
    return Practices.find({serviceId: serviceId});
  }
});