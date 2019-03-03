Meteor.publish('workouts', function(){
	return Workouts.find({author: this.userId});
});

Meteor.publish('singleWorkout', function(id){
	check(id, String);
	return Workouts.find({_id: id});
});