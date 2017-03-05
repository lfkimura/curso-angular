angular.module('alurapic')
.controller('FotosController',function($scope, $http){
  
  $scope.fotos = [];
  $scope.mensagem = '';
    var promise = $http.get('/v1/fotos');
    promise.then(function(retorno) {
        $scope.fotos = retorno.data;
    })
    .catch(function(erro) {
        console.log(erro);
        $scope.mensagem = 'Não foi possível cadastrar a foto';
    }); 

    $scope.remover = function(foto) {

        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {
            console.log('Foto ' + foto.titulo + ' removida com sucesso!');

        })
        .error(function(erro) {
            console.log('Não foi possível apagar a foto ' + foto.titulo);
        });
    }



});