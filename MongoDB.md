## Mongoose
* Mongoose, by default, creates a pool of connections rather than a single connection.
* Mongoose uses the MongoDB driver’s connection pool feature, which maintains multiple connections to the database server.
* This connection pool allows for better performance by reusing existing connections for incoming requests instead of opening a new connection each time, which can be expensive.

CODE TO CREATE MONGODB CONNECTION
```js
// Import mongoose
const mongoose = require('mongoose');

// MongoDB connection URL (replace with your connection string)
const mongoURI = 'mongodb://localhost:27017/myDatabase'; // or use a cloud MongoDB URL

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,    // Avoid deprecation warning for index creation
    useFindAndModify: false,  // Avoid deprecation warning for findAndModify()
    poolSize: 5,  // Adjusts the pool size (default is 5)
    socketTimeoutMS: 45000,  // Time in milliseconds before closing a socket due to inactivity
    serverSelectionTimeoutMS: 5000  // How long to attempt to select a server before erroring out
});

// Handle connection events
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connected to ' + mongoURI);
});

db.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Close the Mongoose connection when Node.js app is closed
process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose disconnected on app termination');
        process.exit(0);
    });
});
```

* To use the connection pool to perform DB activities
  * export mongoose from db connection file
  * import the mongoose, and using it create Model
  * Export the Model
  * Import the model in router file and perform the transaction there
```js
// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/myDatabase';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10  // Example to adjust pool size
});

// Export the connection to reuse it in other files
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connected to ' + mongoURI);
});

db.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

module.exports = mongoose;

///////////////////////////

// models/userModel.js
const mongoose = require('../db'); // Import the mongoose instance from db.js

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;


//////////////////

// app.js
const express = require('express');
const User = require('./models/userModel'); // Import the User model

const app = express();

app.get('/users', async (req, res) => {
    try {
        // Example: Fetch all users from the DB
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

# MongoDB Commands

```
show dbs  -> show all dbs
use dbname - > to get inside dbname
show collectios  -> show all collection within this db
db.dropDatbase()- >drop the current database

use newDB -> create new DB if not existed
	show dbs (will not show new db, as it does not have any collections)
	
db -> to check the current db u are in 
db.createCollection('posts')
db.posts.insert({
	title:'post 1',
	body:' some text here',
	tags:['news','post'],
	user:{name:'naj'
		}
	date:Date()
	})
	
db.posts.insertMany({
	title:'post 1',
	body:' some text here',
	tags:['news','post'],
	user:{name:'naj'
		}
	date:Date()
	},
	{
	title:'post 2',
	body:' some text here',
	tags:['news','post'],
	user:{name:'naj'
		}
	date:Date()
	})
	
db.posts.find().pretty()
db.posts.findOne({category:'news'})  //return the first result

db.posts.find({title:'post 1'})

db.posts.find().sort({title:1}) //1->asc , -1->desc

db.posts.find({title: post 1}).count()

db.posts.find().limit(2)

db.posts.find().forEach((doc)=>print('blog: '+doc.title))

//this will replace the whole content with new content
db.posts.update(
	{title:'post 2'},                //find document
	{title:'post 2',body:'new body'},//updated content
	{upsert:true})					 //insert if not present
	
	
//this will just update specific field and leave rest as it
db.posts.update(
	{title:'post 2'}, 
	{
		$set:{
			body:'just changing the body',
			category:'News'
		}
	}
	

//this will just increment the value by given int
db.posts.update(
	{title:'post 2'}, 
	{
		$inc:{
			likes:2   //if initially 4, it will be 6 now
		}
	}
	
	
//this will rename the field
db.posts.update(
	{title:'post 2'}, 
	{
		$rename:{
			likes:'views'
		}
	}


db.posts.remove({title:'post 2'})


//Creating index and searching
db.posts.createIndex({title:'text'}

db.posts.find({
	$text:{
		$search:"\"Post\""
		}
	})
	


//finding documents based on greater than
db.posts.find({views: {$gt:3}})    -> >3
db.posts.find({views: {$gte:3}})   -> >=3
db.posts.find({views: {$lt:3}})    -> <3
db.posts.find({views: {$lte:3}})   -> <=3
	
```
