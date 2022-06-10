var Controller_Core_Action = require("./Core/Action").class;

class Controller_Category extends Controller_Core_Action{

	//ccc_ref = null;

	async __gridAction()
	{

		//var modelCategory = this.ccc_ref.getModel('Category');
		//var res = await modelCategory.load(2);
		//console.log(res);
		
		var blockCategoryGrid = this.ccc_ref.getBlock('Category_Grid');
		await blockCategoryGrid.init();
		return blockCategoryGrid.toHtml();

	}

	gridAction()
	{
		return "<h1> I am in Category </h2>";
	}

}

module.exports = {class : Controller_Category};