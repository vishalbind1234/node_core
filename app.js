var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var ejs = require('ejs');


var host = '127.0.0.1';
var port = '7777';


//-----------------------------------------------mysql----------------------------------------
var connection_info = {
	'host' : 'localhost',
	'port' : 3306,
	'user' : 'root',
	'password' : 'vishal@1234',
	'database' : 'practice_db'
};

var connection = mysql.createConnection(connection_info);

function getEmployeeData() 
{
	// body...
	return new Promise(function(resolve, reject){

		var res = [{'name':'orange'} , {'name':'mango'}];
		var query = connection.query("SELECT * FROM Employee" , function(error , results , fields){

			if(error)
			{
				console.log("some error occured " + error.stack);
			}
			else
			{
				//console.log(query._results[0]);
				resolve(results);
			}

		});
		
	});
	
	console.log("at the end");

}

//-----------------------------------------------------------------------------------------------

var server = http.createServer(function(req , res){
	res.statusCode = 200;
	res.setHeader('content-type', 'text/html');
	const results = getEmployeeData();
	var htmlContent = fs.readFileSync(__dirname + '/view/dashboard.ejs' , 'utf8');
	results.then((resp) => {
		res.write('<h1>hello... from nodejs</h1>');
		htmlRenderized = ejs.render(htmlContent , {result: resp});
		res.write(htmlRenderized);
		res.write('<h1>bye... form nodejs</h1>');
		res.end();
	});

});

server.listen(port, host);	


