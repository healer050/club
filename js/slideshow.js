

class SlideShow{
	constructor(newImg,newLis,newBox){
		this.oimg = newImg;
		this.olis = newLis;
		this.obox = newBox;
		this.index = 0;
		// this.olis[this.index].style.background ="red";
		// this.obox.style.background ="url(img/"+this.index+".jpg)";

	}
	//设置li点击颜色变化
	setLiColor(){
		for(let i = 0;i<this.olis.length;i++){
			if(i == this.index){
				this.olis[i].style.background ="red";

			}else{
				this.olis[i].style.background = "#fff";
			}
		}
	}

	//设置背景图切换
	setBackgroundImg(){
		//this.obox.style.background ="url(img/"+this.index+".jpg)";
		this.obox.="url(img/"+this.index+".jpg)";
	}

	//设置右边按钮切换效果
	setBtnRight(){
		this.index++;
		if(this.index == this.olis.length){
			this.index = 0;
			this.setLiColor();
			this.setBackgroundImg();

		}
			this.setLiColor();
			this.setBackgroundImg();

		
	}
	//设置左边按钮切换效果

	setBtnLeft(){
		this.index--;
		if(this.index == -1){
			this.index = 4;
		}
			this.setLiColor();
			this.setBackgroundImg();
		
	}	
	//btn点击事件
	btnOnclick(){
		let btn2 =document.querySelector("#btn2");
		let btn1 =document.querySelector("#btn1");
		let that = this;
		btn2.onclick = function(){
			that.setBtnRight();

		}
		btn1.onclick = function(){
			that.setBtnLeft();

		}
	}

	//lis点击事件
	liOnclick(){
		for(let i = 0;i<this.olis.length;i++){
			let that  = this;
			this.olis[i].onclick = function(){
				that.index = i;
				that.setLiColor();
				that.setBackgroundImg();
			}
		}

	}


	setTimer(){
		let box = document.getElementById("box");
		let timer =null;
		let that = this;
		clearInterval(timer)
		timer = setInterval(function(){
				that.setBtnRight();
		},2000);
		box.onmouseover = function(){
			clearInterval(timer);
		}
		box.onmouseout = function(){
			timer = setInterval(function(){
				that.setBtnRight();
		},2000);
		}
	}


}

let lis = document.getElementsByTagName("li");
let box = document.querySelector("#box");
//let slide = new SlideShow(lis,box);
let slide = new SlideShow(["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg",],lis,box);

slide.btnOnclick();
slide.liOnclick();
slide.setTimer();
