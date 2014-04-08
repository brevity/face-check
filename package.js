Package.describe({
  summary: "Provides a template for checking scraper results from Landes-indexing-queues"
});

Package.on_use(function (api, where) {
  api.use(['jquery', 'templating'], 'client');
  api.imply('jquery', 'client');
  api.add_files(['idx.js', 'idx.css', 'idx_results.html', 'idx_results.js', 'idx_results.css'], 'client');
});

Package.on_test(function (api) {
  api.use('idx');

  api.add_files('idx_tests.js', ['client', 'server']);
});
