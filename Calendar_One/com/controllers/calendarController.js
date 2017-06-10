angular.module('app').controller('calendarController', ['$scope', 'moment', 'alert', '$rootScope', function($scope, moment, alert, $rootScope) {
    $scope.title = "Welcome to calendar1Func";
    $scope.calendar1Content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

    'use strict';
    $scope.changeMode = function(mode) {
        $scope.mode = mode;
    };

    $scope.today = function() {
        $scope.currentDate = new Date();
    };

    $scope.$on('eventDateChanged', function() {
        console.log('date changed');
        for (var i = 0; i < $scope.events.length; i++) {
            $scope.events[i].endTime = $scope.events[i].endsAt;
            $scope.events[i].startTime = $scope.events[i].startsAt;
        }
        $scope.loadEvents();
    });

    $scope.events = [];

    $scope.isToday = function() {
        var today = new Date(),
            currentCalendarDate = new Date($scope.currentDate);
        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.loadEvents = function() {
        $scope.eventSource = $scope.events;
        $rootScope.$broadcast('eventSourceChanged', $scope.eventSource);
    };

    $scope.onEventSelected = function(event) {
        $scope.event = event;
    };

    $scope.onTimeSelected = function(selectedTime, events) {
        //console.log('Selected time: ' + selectedTime + ' hasEvents: ' + (events !== undefined && events.length !== 0));
    };


    //These variables MUST be set as a minimum for the calendar to work
    $scope.calendarView = 'month';
    $scope.viewDate = new Date();
    var actions = [{
        label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
        onClick: function(args) {
            alert.show('Edited', args.calendarEvent);
        }
    }, {
        label: '<i class=\'glyphicon glyphicon-remove\'></i>',
        onClick: function(args) {
            alert.show('Deleted', args.calendarEvent);
        }
    }];
    //        $scope.events = [{
    //            title: 'First Event trigger',
    //            //color: calendarConfig.colorTypes.warning,
    //            startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
    //            endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
    //            startTime: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
    //            endTime: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
    //            draggable: true,
    //            resizable: true,
    //            actions: actions,
    //            allDay: true
    //        }, {
    //            title: 'Second Event trigger',
    //            //color: calendarConfig.colorTypes.info,
    //            startsAt: moment().subtract(1, 'day').toDate(),
    //            endsAt: moment().add(5, 'days').toDate(),
    //            startTime: moment().subtract(1, 'day').toDate(),
    //            endTime: moment().add(5, 'days').toDate(),
    //            draggable: true,
    //            resizable: true,
    //            actions: actions,
    //            allDay: true
    //        }, {
    //            title: 'Third Event Trigger',
    //            //color: calendarConfig.colorTypes.important,
    //            startsAt: moment().startOf('day').add(7, 'hours').toDate(),
    //            endsAt: moment().startOf('day').add(19, 'hours').toDate(),
    //            startTime: moment().startOf('day').add(7, 'hours').toDate(),
    //            endTime: moment().startOf('day').add(19, 'hours').toDate(),
    //            recursOn: 'year',
    //            draggable: true,
    //            resizable: true,
    //            actions: actions,
    //            allDay: true
    //        }];

    $scope.loadEvents();

    $scope.cellIsOpen = true;

    $scope.addEvent = function() {
        var eventObj = {
            title: 'Deliver your Project to SpiderG',
            startsAt: moment().startOf('day').toDate(),
            endsAt: moment().endOf('day').toDate(),
            startTime: moment().startOf('day').toDate(),
            endTime: moment().endOf('day').toDate(),
            draggable: true,
            resizable: true,
            allDay: false
        };
        $scope.events.push(eventObj);
        $scope.loadEvents();
    };

    $scope.eventClicked = function(event) {
        alert.show('Clicked', event);
    };

    $scope.eventEdited = function(event) {
        alert('edit');
        alert.show('Edited', event);
    };

    $scope.eventDeleted = function(event) {
        alert.show('Deleted', event);
    };

    $scope.eventTimesChanged = function(event) {
        alert.show('Dropped or resized', event);
    };

    $scope.toggle = function($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
        console.log('toggle' + JSON.stringify(event));
    };

    $scope.timespanClicked = function(date, cell) {
        if ($scope.calendarView === 'month') {
            if (($scope.cellIsOpen && moment(date).startOf('day').isSame(moment($scope.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
                $scope.cellIsOpen = false;
            } else {
                $scope.cellIsOpen = true;
                $scope.viewDate = date;
            }
        } else if ($scope.calendarView === 'year') {
            if (($scope.cellIsOpen && moment(date).startOf('month').isSame(moment($scope.viewDate).startOf('month'))) || cell.events.length === 0) {
                $scope.cellIsOpen = false;
            } else {
                $scope.cellIsOpen = true;
                $scope.viewDate = date;
            }
        }
        console.log('timespan');
    };

    $scope.deleteEvent = function(index) {
        $scope.events.splice(index, 1);
        $scope.loadEvents();
    }

    $scope.changeEventTime = function(eventType, eventIndex) {
        if (eventType == 'EndTime') {
            $scope.events[eventIndex].endTime = $scope.events[eventIndex].endsAt;
        } else {
            $scope.events[eventIndex].startTime = $scope.events[eventIndex].startsAt;
        }
        $scope.loadEvents();
    }
}]);