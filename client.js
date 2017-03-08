module.exports = function(keyword,callback2)
{
	var input_word = keyword.split("=")[1];
	var http = require("http");
	function callback(response)
	{
	 response.setEncoding("utf8");
	 response.on("data",function(data)
	 {
		 var meaning = "not found";
	 	//dictionary check
		var mng = data.split("\n");
		for(var i=0;i<mng.length;i++)
		{
			var word = mng[i].split(": ")[0];
			if(word===input_word)
			{
				meaning = mng[i].split(": ")[1];
			}
		}

	 	callback2(meaning);
	 });

	}

http.get("http://127.0.1.1:8081/meanings", callback);
}
