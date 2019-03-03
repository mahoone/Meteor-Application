Template.Routine.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('workouts');
	});
});

Template.Routine.helpers({
	workouts: ()=> {
		return Workouts.find({inRoutine: true});
	}
});