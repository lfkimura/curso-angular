angular.module("minhasDiretivas",[])
.directive("meuPainel", function(){
	var ddo = {};
	ddo.transclude=true;
	ddo.restrict = 'AE';
	ddo.scope = {
		titulo: "@"
	}
	ddo.templateUrl = 'js/diretivas/meu-painel.html';
	return ddo;

})
.directive("minhaFoto", function(){
	var ddo = {};
	ddo.transclude=false;
	ddo.restrict = 'E';
	ddo.scope = {
		titulo: "@",
		url: "@"
	}
	ddo.templateUrl = 'js/diretivas/minha-foto.html';
	return ddo;

});