
var Block_Core_Template = require("./Template").class;

class Block_Core_Grid extends Block_Core_Template{

	collection = {};
	header = {};
	action = {};

	constructor(ccc_ref)
	{
		super(ccc_ref);
		this.setTemplate(this.ccc_ref.getBaseDir() + "/view/core/grid.ejs");
	}

	setCollection(collection)
	{
		this.collection = collection;
		return this;
	}

	getCollection()
	{
		return this.collection;
	}

	addHeader(key , value)
	{
		this.header[key] = value;
		return this;
	}

	getHeader()
	{
		return this.header;
	}

	addAction(key , value)
	{
		this.action[key] = value;
		return this;
	}

	getAction()
	{
		return this.action;
	}

	
}

module.exports = {class : Block_Core_Grid};