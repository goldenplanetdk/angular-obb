module.exports = (ngModule) => {

	ngModule.directive('blurOnEnterKey', function(cssUtil) {
		return {
			restrict: 'A',
			link: function(scope, element) {

				element.on('keydown keypress', (event) => {

					if (event.which === 13) {

						element.blur();
					}
				});
			}
		};
	});
};
