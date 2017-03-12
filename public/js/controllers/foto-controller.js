angular.module('alurapic')
.controller('FotoController', function($scope, $routeParams, recursoFoto, cadastroFotos){
	//$scope.foto = {}; 

	if($routeParams.fotoId) {
            recursoFoto.get({ fotoId: $routeParams.fotoId }, {}, function(foto) {
                $scope.foto = foto;
            },function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
        }
	$scope.submeter = function(){
		console.log($scope.foto);
		if ($scope.formulario.$valid) {
            cadastroFotos.cadastrar($scope.foto).then(function(sucesso){
                $scope.mensagem = sucesso.mensagem;
                if (sucesso.inclusao) $scope.foto = {};
            }, function(erro){

                    $scope.mensagem = erro.mensagem;
            })
			
        };
    }
	
})