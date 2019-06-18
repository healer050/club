

let oUserName = document.querySelector("#username");
var logPwd = document.getElementById("userpwd");
var logBtn = document.getElementById("log_btn");
var flag = false;




//显示验证码


// var regCode = document.getElementById("reg_code");
// var codeSpan = document.getElementById("codeSpan");
//  acode = document.getElementById("acode");
// 	var string = codeMain();
// 	codeSpan.innerHTML =string;

// acode.onclick = function(){
// 	var string = codeMain();
// 	codeSpan.innerHTML =string;
// }
// function codeMain(){
// 		code1 = "";
// 		var strr ="qwertyuiopasdfghjklzxcvbnm0123456789";
// 		for(var i=0;i<4;i++){
// 			var a =  Math.floor(Math.random() * 36); 
// 			code1 +=strr[a];

// 		}
// 		return code1;
// 	}
// //检查验证码是否正确

// regCode.onblur = function(){
// 		var str1 = regCode.value;
// 		var str2 = codeSpan.innerText;
		
// 		if(str1==str2){
// 			//span[5].innerHTML = "合法";
// 			flag = true;
// 		}else{
// 			regCode.style.borderColor = "red";
// 			//span[5].innerHTML = "验证码不正确";
// 			flag = false;
// 		}
		
// 	}


logBtn.onclick = function(){
	function fun(str){
		let str1 = str.replace(/\s/g,'');

			if(str1 == "1"){
				// console.log(str);

				setCookie("name",oUserName.value,5);


				alert("登录成功！");
				location.href = "home.html";
			}else if(str1 == "0"){
				alert("用户名或密码不正确！");
					// location.href = "register.html";
			}
	}

	new Ajax({
		type:"post",
		url:"login.php",
		isAsyn:true,
		data:"username="+oUserName.value+"&userpwd="+logPwd.value,
		callBack:fun
	}).ajax();
}
