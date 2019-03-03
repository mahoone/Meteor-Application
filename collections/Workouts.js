import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Workouts = new Mongo.Collection('workouts');

Workouts.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
    update: function(userId, doc) {
        return !!userId;
    }
});

Exercise = new SimpleSchema({
    name: {
        type: String,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number
    }

});


WorkoutSchema = new SimpleSchema({
    name: {
        label: "Name",
        type: String
    },
    desc: {
        label: "Description",
        type: String
    },
    exercise: {
        type: Array,
    },
    'exercise.$':{
        type: Exercise
    },
    inRoutine: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoform: {
            type: "hidden"
        },
        autoValue: function(){
            return this.userId;
        },
    },
    createdAt: {
        type: Date,
        label: "CreatedAt",
        autoform: {
            type: "hidden"
        },
        autoValue: function() {
            return new Date();
        },
    }
});


Meteor.methods({
    toggleListItem: function(id, currentState) {
        Workouts.update(id, {
            $set: {
                inRoutine: !currentState
            }
        });
    },
    deleteWorkout: function(id) {
        Workouts.remove(id);
    }
});

Workouts.attachSchema(WorkoutSchema);