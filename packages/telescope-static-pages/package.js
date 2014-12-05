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
    'lib/client/templates/splash_page.html',
    'lib/client/templates/services_list.html',
    'lib/client/templates/services_list.js',
    'lib/client/templates/practices_list.html',
    'lib/client/templates/practices_list.js',
    'lib/client/templates/talent_link.html',
    'lib/client/templates/resources_link.html',
    'lib/client/templates/request_submit.html',
    'lib/client/templates/request_submit.js',
    'lib/client/css/bootstrap.css',
    'lib/client/css/ui-kit-blog.css',
    'lib/client/css/ui-kit-contacts.css',
    'lib/client/css/ui-kit-content.css',
    'lib/client/css/ui-kit-crew.css',
    'lib/client/css/ui-kit-footer.css',
    'lib/client/css/ui-kit-header.css',
    'lib/client/css/ui-kit-price.css',
    'lib/client/css/ui-kit-projects.css',
    'lib/client/templates/jquery-1.10.2.min.js',
    'lib/client/templates/bootstrap.min.js',
    'lib/client/templates/page-transitions.js',
    'lib/client/templates/flat-kit.js',
    'lib/client/talent.js',
    'lib/collections/requests.js',
    'lib/collections/services.js',
    'lib/collections/practices.js'
  ], ['client']);

  api.addFiles([
    'lib/server/publications.js',
    'lib/server/fixtures.js'
  ], ['server']);

});


