Meteor.startup(function () {
  Router.map(function() {
    this.route('talent', {
      path: '/talent',
      template: getTemplate('talentPage')
    });
  });
});

// left side
primaryNav.push('talentLink');

// right side
// secondaryNav.push('talentLink');