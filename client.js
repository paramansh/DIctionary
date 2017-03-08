module.exports = function(keyword,callback2)
{
	var http = require("http");
	function callback(response)
	{
	 response.setEncoding("utf8");
	 response.on("data",function(data){
	 	//dictionary check
	 	callback2(data);
	 });

	}

http.get("http://127.0.1.1:8081/meanings", callback);
}
