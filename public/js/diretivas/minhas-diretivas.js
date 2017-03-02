angular.module("minhasDiretivas",[])
.directive("meuPainel", function(){
	console.log("diretivas");
	var ddo = {};
	ddo.transclude=true;
	ddo.restrict = 'AE';
	ddo.scope = {
		titulo: "@"
	}
	ddo.templateUrl = 'js/diretivas/meu-painel.html';
	return ddo;

});