angular.module('CriticalRoll').service('CardService', function ($ionicScrollDelegate) {

	var self = this;
	this.drawnCards = [];
	this.cardsToDraw = {};
	this.cardQuantity = 52;

	this.init = function () {
		self.drawnCards.length = 0;

		self.cardsToDraw = {
			"critical": {"slashing": [], "piercing": [], "bludgeoning": [], "magic": []},
			"fumble": {"melee": [], "ranged": [], "natural": [], "magic": []}
		};
		for (var primaryType in self.cardsToDraw) {
			for (var secondaryType in self.cardsToDraw[primaryType]) {
				for (var i = 0; i < self.cardQuantity; i++) {
					self.cardsToDraw[primaryType][secondaryType].push(i)
				}
			}
		}
	};

	this.init();

	this.drawCard = function (primaryType, secondaryType) {

		var cardList = self.cardsToDraw[primaryType][secondaryType];

		var cardIndex = Math.floor(Math.random() * cardList.length);

		var cardNameTemplate = 'CARD-' + primaryType.toUpperCase()
			+ '-' + secondaryType.toUpperCase()
			+ '-' + (cardList[cardIndex] + 1);

		var cardDrawn = {
			primaryType: primaryType,
			secondaryType: secondaryType,
			title: cardNameTemplate + '-TITLE',
			text: cardNameTemplate + '-TEXT'
		};

		cardList.splice(cardIndex, 1);
		self.drawnCards.push(cardDrawn);
		$ionicScrollDelegate.scrollBottom(true);
	};

	this.hasCardsToDraw = function (primaryType, secondaryType) {
		return self.cardsToDraw[primaryType][secondaryType].length > 0;
	};

	this.removeAll = function () {
		this.init();
		$ionicScrollDelegate.scrollTop(true);
	};

});