export default (ngModule) => {

	ngModule.factory('scrollUtil', function() {
		return {

			/**
			 * Scroll to element in a scrollable container and make it appear centered
			 * @param {jQuery} containerEl
			 * @param {jQuery} targetEl
			 */
			scrollToElementInContainer: function(containerEl, targetEl) {

				if (!containerEl.length || !targetEl.length) {
					return
				}

				// calculate top position for active element
				var targetElTopPosition = containerEl[0].scrollTop + targetEl.position().top,
					containerHalfHeight = containerEl.height() / 2,
					lastPageMiddlePosition = containerEl.prop('scrollHeight') - containerHalfHeight,
					offsetTop = (targetElTopPosition < lastPageMiddlePosition) ? containerHalfHeight : 0;

				containerEl[0].scrollTop = targetElTopPosition - offsetTop;
			},
		};
	});
}
