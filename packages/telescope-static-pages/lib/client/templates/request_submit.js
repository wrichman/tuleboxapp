Template.requestSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var request = {
      name: $(e.target).find('[name=name]').val(),
      phone: $(e.target).find('[name=phone]').val(),
      email: $(e.target).find('[name=email]').val(),
      problem: $(e.target).find('[name=problem]').val()
    };
    
    request._id = Requests.insert(request);
    Router.go('talent', request);
  }
});