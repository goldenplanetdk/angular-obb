const angular = require('angular');
const ngModule = angular.module('obb', []);

// Require services from subdirectories
// Exclude index files of modules from `obb.*` namespace
const requireContext = require.context('./modules', true, /^\.\/.*\/(?!index).*\.js$/);
requireContext.keys().map(path => requireContext(path)(ngModule));
