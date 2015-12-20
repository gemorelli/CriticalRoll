angular.module('CriticalRoll').config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'menu/menu.template.html',
		controller: 'MenuController'
	}).state('app.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'app/main.template.html',
				controller: 'CardsController'
			}
		}
	}).state('app.license', {
		url: '/license',
		views: {
			'menuContent': {
				templateUrl: 'menu/license.template.html'
			}
		}
	}).state('app.help', {
		url: '/help',
		views: {
			'menuContent': {
				templateUrl: 'menu/help.template.html',
				controller: 'MenuController'
			}
		}
	}).state('app.ruletips', {
		url: '/ruletips',
		views: {
			'menuContent': {
				templateUrl: 'ruletips/ruletips.template.html',
				controller: 'RuletipsController'
			}
		}
	});

	$urlRouterProvider.otherwise('/app/home');
});

// Horrible hack for WindowsPhone: https://github.com/driftyco/ionic/issues/2150
if (ionic.Platform.isWindowsPhone()) {
	$document.find('button').attr('data-tap-disabled', true);
}