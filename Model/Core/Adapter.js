class Model_Core_Adapter{

	config = {
		host : "localhost",
		port : 3306,
		user : "root",
		password : "vishal@1234",
		database : "practice_db"
	};
	mysql = require('mysql');
	connection = this.mysql.createConnection(this.config);
	
	fetch(query)
	{

		var connection = this.connection;
		var promise = new Promise(function(resolve, reject){

			var obj = connection.query(query , function(error , result , fields){
				if(error)
				{
					console.log(" some error occured in Adapder Class ");
					console.log(error.stack);
					//return null;
				}
				else
				{
					resolve(result);
				}
			});

		});

		return promise;
	}


	fetchAll(query)
	{
		var connection = this.connection;
		var promise = new Promise(function(resolve, reject){

			var obj = connection.query(query , function(error , result , fields){
				if(error)
				{
					console.log(" some error occured in Adapder Class ");
					console.log(error.stack);
					//return null;
				}
				else
				{
					resolve(result);
				}
			});
		});

		return promise;
	}



}

module.exports = { class : Model_Core_Adapter };