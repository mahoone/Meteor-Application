Template.NewWorkout.events({
	'click .fa-close' : function(){
		Session.set('newWorkout', false);
	}
});