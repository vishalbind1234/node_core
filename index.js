
var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var url = require('url');
var host = '127.0.0.1';
var port = '7777';

var server = http.createServer(async function(req , res){

	//console.log(req);

	res.statusCode = 200;
	res.setHeader('content-type', 'text/html');
	res.write('<h1>hello. from nodejs</h1>');
	//Ccc.init(req);
	var htmlRendered = await Ccc.init(req);
	res.write(htmlRendered);
	res.end();

});

server.listen(port, host);	

class Ccc{

	static ejs = require('ejs');
	static mysql = require('mysql');
	static fs = require('fs');;
	static _class = null;

	static getBaseDir()
	{
		return __dirname;
	}

	static getBlock(block) 
	{
		block = block.replace("_" , "/");
		var result = require(__dirname + "/Block/" + block);
		var Block = result.class;
		var block_obj = new Block(this);
		return block_obj;
	}

	static getModel(model) 
	{
		model = model.replace("_" , "/");
		var result = require(__dirname + "/Model/" + model);
		var Model = result.class;
		var model_obj = new Model(this);
		return model_obj;
	}


	static loadFile(url)
	{
		var result = require(__dirname + "/" + url)
		this._class = result.class;
	}

	static loadClass(class_name)
	{
		var class_url =  class_name.replace("_" , "/");
		class_url = "Controller" + "/" + class_url;
		this.loadFile(class_url);
	}

	static init(req)
	{   
		var get_obj = url.parse(req.url , true).query;
		var class_name = (get_obj.c === undefined) ? "error" : get_obj.c; 
		this.loadClass(class_name);

		const method_name = (get_obj.a === undefined) ? "errorAction" : get_obj.a + "Action" ; 

		var class_obj = new this._class(this)
		//class_obj[method_name]();
		return class_obj[method_name]();

	}

	
}
