(function () {
    var app = angular.module('polls');

    //f Managing the poll list
    app.controller('PollListCtrl', function PollListCtrl($scope) {
        $scope.polls = [];
    });
    // Voting / viewing poll results
    app.controller('PollItemCtrl', function PollItemCtrl($scope, $routeParams) {
        $scope.poll = {};
        $scope.vote = function () {};
    });
    // Creating a new poll
    app.controller('PollNewCtrl', function PollNewCtrl($scope) {
        $scope.poll = {
            question: '',
            choices: [{
                text: ''
            }, {
                text: ''
            }, {
                text: ''
            }]
        };
        $scope.addChoice = function () {
            $scope.poll.choices.push({
                text: ''
            });
        };
        $scope.createPoll = function () {};
    });

})();