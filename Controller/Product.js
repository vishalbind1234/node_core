var Controller_Core_Action = require("./Core/Action").class;

class Controller_Product extends Controller_Core_Action{

	//ccc_ref = null;

	async gridAction()
	{

		//var modelProduct = this.ccc_ref.getModel('Product');
		//var res = await modelProduct.load(2);
		//console.log(res);
		
		var blockProductGrid = this.ccc_ref.getBlock('Product_Grid');
		await blockProductGrid.init();
		return blockProductGrid.toHtml();

	}

	errorAction()
	{
		return "<h1> Page Not Found... </h2>";
	}

}

module.exports = {class : Controller_Product};