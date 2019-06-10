 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// gUl += "<li style='height:400px; width:300px;' ><a href='detail.html?"+list[i].id+"'><img style='height:300px; width:300px;' src="+list[i].img+"><p>"+list[i].info+
//       "</p><p>￥<span>"+list[i].price+"</span></p><button class='gBtn'>立即购买</button></a></li>"

 function fun(){
    for(let  i=0;i<list.length;i++){
      let gUl =$("#home-list").html();
      gUl += "<li style='height:400px; width:300px;' ><a href='detail.html?"+ list[i].id+"'><img style='height:300px; width:300px;' src="+
      list[i].img+"><p>"+list[i].info+"</p><p><span>￥"+
      list[i].price+"</span></p></a></li>"

      // <button class='gBtn'>立即购买</button>
      $("#home-list").html(gUl);
    }
  }
  fun();

// $(function(){

//   // $("header").load("base.html",function() {
    
//   // });
//   $("footer").load("footer.html",function() {
    
//   });

  
// });


