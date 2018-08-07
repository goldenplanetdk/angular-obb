module.exports = (ngModule) => {

	ngModule.directive('dropup', function() {
		return {
			restrict: 'A',
			link: function(scope, element) {

				element.find('[uib-dropdown], .dropdown').addBack().addClass('dropup');
			}
		};
	});
};
