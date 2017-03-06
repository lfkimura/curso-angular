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

})
 .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    });