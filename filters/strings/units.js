export default (ngModule) => {

	ngModule.filter('units', function() {
		return function(value) {

			if (!value || !_.isString(value)) {
				return;
			}

			var match = value.match(/[^0-9.]+/);
			return match && match[0];
		};
	});
}
