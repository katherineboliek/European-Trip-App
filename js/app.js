var app = angular.module('myApp', []);

app.controller('BaseController', function() {

    this.message = "Ready";
});

app.controller('CountryController', ['$http', function($http) {

  this.countries = [];
  this.activeCountry = "";
  var _this = this;
  this.direction = true;

  this.toggle = function(){
    this.direction = !this.direction;
  };

  $http.get('/js/europe.json')
    .success(function(data){
      _this.countries = data;
    })
    .error(function(msg){
      console.log("This request failed.\n");
    });

}]);
