Package.describe({
  name: "utilities:react-form-containers",
  summary: "Form containers for React",
  version: "0.1.5",
  git: "https://github.com/meteor-utilities/react-form-containers.git"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.3-beta.11");
  
  api.use([
    'ecmascript',
    'check',
    'react-meteor-data@0.2.6-beta.16',
    'tmeasday:check-npm-versions@0.1.1',
    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.8.0'
  ]);

  api.mainModule("lib/export.js", ["client", "server"]);

});
