var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet Marissa for a lunch date',
	completed: true

},{
	id: 2,
	description: 'Go to a dinner date with Marissa',
	completed: true
}, {
	id: 3,
	description: 'Have hot sex in bed with Marissa after dinner date',
	completed: true
}, {
	id: 4,
	description: 'Fall in love with Marissa, get married and live happily ever after!',
	completed: true
}
];

app.get('/', function(req, res){

	res.send ('Todo API Root')

});

// Get /todos
app.get('/todos', function(req, res){
res.json(todos);
});

// Get /todos
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});

// Get/todos/:id

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
})