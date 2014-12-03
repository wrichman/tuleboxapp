Package.describe({
  summary: "Telescope static pages package",
  version: '0.1.2',
  name: "telescope-static-pages"
});

Package.onUse(function (api) {

  api.use([
    'templating'
  ], ['client']);

  api.use([
    'telescope-lib',
    'telescope-base',
    'iron:router'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates/talent_page.html',
    'lib/client/templates/talent_link.html',
    'lib/client/templates/department_page.html',
    'lib/client/templates/request_submit.html',
    'lib/client/templates/request_submit.js',
    'lib/client/css/bootstrap.css',
    'lib/client/css/ui-kit-projects.css',
    'lib/client/css/ui-kit-contacts.css',
    'lib/client/talent.js',
    'lib/collections/requests.js',
    'lib/server/publications.js',
    'lib/server/requests.js'
  ], ['client']);

  api.addFiles([
    'lib/collections/requests.js',
    'lib/server/publications.js',
    'lib/server/requests.js'
  ], ['server']);

});


