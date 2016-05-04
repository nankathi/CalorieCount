var app = angular.module('starter.controllers', [])

app.controller('DashCtrl', function($scope) {})

app.controller('BmiCtrl', function($scope,$ionicModal) {
  $scope.weight = {number: 120 , validity:true}
  $scope.submit = function(weight,feet,inches){
    // $scope.weight = weight;
    // $scope.feet = feet;
    // $scope.inches = inches;
    var height = (feet * 12)  + parseInt(inches);
    // alert(weight);
    // alert(inches);
    // alert(feet);
    //alert('height: '+ height +' inches');
    var bmi  = (weight / Math.pow(height,2) ) * 703;
    $scope.bmi = bmi.toFixed(2);
    // $scope.bmi = scope;
    //The BMI calculator uses the following BMI formula: Weight (lb) / (Height (in))² x 703.
     //alert('Hello your BMI is : ' + bmi);
    //Calculate the body type based on BMI
    if(bmi < 18)
    {
       //alert('Oops! Your underweight');
       $scope.underweight = true;
       $scope.openModal();
       // $scope.percentageCircle();
    }
    // else if(bmi < 18.5)
    // {
    //   alert('Please check :( , Your are Thin for height');
    // }
    else if(bmi > 18.6 && bmi < 24.9)
    {
       //alert('Amazing Your are healthy');
      $scope.healthysmiley = true;
      // this.modal.show() = true;
      $scope.openModal();
    }
    // else if(bmi > 25 && bmi < 29.9)
    else if(bmi > 25 && bmi < 29.9 || bmi > 30)
    {
      //alert('Sorry you are Over weight');
      $scope.overweight = true;
      $scope.openModal();
      // $scope.percentageCircle();
    }
    // return false;
  };

  $scope.resetFields = function(){
    // alert('hello inside reset function');
      $scope.weight = "";
      $scope.data = "";
      $scope.healthysmiley = false;
      $scope.overweight = false;
      $scope.underweight = false;
  }

// Load the modal from the given template URL
  $ionicModal.fromTemplateUrl('templates/bmi-modal.html', {
      // Use our scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation we want to use for the modal entrance
      animation: 'slide-in-up'
    }).then(function(modal){
        $scope.modal = modal;
    });

    $scope.openModal = function(){
      $scope.modal.show()
      .then(function(){
          Circles.create({
            id:                  'circle-bmi',
            radius:              80,
            value:               $scope.bmi,
            maxValue:            100,
            width:               15,
            text:                function(value){return value + '%';},
            colors:              ['#BEE3F7', '#45AEEA'],
            duration:            800,
            wrpClass:            'circles-wrp',
            textClass:           'circles-text',
            decimalsClass:       'circles-decimals',
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper:        true,
            styleText:           true
        });
      });
    };

    $scope.closeModal = function(){
      $scope.modal.hide();$scope.resetFields();
    };

    //Clean up the modal when we are done with it
    $scope.$on('$destroy',function(){
      $scope.modal.remove();
    });

    //Execute action on hide modal
    $scope.$on('modal.hidden',function(){
      //Call Resetfields function
     // $scope.resetFields();
    });

    //Circle chart
    // var bmiCircle = Circles.create({
    //   id: 'circle-bmi',
    //   radius: 60,
    //   value:43,
    //   maxValue : 100,
    //   width: 10,
    //   text : function(value){return value+ '%';},
    //   colors: ['#11c1f3','#4B253A'],
    //   duration: 400,
    //   wrpClass: 'circles-wrp',
    //   textClass: 'circles-valueStroke',
    //   maxValueStrokeClass: 'circles-maxValueStroke',
    //   styleWrapper: true,
    //   styleText: true
    // });

    //nvd3 chart data
    //var vm = this;
    // $scope.options = {
    //   chart: {
    //     type: 'pieChart',
    //     height:250,
    //     x: function(d){return d.key;},
    //     y: function(d){return d.y;},
    //     showLabels : false,
    //     duration : 500,
    //     labelThreshold : 0.01,
    //     labelSunbeamLayout: true,
    //     width: 250,
    //     // title: 'Your BMI',
    //     donut : true,
    //     tooltips : false,
    //     legend : {
    //       margin : {
    //         top:5,
    //         right:0,
    //         bottom:5,
    //         left: 0
    //       }
    //     }
    //   }
    // };

     // $scope.data = [
     //        // {
     //        //   key: 'Bmi %',
     //        //   y : $scope.bmi
     //        // },
     //        {
     //            key: "One",
     //            y: 2
     //        },
     //        {
     //            key: "Two",
     //            y: 2
     //        },
     //        {
     //            key: "Three",
     //            y: 9
     //        },
     //        {
     //            key: "Four",
     //            y: 7
     //        },
     //        {
     //            key: "Five",
     //            y: 4
     //        },
     //        {
     //            key: "Six",
     //            y: 3
     //        },
     //        {
     //            key: "Seven",
     //            y: .5
     //        }
     //    ]; //End of $scope.data
}) //End of BMI controller


app.controller('BodyFatCtrl', function($scope) {})

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
})


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


