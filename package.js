Package.describe({
  name: "utilities:react-form-containers",
  summary: "Form containers for React",
  version: "0.1.4",
  git: "https://github.com/meteor-utilities/react-form-containers.git"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.3-beta.11");
  
  api.use([
    'react@0.14.3_1',
    'modules',
    'ecmascript',
    'jsx@0.2.4',
    'check',
    // 'utilities:smart-methods@0.1.0',
    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.8.0'
  ]);

  api.mainModule("lib/export.js", ["client", "server"]);

});
