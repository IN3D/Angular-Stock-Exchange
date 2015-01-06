(function() {
	var app = angular.module('market', []);

	app.controller('PortfolioController', function() {
		this.stocks = temp;
		this.bank = userBank;
	});

	// DEV: these represent dummy model data to test the controller.
	var temp = [
		{
			name: 'some stock',
			price: 34.82,
		},
		{
			name: 'some other stock',
			price: 12.4,
		}
	];

	var userBank = 10000.00;


}).call(this);
