Meteor.startup(function () {
  Router.map(function() {
    this.route('talent', {
      path: '/talent',
      template: getTemplate('talentPage')
    });
  });

  Router.map(function() {
    this.route('talent/:id', {
      path: '/talent/:id',
      template: getTemplate('departmentPage')
    });
  });

  Router.map(function() {
    this.route('talent/:id/request', {
      path: '/talent/:id/request',
      template: getTemplate('requestSubmit')
    });
  });
});

var departments =[
  {name: "Legal", useCase: ["Incorporation Docs", "Employment Agreement", "Partnership Agreement"], practices: ["Starting Up", "Venture Capital", "Terms of Service"]}
]


// left side
primaryNav.push('talentLink');

// right side
// secondaryNav.push('talentLink');