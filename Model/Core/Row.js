var Model_Core_Adapter = require("./Adapter").class;
var Model_Product_Resource = require("../Product/Resource").class;
var getSelf = function()
{
	return  new Model_Core_Row();
}


class Model_Core_Row{

	adapter = null;
	resource = null;
	data = {};

	constructor()
	{
		//------
	}

	/*getSelf()
	{
		var obj = new Object.create(this);
		return obj;
	}*/

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

	setData(data)
	{

		this.data = data;
		return this;
	}

	addData(data)
	{
		this.data.push(data);
		return this;
	}	

	getAdapter()
	{
		if(this.adapter == null)
		{
			return new Model_Core_Adapter();
		}
		return this.adapter;
	}

	getResource()
	{
		return this.resource;
	}

	setResource(resource)
	{
		this.resource = resource;
		return this;
	}

	async load(id = null)
	{
		if(id == null)
		{
			return null;
		}
		else
		{
			var row = null;
			var model_obj = this;
			var promise = this.getAdapter().fetch(`SELECT * FROM ${this.getResource().getTableName()} WHERE ${this.getResource().getPrimaryKey()} = ${id}`);
			await promise.then(function(result){

				var row_obj = getSelf();
				row_obj.setResource(model_obj.getResource());
				row_obj.setData(result[0]);
				row = row_obj;

			});

			return row; 

		}

	}

	async fetchAll()
	{
		var arr = [];
		var model_obj = this;
		var promise = this.getAdapter().fetchAll(`SELECT * FROM ${this.getResource().getTableName()}`);
		await promise.then(function(result){

			for(const row of result)
			{
				var row_obj = getSelf();
				row_obj.setResource(model_obj.getResource());
				row_obj.setData(row);
				arr.push(row_obj);
			}
			//console.log(result);

		});

		return arr; 

	}

}

module.exports = { class : Model_Core_Row };