export default (ngModule) => {

	ngModule.directive('incrementDecrement', function(cssUtil) {
		return {
			restrict: 'A',
			link: function(scope, element) {

				element.on('keydown wheel', function(event) {

					var {number = 1, unit = 'px'} = cssUtil.splitLengthUnits(event.target.value),
						delta,
						increase = true;

					if (event.type == 'wheel') {
						if (event.target != document.activeElement) return;
						increase = event.originalEvent.wheelDelta >= 0;
					} else {
						switch (event.keyCode) {
							case 38: // Up
								break;
							case 40: // Down
								increase = false;
								break;
							default:
								return;
						}
					}

					delta = increase ? 1 : -1;
					if (event.shiftKey) delta = increase ? 10 : -10;
					if (event.altKey) delta = increase ? 0.1 : -0.1;

					number = _.round(Math.max(1, _.add(number, delta)), 2);

					var fontSize = `${number}${unit || ''}`;
					$(event.target).val(fontSize).change();
					event.preventDefault();
					event.stopPropagation();
				});
			}
		};
	});
}
