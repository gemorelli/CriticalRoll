angular.module('CriticalRoll').service('LanguageService', function ($translate) {

	this.setLanguage = function (lang) {
		$translate.use(lang);
		window.localStorage['language'] = lang;
	};

	this.getLanguage = function () {
		return $translate.use()
	};

}).config(['$translateProvider', function ($translateProvider) {

	$translateProvider.useStaticFilesLoader(
		{
			files: [{
				prefix: 'i18n/',
				suffix: '/app.json'
			}, {
				prefix: 'i18n/',
				suffix: '/ruletips.json'
			}, {
				prefix: 'i18n/',
				suffix: '/critical-bludgeoning.json'
			}, {
				prefix: 'i18n/',
				suffix: '/critical-magic.json'
			}, {
				prefix: 'i18n/',
				suffix: '/critical-piercing.json'
			}, {
				prefix: 'i18n/',
				suffix: '/critical-slashing.json'
			}, {
				prefix: 'i18n/',
				suffix: '/fumble-magic.json'
			}, {
				prefix: 'i18n/',
				suffix: '/fumble-melee.json'
			}, {
				prefix: 'i18n/',
				suffix: '/fumble-natural.json'
			}, {
				prefix: 'i18n/',
				suffix: '/fumble-ranged.json'
			}]
		}
	);

	$translateProvider.preferredLanguage(window.localStorage['language'] || 'en');
	$translateProvider.fallbackLanguage('en');
}]);