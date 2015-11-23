require('../util');

var ngModule = angular.module('obb.forms', ['obb.util']);

// Require module components from subdirectories
var requireContext = require.context('.', true, /^\.\/.*\/.*\.js$/);
requireContext.keys().map((path) => {
	requireContext(path)(ngModule);
});

