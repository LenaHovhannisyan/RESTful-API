angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

    // home page

        .when('/', {
            templateUrl: 'views/shop.html',
            controller: 'ShopController'
        });

     /*   .when('/admin', {
            templateUrl: 'admin/index.html',
            controller: 'assets/js/controllers/ProductCtrl.js'
        });*/

    $locationProvider.html5Mode(true);

}]);
