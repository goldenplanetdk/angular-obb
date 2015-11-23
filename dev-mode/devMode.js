export default (ngModule) => {

	ngModule.factory('devMode', function($rootElement) {

		return _.includes(['1', 'true'], $rootElement.attr('devmode'));
	});
}
