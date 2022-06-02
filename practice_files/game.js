var movie = require('./movie');

function User(name)
{
	this.name = name;
	this.life = 100;
	this.giveLife = function giveLife(targetUser)
					{
						targetUser.life += 1;
						console.log(this.name + " give life to " + targetUser.name);
					}


}

var max = new User('max');
var sam = new User('sam');

//max.giveLife(sam);


User.prototype.upperCutted = function upperCutted(targetUser)
						  {
						  		targetUser.life -= 3;
								console.log(this.name + " upperCutted " + targetUser.name);
						  }

/*max.upperCutted(sam);
console.log("max's life = " + max.life);
console.log("sam's life = " + sam.life);*/

movie.movieName = "catch me if you can";
movie.movieType = "Drama";
console.log(movie.movieName + " => " + movie.movieType);
console.log(movie);


//movie.showDetails;  //----------------------------------------------why it is not printing --------------------
