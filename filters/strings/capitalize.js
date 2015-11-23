export default (ngModule) => {

	ngModule.filter('capitalize', function() {
		return function(string) {

			if (!string || !_.isString(string)) {
				return string;
			}

			return string.charAt(0).toUpperCase() + string.slice(1);
		};
	});
}
