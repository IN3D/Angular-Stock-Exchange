(function() {
	var app = angular.module('market', []);

	app.controller('PortfolioController', function() {
		this.stocks = temp;
		this.bank   = 1000;

        this.giveCash = function(val) {
            this.bank += val;
        };
	});

    app.controller('SearchController', ['$http', function($http) {
        this.searchVals = {
            symbol : '',
            name   : '',
            ask    : 0,
            bid    : 0
        };

        this.findStock = function() {
            if (this.symbol !== '') {
                $http.get('http://data.benzinga.com/stock/' + this.searchVals.symbol)
                .success(function(data) {
                    console.log(data);
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
