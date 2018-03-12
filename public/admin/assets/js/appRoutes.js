angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

    // home page

        .when('/shopL', {
            templateUrl: '../views/shop.html'
        })

        .when('/admin', {
            //  templateUrl: 'home.html'
            templateUrl: 'index.html'
        })

        // nerds page that will use the NerdController
        .when('/products', {
            templateUrl: 'products.html',
            controller: 'ProductController'
        })

        .when('/cats', {
            templateUrl: 'cats.html',
            controller: 'ProductController'
        })

        .when('/brands', {
            templateUrl: 'brands.html',
            controller: 'ProductController'
        })

        .when('/update', {
            templateUrl: 'update.html',
            controller: 'ProductController'
        })

        .when('/table', {
            templateUrl: 'table.html',
            controller: 'ProductController'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);
