class Model_Core_View{

	data = [];
	ccc_ref = null;

	constructor(ccc_ref)
	{
		this.ccc_ref = ccc_ref;
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

	getUrl(c = null , a = null , reset = false , param = {})
	{

		var req_obj = this.ccc_ref.getRequestObject();
		var url_obj = this.ccc_ref.getUrlObject();

		var get_obj = url_obj.parse(req_obj.url , true).query;
		var className = (c == null) ? get_obj.c : c;   
		delete get_obj.c;
		var methodName = (a == null) ? get_obj.a : a;
		delete get_obj.a;

		get_obj = (reset == true) ? Object.assign({} , param) : Object.assign(get_obj , param);

		var url = `index.js?c=${className}&a=${methodName}`;
		for(const [key , value] of Object.entries(get_obj))
		{
			url = url + "&" + key + "=" + value ;
		}

		//return url.slice(0 , -2);
		return url;
	}

}

module.exports = { class : Model_Core_View };