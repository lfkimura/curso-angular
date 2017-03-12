angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){
	return $resource('/v1/fotos/:fotoId', {}, {
            'update' : { 
                method: 'PUT'
            },
            'get': {method: 'GET', isArray: false}
        });

})
.factory('cadastroFotos', function(recursoFoto, $q, $rootScope){
	var service = {};
    service.cadastrar = function(foto) {
     	return $q(function(resolve, reject) {
     		if (foto._id) {
     			recursoFoto.update({fotoId: foto._id}, foto, function() {
     				$rootScope.$broadcast('fotoCadastrada');
     				resolve({
                            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
                            inclusao: false
                    })
                }, function(erro) {
                    console.log(erro);
                    reject({
                            mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
                        })
                    });

     		} else {
     			recursoFoto.save(foto, function() {
     				$rootScope.$broadcast('fotoCadastrada');
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
                            inclusao: true
                        });
                    }, function(erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível incluir a foto ' + foto.titulo
                        });
                    });

     		}
     	});
     }
    return service;
})