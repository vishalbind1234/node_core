var movie = {

	movieName : "halla madrid" ,
	movieType : "drama" ,
	showDetails : function()
				  {
					  console.log(this.movieName + " it is of type => " + this.movieType);	//---------- why it is not printing -------------------
				  }
};

module.exports = movie;
