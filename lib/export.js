import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'react': '^0.14.6'
});

import EditDocContainer from "./EditDocContainer.jsx";
import NewDocContainer from "./NewDocContainer.jsx";

export default {EditDocContainer, NewDocContainer};