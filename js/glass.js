
//small,mask,big为divID名称
	class Glass{
		constructor(newSmall,newMask,newBig){
			this.small = newSmall;
			this.mask = newMask;
			this.big = newBig;
		}
		//鼠标移动到small上另外两个div显示
		onmouseover(){
			let that = this;
			this.small.onmouseover = function(){
				that.big.style.display = "block";
				that.mask.style.display = "block";
			}
			
		}
		//鼠标移开small另外两个div显示
		onmouseout(){
			let that = this;
			this.small.onmouseout = function(){
				that.big.style.display = "none";
				that.mask.style.display = "none";
			}
			
		}

		onmousemove(){
			let that = this;
			this.small.onmousemove = function(evt){
				let e = evt || event;

				let left = e.clientX-this.offsetLeft-that.mask.offsetWidth/2;
				let top = e.clientY-this.offsetTop-that.mask.offsetHeight/2;
				if(left<0){
					left = 0;
				}
				let smallL = this.offsetWidth-that.mask.offsetWidth;
				if(left>smallL){
					left = smallL;
				}

				if(top<0){
					top = 0;
				}
				let smallT = this.offsetHeight-that.mask.offsetHeight;
				if(top>smallT){
					top = smallT;
				}

				that.mask.style.left = left +"px";
				that.mask.style.top = top +"px";

				let x = that.big.offsetWidth*left/that.mask.offsetWidth;
				let y = that.big.offsetHeight*top/that.mask.offsetHeight;

				 that.big.style.backgroundPositionX = -x + "px";
				 that.big.style.backgroundPositionY = -y + "px";

			}

		}
		 eventBind(){
	            this.onmouseover();
	            this.onmouseout();
	            this.onmousemove();
	        }

	}