var Block_Core_Grid = require("../Core/Grid").class;

class Block_Product_Grid extends Block_Core_Grid{

	title = "Product";

	constructor(ccc_ref)
	{
		super(ccc_ref);
		
		/*var block_ref = this;
		Promise.resolve(this.prepareCollection()).then(function(resp){
			block_ref.prepareHeader();
		});*/

	}

	async init()
	{
		this.prepareHeader();
		await this.prepareCollection();
	}

	async prepareCollection()
	{
		var modelProduct = this.ccc_ref.getModel("Product");
		var collection = await modelProduct.fetchAll();
		this.setCollection(collection);
	}

	prepareHeader()
	{
		this.addHeader("product_id" , {
			title : "Product ID",
			index : "product_id"
		});

		this.addHeader("name" , {
			title : "Name",
			index : "name"
		});

		this.addHeader("sku" , {
			title : "SKU",
			index : "sku"
		});

	}

	
}

module.exports = {class : Block_Product_Grid};