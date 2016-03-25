var app = angular.module('starter.controllers', [])

app.controller('DashCtrl', function($scope) {})

app.controller('BmiCtrl', function($scope) {
  $scope.weight = {number: 120 , validity:true}
  $scope.submit = function(weight,feet,inches){
    // $scope.weight = weight;
    // $scope.feet = feet;
    // $scope.inches = inches;
    var height = (feet * 12)  + parseInt(inches);
    // alert(weight);
    // alert(inches);
    // alert(feet);
    alert('height: '+ height +' inches');
    var bmi  = (weight / Math.pow(height,2) ) * 703;
    // $scope.bmi = scope;
    //The BMI calculator uses the following BMI formula: Weight (lb) / (Height (in))² x 703.
    alert('Hello your BMI is : ' + bmi);
    //Calculate the body type based on BMI
    if(bmi < 18){
      alert('Oops! Your underweight');
      document.getElementById('underweight').style.display = "visible";
      // document.getElementById('healthy').style.display = "none";
      // document.getElementById('overweight').style.display = "none";
    } else if(bmi <18.5) {
      alert('Please check :( , Your are Thin for height');
    } else if(bmi >18.6 && bmi < 24.9){
      alert('Amazing Your are healthy');
      // document.getElementById('underweight').style.display = "none";
      document.getElementById('healthy').style.display = "block";
    } else if(bmi > 25 && bmi < 29.9){
      alert('Sorry you are Over weight');
      // document.getElementById('underweight').style.display = "none";
      // document.getElementById('healthy').style.display = "none";
      document.getElementById('overweight').style.display = "visible";
    }
    return false;
  };
})

app.controller('BodyFattrl', function($scope) {})

app.controller('BmrCtrl', function($scope) {})

app.controller('NutritionCtrl', function($scope) {})

app.controller('IdealWeightCtrl', function($scope) {})

app.controller('HeartRateCtrl', function($scope) {})

app.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

app.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


app.directive('isNumber', function () {
  return {
    require: 'ngModel',
    link: function (scope) {
      scope.$watch('weight.number', function(newValue,oldValue) {
                var arr = String(newValue).split("");
                if (arr.length === 0) return;
                if (arr.length === 1 && (arr[0] == '-' || arr[0] === '.' )) return;
                if (arr.length === 2 && newValue === '-.') return;
                if (isNaN(newValue)) {
                    scope.weight.number = oldValue;
                }
            });
    }
  };
});
