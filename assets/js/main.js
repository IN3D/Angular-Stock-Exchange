(function() {
	var app = angular.module('market', ['factories']);

	app.controller('PortfolioController', function() {
		this.stocks = temp;
		this.bank   = 10000;
	});

    app.controller('SearchController', ['Benzinga', function(Benzinga) {
		this.symbol = '';

        this.findStock = function() {
			Benzinga.call(this.symbol);
        };
    }]);

	// DEV: these represent dummy model data to test the controller.
	var temp = [
            {
                name  : 'some stock',
                price : 34.82,
            },
            {
                name  : 'some other stock',
                price : 12.4,
            }
        ];

}).call(this);
