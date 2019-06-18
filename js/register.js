

var span = document.getElementsByTagName('span');
var flag = false;
let oUserName = document.querySelector("#username");
// let oRegSpan = document.querySelector("#reg_span");






//手机号验证

let oUserTel = document.querySelector("#usertel");
oUserTel.onblur = function(){
		var str = oUserTel.value;
		var reg = /^1\d{10}$/;
		if(!reg.test(str)){
			oUserTel.style.borderColor = "red";
			// span[1].innerHTML = "输入不合法"
			flag = false;
		}else{

			 // span[1].innerHTML = "合法";
			flag = true;
		}
	}


	//密码验证
var pwd = document.getElementById("userpwd");
pwd.onblur = function(){
	var str = pwd.value;
	var reg = /^.{6,18}$/;

// 强度验证
	var _regNum = /\d+/; //字符串中包含至少一个数字
	var _regLetter = /[a-zA-Z]+/;//至少包含一个字母
	var _regChar = /[!@#$%]+/;//至少包含一个其他字符
	
	//纯
	var regNum = /^\d+$/;
	var regLetter = /^[a-zA-Z]+$/;
	var regChar = /^[!@#$%]+$/;

	if(!reg.test(str)){
		pwd.style.borderColor = "red";
		// span[2].innerHTML = "输入不合法"
		flag = false;
	}else{
		// span[1].innerHTML = "合法";
	if(regNum.test(str) || regLetter.test(str) || regChar.test(str)){
		span[2].innerHTML = "当前强度为：弱";

		}else if(_regNum.test(str) && _regLetter.test(str) && _regChar.test(str)){
		span[2].innerHTML = "当前强度为：强";

		}else{
		span[2].innerHTML = "当前强度为：中";

		}
		flag = true;
		}
	
	}
//确认密码
var qpwd = document.getElementById("qpwd");
qpwd.onblur = function(){
		var str1 = pwd.value;
		var str2 = qpwd.value;
		
		if(str1==str2){
			//span[3].innerHTML = "合法";
			flag = true;
		}else{
			qpwd.style.borderColor = "red";
			//span[3].innerHTML = "两次密码不一致";
			flag = false;
		}
	}


	//显示验证码
 var acode = document.getElementById("acode");
	var string = codeMain();
	span[4].innerHTML =string;

acode.onclick = function(){
	var string = codeMain();
	span[4].innerHTML =string;
}
function codeMain(){
		code1 = "";
		var strr ="qwertyuiopasdfghjklzxcvbnm0123456789";
		for(var i=0;i<4;i++){
			var a =  Math.floor(Math.random() * 36); 
			code1 +=strr[a];

		}
		return code1;
	}
//检查验证码是否正确
var regCode = document.getElementById("reg_code");
var codeSpan = document.getElementById("codeSpan");
regCode.onblur = function(){
		var str1 = regCode.value;
		var str2 = codeSpan.innerText;
		
		if(str1==str2){
			//span[5].innerHTML = "合法";
			flag = true;
		}else{
			regCode.style.borderColor = "red";
			//span[5].innerHTML = "验证码不正确";
			flag = false;
		}
		
	}

//用户名验证
//提交跳转至登录页面
// let regBtn = document.getElementById("btn");

// regBtn.onsubmit = function(){
// 	location.href = "login.html";
// }



oUserName.onblur = function(){
	function fun(str){

			if(str == "1"){
						span[0].innerHTML = "用户已存在！";
				}else if(str == "0"){
						// span[0].innerHTML = "该用户名可以使用！";
						// location.href = "2.html";

				}

		// console.log(str);
	}

	new Ajax({
		type:"post",
		url:"text.php",
		isAsyn:true,
		data:"username="+oUserName.value,
		callBack:fun
	}).ajax();
}


