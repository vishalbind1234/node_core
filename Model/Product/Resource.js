
class Model_Product_Resource{

	tableName = null;
	primaryKey = null;

	setPrimaryKey(key)
	{
		this.primaryKey = key;
		return this;
	}

	getPrimaryKey()
	{
		return this.primaryKey;
	}

	setTableName(name)
	{
		this.tableName = name;
		return this;
	}

	getTableName()
	{
		return this.tableName;
	}
}

module.exports = { class : Model_Product_Resource };