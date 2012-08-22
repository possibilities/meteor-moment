Package.describe({
  summary: "Moment.js packaged for Meteor"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server']
  api.add_files('lib/moment/moment.js', where);
});
