module.exports = (ngModule) => {

	/**
	 * Bootstrap grid section's width in ratio that is converted to bs grid columns count
	 * @param {number} [gridWidthRatio] Width of the grid cell in form of a ratio, e.g. 1/2, 1/4, 0.3
	 * @param {integer} [gridCols] Total number of columns in the grid
	 * @returns {integer} Number of columns
	 */
	ngModule.factory('bootstrapGrid', function() {

		const bsGrid = {
			gridCols: 24,
			colWidth(gridWidthRatio = 1) {
				return Math.floor(bsGrid.gridCols * gridWidthRatio);
			},
			colXs(ratio = 1) { return `col-xs-${bsGrid.colWidth(ratio)}` },
			colSm(ratio = 1) { return `col-sm-${bsGrid.colWidth(ratio)}` },
			colMd(ratio = 1) { return `col-md-${bsGrid.colWidth(ratio)}` },
			colLg(ratio = 1) { return `col-lg-${bsGrid.colWidth(ratio)}` },
		};

		return bsGrid;
	});
};
