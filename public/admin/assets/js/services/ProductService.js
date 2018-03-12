angular.module('ProductService', []).factory('Product', ['$http', function($http) {

    return {
        // call to get all nerds
        getB : function() {
            return $http.get('/admin/productsB');
        },

        getC : function() {
            return $http.get('/admin/productsC');
        },

        getP : function() {
            return $http.get('/shop');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/products/' + id);
        }
    }

}]);