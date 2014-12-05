Meteor.startup(function () {
  Router.map(function() {
    this.route('/', {
      path: '/',
      template: getTemplate('splashPage')
    });
  });

  Router.map(function() {
    this.route('talent', {
      path: '/talent',
      waitOn: function() {
        return Meteor.subscribe('services')
      },
      template: getTemplate('servicesList')
    });
  });

  Router.map(function() {
    this.route('practicesList', {
      path: '/talent/:_id',
      waitOn: function() {
        return [Meteor.subscribe('services'), Meteor.subscribe('practices', this.params._id)]
      },
      data: function() { return Services.findOne({_id: this.params._id}); }
      // template: getTemplate('practicesList')
    });
  });

  Router.map(function() {
    this.route('requestSubmit', {
      path: '/talent/:serviceId/:practiceId/request',
      waitOn: function() {
        return [Meteor.subscribe('services', this.params.serviceId), Meteor.subscribe('practices', this.params.practiceId)]
      },
      data: function() { 
        return { service: Services.findOne({_id: this.params.serviceId}), practice: Practices.findOne({_id: this.params.practiceId})}
      }
    });
  });
});

var departments =[
  {name: "Legal", useCase: ["Incorporation Docs", "Employment Agreement", "Partnership Agreement"], practices: ["Starting Up", "Venture Capital", "Terms of Service"]}
]


secondaryNav.push('talentLink');
primaryNav.push('resourcesLink');
