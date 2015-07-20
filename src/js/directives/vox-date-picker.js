/*
Angular-ui bootstrap datepicker
http://angular-ui.github.io/bootstrap/#/datepicker
*/
angular.module('xeditable').directive('editableVoxDatePicker', ['editableDirectiveFactory',
	function(editableDirectiveFactory, $compile) {
		return editableDirectiveFactory({
			directiveName: 'editableVoxDatePicker',
			inputTpl: '<div></div>',
			render: function() {
				this.parent.render.call(this);

				var datePickerWrapper = angular.element('<div vox-pick-a-date bindable="$data"></div>');

				datePickerWrapper.attr('start-date', this.attrs.eStartDate);

				this.inputEl.prepend(datePickerWrapper);
				this.inputEl.removeAttr('class');
				this.inputEl.attr('class','input-group');
			}
    });
}]);