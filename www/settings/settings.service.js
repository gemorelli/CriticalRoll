angular.module('CriticalRoll').service('SettingsService', function (LanguageService) {

		this.settings = {
			system: 'pfrpg',
			language: 'en'
		};

		this.get = function (name) {
			return this.settings[name];
		};

		this.set = function (name, value) {
			this.settings[name] = value;
			this.settingsChanged();
		};

		this.settingsChanged = function () {
			window.localStorage.settings = JSON.stringify(this.settings);
			LanguageService.loadLanguage(this.settings.system, this.settings.language);
		};

		this.init = function () {
			if (window.localStorage.settings)
				this.settings = JSON.parse(window.localStorage.settings);
		};

		this.init();

	}
);