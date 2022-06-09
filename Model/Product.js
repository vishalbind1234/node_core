var Model_Core_Row = require("./Core/Row").class;

class Model_Product extends Model_Core_Row{

	constructor()
	{
		super()
		var resource = require("./Product/Resource").class;		//-----------------we will see it later-------------
		var resource_obj = new resource();
		resource_obj.setTableName("Product").setPrimaryKey("product_id");
		this.setResource(resource_obj);
	}

}

module.exports = { class : Model_Product };