Template.Workouts.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('workouts');
	});
});

Template.Workouts.helpers({
	workouts: ()=> {
		return Workouts.find({});
	}
});

Template.Workouts.events({
	'click .btn-workout': () => {
		Session.set('newWorkout', true);
	}
});