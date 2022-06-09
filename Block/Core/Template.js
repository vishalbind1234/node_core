var Model_Core_View = require("../../Model/Core/View").class;

class Block_Core_Template extends Model_Core_View{

	template = null;
	ccc_ref = null;

	constructor(ccc_ref)
	{
		super();
		this.ccc_ref = ccc_ref;
	}

	toHtml()
	{
		var htmlRendered = this.ccc_ref.ejs.render(this.template , {block_ref : this}); 
		//console.log(this.getCollection()[0]);
		//console.log(this.getHeader());
		return htmlRendered;
	}

	setTemplate(path)
	{
		this.template = this.ccc_ref.fs.readFileSync(path , 'utf8')
		return this;
	}

	
}

module.exports = {class : Block_Core_Template};