var ngModule = angular.module('obb', []);

// Require modules from subdirectories
var requireContext = require.context('.', true, /^\.\/.*\/(?!index).*\.js$/);
requireContext.keys().map((path) => {
	requireContext(path)(ngModule);
});
