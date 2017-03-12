angular.module('alurapic')
.controller('testeController', function($q, $scope ){
	
	var exibir = function(texto) {
		return $q(function(resolve, reject) {
			setTimeout(function(){
			if(texto == 'alura')
				resolve("acertou o nome")
			else reject("errou")

			}, 3000);

		});
	}
	
	$scope.submeter = function () {
		exibir($scope.name).then(function(sucesso){
			console.log("sucesso "+ sucesso)
		},
		function(error){
			console.log(error)
		})
	}

})