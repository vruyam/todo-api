// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID('5c40abb7666ee852204d9c87');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err) {
		return console.log('Unable to connect to Mongo Server');
	}
	console.log('Connected to MongoDB server');
	
	db.collection('Todos').findoneAndUpdate({
		_id:obj
	},{
		$set :{
			completed:true
		}
	},{
		returnoriginal:false
	}).then( (result) => {
		console.log(result);
	});


	db.close();
});