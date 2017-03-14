module.exports = (ngModule) => {

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
				const targetElTopPosition = containerEl[0].scrollTop + targetEl.position().top;
				const containerHalfHeight = containerEl.height() / 2;
				const lastPageMiddlePosition = containerEl.prop('scrollHeight') - containerHalfHeight;
				const offsetTop = (targetElTopPosition < lastPageMiddlePosition) ? containerHalfHeight : 0;

				containerEl[0].scrollTop = targetElTopPosition - offsetTop;
			},
		};
	});
};
