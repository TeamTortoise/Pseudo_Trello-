var TaskView = Backbone.View.extend({
  render : function(){

console.log("TASK VIEW IS RENDERING");

	// var greeting= "<h1> Greetings, "+ this.model.get('username') +" !!</h1>";
	var taskTitle = '<div id="currentTasks"><h2> The task below has been saved! </h2></div>';
	var taskItem = this.model.get('description');
<<<<<<< HEAD
	var returnBtn = '<br><br><button id="userPage">Return</button>';
    
	var input = '<br><div id="taskList"><ul><li></li></ul></div>';
=======
	var returnBtn = '<br><br><button id="logout">Return to Homepage</button>';

	var input = '<br><div id="taskList"></div>';
>>>>>>> master
	this.$el.html("<div id='taskview'>"+taskTitle +taskItem + returnBtn + input +"</div>");


	console.log('TASKS HAS BEEN ADDED!',this.el);
},

  initialize : function(){
    this.render();

  },

  events : {
     "click button" : "returnHome"

  },

   returnHome : function(){
    	$("#taskview").empty();

    	// $("#login-area").show();
    }
});
