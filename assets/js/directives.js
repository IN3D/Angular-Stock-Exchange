(function() {
	var app = angular.module('directives', []);

	app.directive('portfolio', function() {
		return {
			restrict: 'E',
			templateUrl: 'portfolio-panel.html',
			controller: 'PortfolioController',
			controllerAs: 'portfolio'
		};
	});

}).call(this);
