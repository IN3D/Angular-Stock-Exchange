(function() {
	var app = angular.module('market', ['directives', 'factories']);

	app.controller('PortfolioController', function() {
		this.stocks = [
            {
                name: 'Apple Computers Inc.',
                symbol: 'aapl',
                bid: 660,
                ask: 660.25,
            },
        ];
		this.bank   = 10000;

		this.setSymbol = function(symbol) {
            /*$cookies.symbol = symbol;
			console.log("$cookies contains: " + $cookies.symbol);*/
		};
	});

    app.controller('SearchController', ['Benzinga', function(Benzinga) {
		this.symbol = '';

        this.findStock = function() {
			Benzinga.call(this.symbol);
        };
    }]);

}).call(this);
