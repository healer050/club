	//封装一个设置cookie值得方法
	function setCookie(key,value,day){
		let date = new Date();
		date.setDate(date.getDate()+day);
		document.cookie = key+"="+value+";expires="+date;
	}
	
	//封装一个删除函数
	function delCookie(key){
		setCookie(key,"",-1);
	}
	
	//封装一个提取cookie的函数
	function getCookie(key){
		let strCookie = document.cookie;
		let arrCookie = strCookie.split("; ");
		
		for(let i=0; i<arrCookie.length; i++){
			let item = arrCookie[i].split("=");
			if(item[0] == key){
				return item[1];
			}
		}
		
		return "";
	}