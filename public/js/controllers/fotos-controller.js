angular.module('alurapic')
.controller('FotosController',function($scope, $http){
  
  $scope.fotos = [];
  $scope.mensagem = '';
    var promise = $http.get('/v1/fotos');
    promise.then(function(retorno) {
        $scope.fotos = retorno.data;
        $scope.foto = {};
        $scope.mensagem = 'Foto cadastrada com sucesso';
    })
    .catch(function(erro) {
        console.log(erro);
        $scope.mensagem = 'Não foi possível cadastrar a foto';
    }); 



});