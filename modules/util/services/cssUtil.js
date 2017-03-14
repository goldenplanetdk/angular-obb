module.exports = (ngModule) => {

	ngModule.factory('cssUtil', function() {
		return {

			/**
			 * Split length type value
			 *
			 * @param {string} length
			 * @returns {Object}
			 */
			splitLengthUnits: function(length) {

				if (!length || !length.match) {
					return {};
				}

				const match = length.match(/^([0-9]+\.?[0-9]*)?\s*(%|[a-zA-Z]*)/);
				const number = match && Number(match[1]) || undefined;
				const unit = match && match[2] || undefined;

				return {number, unit};
			},
		};
	});
};
