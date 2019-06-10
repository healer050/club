




class Ajax{

	constructor(newObj){
		this.obj = newObj;

	}

	// ajax(){
	// 	//1.创建对象 通过兼容模式
	// 	let xhr;
	// 	if(window.ActiveXObject){
	// 		xhr = new ActiveXObject("Microsoft.XMLHttp");

	// 	}else{
	// 		xhr = new XMLHttpRequest();
	// 	}

	// 	this.obj.type = this.obj.type.toLowerCase();

	// 	if(this.obj.type =="get"){
	// 		let urlParam = this.obj.url;
	// 		urlParam += "?" +this.obj.data;
	// 		xhr.open(this.obj.type,urlParam,this.obj.isAsyn);
	// 		xhr.send();
	// 	}else if(this.obj.type == "post"){
	// 		xhr.open(this.obj.type,this.obj.url,this.obj.isAsyn);
	// 		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// 		xhr.send(this.obj.data);
	// 	}

	// 	let that = this;
	// 	xhr.onreadystatechange = function(){
	// 		if(xhr.readyState == 4 && xhr.status == 200){
	// 			that.obj.callBack(xhr.responseText);
	// 		}
	// 	}

	// }


	ajax(){
			//1.创建XMLHttpRequest对象
			let xhr;
		    if (window.ActiveXObject) {
		        //ie
		        xhr = new ActiveXObject("Microsoft.XMLHttp");
		    } else {
		        //非ie
		        xhr =  new XMLHttpRequest();
		    }
			
			this.obj.type = this.obj.type.toLowerCase();
			
			if(this.obj.type=="get"){
				let urlParam = this.obj.url;
				if(this.obj.data != ""){
					urlParam += "?" + this.obj.data;
				}
				xhr.open(this.obj.type,urlParam,this.obj.isAsyn);
				xhr.send();
			}else if(this.obj.type == "post"){
				xhr.open(this.obj.type,this.obj.url,this.obj.isAsyn);
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				xhr.send(this.obj.data);
			}
			
			let that = this;
			xhr.onreadystatechange = function(){
				if(xhr.status == 200 && xhr.readyState == 4){
					that.obj.callBack(xhr.responseText);
				}
			}
		}
}