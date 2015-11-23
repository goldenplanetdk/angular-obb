var ngModule = angular.module('obb.fonts', []);

// Require module components from subdirectories
var requireContext = require.context('.', true, /^\.\/.*\/.*\.js$/);
requireContext.keys().map((path) => {
	requireContext(path)(ngModule);
});

