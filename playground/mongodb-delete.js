// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID('5c40abb7666ee852204d9c87');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err) {
		return console.log('Unable to connect to Mongo Server');
	}
	console.log('Connected to MongoDB server');
	//deleteMany	
	db.collection('Todos').deleteMany({completed:true}).then((result) => {
		console.log(result);
	});
	//deleteOne
	db.collection('Todos').deleteOne({completed:true}).then((result) => {
		console.log(result);
	});	
	//findOneAndDelete
	db.collection('Todos').findOneAndDelete({completed:true}).then((result) => {
		console.log(result); //returns the deleted doc
	});
	db.close();
});