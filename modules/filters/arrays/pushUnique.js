const _ = require('lodash');

module.exports = (ngModule) => {

	ngModule.filter('pushUnique', function() {
		return function(array, value) {

			if (!_.isArray(array)) {
				return array;
			}

			if (!_.includes(array, value)) {
				array.push(value);
			}

			return array;
		};
	});
};
