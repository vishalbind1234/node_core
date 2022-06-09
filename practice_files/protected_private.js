class car{

	#name = null;
	_wheel = 4;
	_color = "black";

	constructor(name , msg)
	{
		this.#name = name;
		console.log(this.#name);
		console.log(msg);
		console.log(this);
	}

	_setColor(color)
	{
		this._color = color;
	}

}

class toyota extends car{

	_engine = "dh2536";
	path = null;
	require_data = null;

	constructor(name)
	{
		super(name , "message => hello");
	}

	_getDetails()
	{
	
		var require_data = require('./pathPractice.js');
		//console.log(require_data);
		//console.log(require_data.path.path.sep);
		return require_data;
	}

}

var xyz = new toyota("xyz");
xyz._setColor("Orange");


console.log(xyz);
//console.log(Object.getOwnPropertyNames(xyz));

var require_data = xyz._getDetails();
console.log(require_data.path['showPathDetails']);


//console.log(require('http'));
//console.log(require_data);
//console.log(xyz._wheel);
//console.log(xyz._color);