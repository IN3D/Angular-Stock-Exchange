(function() {
	var app = angular.module('market', ['directives', 'factories']);

	app.controller('PortfolioController', function() {
		this.stocks = [];
		this.bank   = 10000;

		this.clicked = function(symbol) {
			console.log(symbol + ' was clicked');
		};
	});

    app.controller('SearchController', ['Benzinga', function(Benzinga) {
		this.symbol = '';

        this.findStock = function() {
			Benzinga.call(this.symbol);
        };
    }]);

}).call(this);
