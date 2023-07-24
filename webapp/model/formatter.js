sap.ui.define([
	"sap/ui/core/library",
], function (coreLibrary) {
	"use strict";

	const ValueState = coreLibrary.ValueState;

	return {
		numberUnit: function(value) {
			if (!value) {
				return "";
			}
			return parseFloat(value).toFixed(2);
		},
		quantityState: function(value) {
			if(value === 0) {
				return ValueState.Error;
			} else if(value <= 10) {
				return ValueState.Warning;
			} else {
				return ValueState.Success;
			}
		}
	};
});