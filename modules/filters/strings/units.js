const _ = require('lodash');

module.exports = (ngModule) => {

	ngModule.filter('units', function() {
		return function(value) {

			if (!value || !_.isString(value)) {
				return;
			}

			const match = value.match(/[^0-9.]+/);

			return match && match[0];
		};
	});
};
