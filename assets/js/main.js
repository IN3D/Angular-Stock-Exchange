(function() {
	var app = angular.module('market', []);

	app.factory('FoundStock', function() {
		var vals = {
			symbol : '',
			name   : '',
			ask    : 0,
			bid    : 0
		};
		return {
			getVals: function() {
				return vals;
			},
			setVals: function(v) {
				vals.symbol = v.symbol;
				vals.name   = v.name;
				vals.ask    = v.ask;
				vals.bid    = v.bid;
			}
		};
	});

	app.controller('PortfolioController', function() {
		this.stocks = temp;
		this.bank   = 1000;
	});

    app.controller('SearchController', ['$http', 'FoundStock', function($http, FoundStock) {
		this.symbol = '';

        this.findStock = function() {
            if (this.symbol !== '') {
                $http.get('http://data.benzinga.com/stock/' + this.symbol)
                .success(function(data) {
					if ( data.status !== 'error' ) {
						FoundStock.setVals(data);
						console.log(FoundStock.getVals());

					} else {
						alert('invalid stock symbol');
					}
                })
                .error(function() {
                    console.log("http GET failed.");
                });
            } else {
                alert('please enter a symbol to look up.');
            }
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
