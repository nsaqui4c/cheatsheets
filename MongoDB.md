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
