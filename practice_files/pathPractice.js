class path{

	path = require('path');
	dirName = "home//vishal/desktop/commands.txt";

	showPathDetails()
	{
		console.log(this.path.normalize(this.dirName));
		console.log(this.path.dirname(this.dirName));
		console.log(this.path.basename(this.dirName));
		console.log(this.path.extname(this.dirName));
	}

}

var path_obj = new path();

module.exports = {
	path : path_obj,
	name : "vishal",
	college : "GECR"
};

