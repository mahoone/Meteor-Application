Template.ExerciseList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('workouts');
	});
});

Template.ExerciseList.helpers({
	exerciseList: ()=> {
		return Workouts.find({inRoutine: true});
	}
});

