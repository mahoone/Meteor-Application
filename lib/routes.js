if (Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('workout-list');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('workout-list');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/workout-list', {
	name: 'workout-list',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'Workouts'});
	}
});

FlowRouter.route('/exercise/:id', {
	name: 'workout',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'WorkoutSingle'});
	}
});
FlowRouter.route('/routine', {
	name: 'routine',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Routine'});
	}
});

FlowRouter.route('/exercise-list', {
	name: 'exercise-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ExerciseList'});
	}
});