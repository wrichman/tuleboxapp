Package.describe({
  summary: "Telescope static pages package",
  version: '0.1.1',
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
    'lib/client/talent.js'
  ], ['client']);

});