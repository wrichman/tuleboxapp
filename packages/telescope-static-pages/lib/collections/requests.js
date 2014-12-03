Requests = new Meteor.Collection('requests');

Requests.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return true;
  }
});