Package.describe({
  summary: "Moment JS packaged for Meteor"
});

Package.on_use(function (api) {
  api.add_files('moment.js', 'client');
});
