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

	app.directive('titleBar', function() {
		return {
			restrict: 'E',
			templateUrl: 'title-bar.html'
		};
	});

	app.directive('displayArea', function() {
		return {
			restrict: 'E',
			templateUrl: 'display-area.html'
		};
	});

}).call(this);
