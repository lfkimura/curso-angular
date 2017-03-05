angular.module('alurapic')
.controller('FotoController', function($scope, $http){
	//$scope.foto = {}; 
	$scope.submeter = function(){
		console.log($scope.foto);
		if ($scope.formulario.$valid) {
			$http.post('/v1/fotos', $scope.foto)
	            .success(function() {
			        $scope.foto = {};
			        $scope.mensagem = 'Foto cadastrada com sucesso';
	                console.log('Foto adicionada com sucesso');
	            })
	            .error(function(erro) {
	                
			        console.log(erro);
			        $scope.mensagem = 'Não foi possível cadastrar a foto';
	            })
		}
	}
	
})