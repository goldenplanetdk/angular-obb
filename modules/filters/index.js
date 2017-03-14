const ngModule = angular.module('obb.filters', []);

// Require module components from subdirectories
const requireContext = require.context('.', true, /^\.\/.*\/.*\.js$/);
requireContext.keys().map(path => requireContext(path)(ngModule));
