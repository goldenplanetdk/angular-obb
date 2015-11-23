export default (ngModule) => {

	ngModule.factory('cssUtil', function() {
		return {

			/**
			 * Split length type value
			 * @param length
			 * @returns {{number: (number|undefined), unit: (string|undefined)}}
			 */
			splitLengthUnits: function(length) {
				if (!length || !length.match) return {number, unit};

				var match = length.match(/^([0-9]+\.?[0-9]*)?\s*(%|[a-zA-Z]*)/),
					number = match && Number(match[1]) || undefined,
					unit = match && match[2] || undefined;

				return {number, unit};
			},
		};
	});
}
