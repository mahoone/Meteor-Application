Template.WorkoutSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleWorkout', id);
	});
});

Template.WorkoutSingle.helpers({
	workout: ()=> {
		var id = FlowRouter.getParam('id');
		return Workouts.findOne({_id: id});
	}
});