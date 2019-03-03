Template.Workout.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});


Template.Workout.helpers({
	updateWorkoutId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

Template.Workout.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleListItem', this._id, this.inRoutine);
	},
	'click .fa-trash' : function() {
		Meteor.call('deleteWorkout', this._id);
	},
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
});

Template.HomeLayout.onRendered(function() {
  let settings = 'particles.json';
  this.autorun(() => {
    if (particlesJS) {
      console.log(`loading particles.js config from "${settings}"...`)
      /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
      particlesJS.load('particles-js', settings, function () {
        console.log('callback - particles.js config loaded');
      });
    }
  });
});