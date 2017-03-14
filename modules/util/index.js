const ngModule = angular.module('obb.util', []);

// Require module components from subdirectories
const requireContext = require.context('.', true, /^\.\/.*\/.*\.js$/);
requireContext.keys().map(path => requireContext(path)(ngModule));
