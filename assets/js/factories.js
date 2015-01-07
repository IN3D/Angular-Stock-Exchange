(function() {
	var app = angular.module('factories', []);

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

	app.factory('Benzinga', ['$http', 'FoundStock', function($http, FoundStock) {
		return {
			call: function(symbol) {
				if (symbol !== '') {
					$http.get('http://data.benzinga.com/stock/' + symbol)
					.success(function(data) {
						if (data.status !== 'error') {
							FoundStock.setVals(data);
						} else {
							alert('invalid stock symbol');
						}
					})
					.error(function() {
						console.log("ERROR: http get failed.");
					});
				} else {
					alert('please enter a valid stock symbol.');
				}
			}
		};
	}]);

}).call(this);
