const _ = require('lodash');

module.exports = (ngModule) => {

	ngModule.service('googleFonts', function() {

		const WebFont = require('webfontloader');

		WebFont.loaded = [];

		this.load = function(fontName) {

			// convert to array
			fontName = [].concat(fontName);

			// load only new fonts
			const fontNames = _.difference(fontName, WebFont.loaded);

			if (!fontNames.length) {
				return;
			}

			WebFont.load({
				google: {
					families: fontNames
				}
			});

			WebFont.loaded = WebFont.loaded.concat(fontNames);
		};
	});
};
