angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){
	return $resource('/v1/fotos/:fotoId', {}, {
            'update' : { 
                method: 'PUT'
            },
            'get': {method: 'GET', isArray: false}
        });

})