// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID('5c40abb7666ee852204d9c87');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err) {
		return console.log('Unable to connect to Mongo Server');
	}
	console.log('Connected to MongoDB server');
	
	db.collection('Todos').find({_id:obj}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));

	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	db.close();
});