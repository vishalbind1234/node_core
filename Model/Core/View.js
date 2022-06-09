class Model_Core_View{

	data = [];

	constructor()
	{
		//-----
	}

	show()
	{
		return "I am in Model";
	}

	getData(key = null)
	{
		if(key != null)
		{
			if(key in this.data)
			{
				return this.data[key];
			}
			return null;
		}
		return this.data; 
	}

	setData(key , value)
	{
		this.data[key] = value;
		return this;
	}

	removeData(key = null)
	{
		if(key != null)
		{
			if(key in this.data)
			{
				this.data.splice(key , 1);
				return this;
			}
			return this;
		}
		this.data = [];
		return this;

	}

}

module.exports = { class : Model_Core_View };