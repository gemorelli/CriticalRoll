CriticalRoll.service('PopoverService', function ($ionicPopover) {

	var self = this;

	self.openPopover = function ($event, templateName, text, $scope) {

		if (self.popover)
			self.popover.remove();

		$scope.popoverText = text;
		$ionicPopover.fromTemplateUrl('templates/popover-' + templateName + '.html', {
			scope: $scope
		}).then(function (popover) {
			self.popover = popover;
			self.popover.show($event);
		});
	};
});