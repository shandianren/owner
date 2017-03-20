/*banner  开始*/
$(function(){
	var imgbox=getClass("imgbox")[0];
	var imgs=imgbox.getElementsByTagName("img");
	var btnbox=getClass("btnbox")[0];
	var btn=getClass("btn");
	var banner=$(".bannersmallbox")[0];
	var bannerbox=getClass("bannerbox")[0]
	var bgcolor=["#2C045D","#C002FF","#F35317","#181A4D","#23190F","#FAF4E6"]
	var a1=$(".a1")[0]
	var a2=$(".a2")[0]
	var a=0;
  var b=0;
  var flag=true;
	function lunbo(type){
    if(flag){
      flag=false;
      type=type||"right";
      if(type=="right"){
        b=a+1;
        if(b>imgs.length-1){
          b=0;
        }
      }
      if(type=="left"){
        b=a-1;
        if(b<0){
          b=imgs.length-1;
        }
      }
      animate(imgs[b],{opacity:1},500,function(){
        flag=true;
      });
      animate(imgs[a],{opacity:0},500);
      btn[a].style.background="#5c4d51";
      btn[b].style.background="#ff7128";
      bannerbox.style.background=bgcolor[b];
      a=b;
    }
  }

	var y=setInterval(lunbo,2000);
	banner.onmouseover=function(){
		clearInterval(y);
    a1.style.display="block";
    a2.style.display="block";
		
	}
	banner.onmouseout=function(){

		y=setInterval(lunbo,2000);
    a1.style.display="none";
    a2.style.display="none";
		
	}
  for(var i=0;i<btn.length;i++){
    btn[i].aa=i;
    btn[i].onmouseover=function(){
      if(flag){
        flag=false;
        if(a==this.aa){
          flag=true;
        }else{
          btn[this.aa].style.background="#ff7128";
          btn[a].style.background="#5c4d51";
          animate(imgs[this.aa],{opacity:1},500,function(){
            flag=true;
          });
          animate(imgs[a],{opacity:0},500);
          bannerbox.style.background=bgcolor[this.aa];
          a=this.aa;
        }
      }
    }  
  }
  a1.onclick=function(){
    lunbo("left");
  }
  a2.onclick=function(){
    lunbo("right");
  }

/*bannerLeft 开始*/

var bannerleft=$(".banner-left")[0];
var div=$(".bannerleft",bannerleft);
var li11=$("li",bannerleft);
for(var i=0;i<div.length;i++){
    div[i].index=i;
    div[i].onmouseover=function(){
      for(var j=0;j<div.length;j++){
        li11[j].style.display="none";
      }
      li11[this.index].style.display="block";
    }
    div[i].onmouseout=function(){
      li11[this.index].style.display="none";
    }

}

	/*bannerRight 开始*/
	var bannerRight=getClass("banner-right-top")[0];
	var toptitle=getClass("toptitle")[0];
	var bannertitle=toptitle.getElementsByTagName("li");
	var bannerconbox=getClass("topconbox")[0];
	var bannercon=bannerconbox.getElementsByTagName("li");
	for(var i=0;i<bannertitle.length;i++){
		bannertitle[i].aa=i;
		bannertitle[i].onmouseover=function(){
			for(var j=0;j<bannertitle.length;j++){
			bannertitle[j].style.borderBottom="0";
			bannertitle[j].style.fontWeight="normal";
			bannercon[j].style.display="none";
			}
			this.style.borderBottom="2px solid #ff6000";
			this.style.fontWeight="bold";
			bannercon[this.aa].style.display="block";
		}
	}

     //banner下方

     var picturebox=getClass("picturebox")[0]
     var picturebox1=getClass("picturebox1")
     var picture1=getClass("picture1")
     var a3=getClass("a3")[0]
     var a4=getClass("a4")[0]
     var width=picturebox1[0].offsetWidth
     var now=0
     var next=0

     a4.onclick=function(){
     	next=now+1
     	if(next>=picturebox1.length){
           next=0
     	}
    
     	picturebox1[next].style.left=width+"px"
         animate(picturebox1[now],{left:-width},500)
         animate(picturebox1[next],{left:0},500)
         now=next
        	
   	};

     a3.onclick=function(){
     	     	next=now-1
     	if(next<0){
           next=picturebox1.length-1
     	}
     	 picturebox1[next].style.left=-width+"px"
         animate(picturebox1[now],{left:width},500)
         animate(picturebox1[next],{left:0},500)
         now=next
     }
     picturebox.onmouseover=function(){
     	a3.style.display="block"
     	a4.style.display="block"
     }
     picturebox.onmouseout=function(){
     	a3.style.display="none"
     	a4.style.display="none"
     }

   //大牌盛宴
    var banquetconboxright=getClass("banquetconbox_right")[0]
    var wzqli=banquetconboxright.getElementsByClassName("wzq_fudong")
    var wzqp=banquetconboxright.getElementsByTagName("p")
    var dianji=banquetconboxright.getElementsByClassName("dianji")
     for (var i = 0; i < wzqli.length; i++) {
     	wzqli[i].aa=i
     	wzqli[i].onmouseover=function(){
     		for (var j = 0; j < wzqli.length; j++) {

     			wzqp[j].style.display="none"
     			wzqli[j].style.background="#fff"
     			wzqli[j].style.opacity="0"
     			dianji[j].style.display="none"
     		};
     		wzqp[this.aa].style.display="block"
     		wzqp[this.aa].style.color="#fff"
     		wzqli[this.aa].style.background="#303030"
     		wzqli[this.aa].style.opacity="0.9"
     		dianji[this.aa].style.display="block"
     		
     	}
     

     };
     for (var i = 0; i < wzqli.length; i++) {
     	wzqli[i].aa=i
     	wzqli[i].onmouseout=function(){
     		wzqli[this.aa].style.opacity="0"
     	}
     };




     //选项卡
     function tab(num){	     
     var wzqremen=$(".wzqremen")[num]
      var wzqremensan=$(".sanjiao",wzqremen)
      var wzqremen1=$(".wzqremen1",wzqremen)
      var conbox=getClass("con")[num]
      var wzqxuanxiang=$(".wzqxuanxiang",conbox)
      for (var i = 0; i < wzqremen1.length; i++) {
      	wzqremen1[i].index=i
      	wzqremen1[i].onmouseover=function(){
      		for (var j = 0; j < wzqremen1.length; j++) {
      			wzqremensan[j].style.display="none"
      			wzqxuanxiang[j].style.display="none"
      			wzqremen1[j].style.fontWeight="normal"
      			wzqremen1[j].style.color="black"

      		};
      		wzqremensan[this.index].style.display="block"
            wzqxuanxiang[this.index].style.display="block"
      	    wzqremen1[this.index].style.fontWeight="bold"
      	    wzqremen1[this.index].style.color="#8D3E18"
      	}
      };
     }
      for (var i = 0; i <11; i++) {
      	  tab(i)
      };
    

    // 轮播
     


function bb(num){
      var imgul=getClass("imgul")[num]
      var wzqlunbo=getClass("wzqlunbo")[num]
      var btnul=$(".btnul")[num]
      var imgli=$(".imgli",imgul)
      var left=$(".left")[num]
      var right=$(".right")[num]
      var btnli=$(".btnli",btnul)
      var a=0;
      var b=0;
      var flag=true;
        function aa(type){
        if(flag){
      flag=false;
      type=type||"right";
      if(type=="right"){
        b=a+1;
        if(b>imgli.length-1){
          b=0;
        }
      }
      if(type=="left"){
        b=a-1;
        if(b<0){
          b=imgli.length-1;
        }
      }
      animate(imgli[b],{opacity:1},500,function(){
        flag=true;
      });
      animate(imgli[a],{opacity:0},500);
      btnli[a].style.background="#5c4d51";
      btnli[b].style.background="#ff7128";
      a=b;
    }
}
  var y=setInterval(aa,2000);
  wzqlunbo.onmouseover=function(){
    clearInterval(y);
    left.style.display="block";
    right.style.display="block";
    
  }
   wzqlunbo.onmouseout=function(){

    y=setInterval(aa,2000);
    left.style.display="none";
    right.style.display="none";
    
  }

    for(var i=0;i<btnli.length;i++){
    btnli[i].aa=i;
    btnli[i].onmouseover=function(){
      if(flag){
        flag=false;
        if(a==this.aa){
          flag=true;
        }else{
          btnli[this.aa].style.background="#ff7128";
          btnli[a].style.background="#5c4d51";
          animate(imgli[this.aa],{opacity:1},500,function(){
            flag=true;
          });
          animate(imgs[a],{opacity:0},500);
          a=this.aa;
        }
      }
    }  
  }
right.onclick=function(){
    aa("right")
}
left.onclick=function(){
    aa("left")
}

      }
      
for (var i = 0; i < 11; i++) {
  bb(i)
};


     // 楼层跳转
     var nav=$(".nav")[0]
     var navli=$(".navli",nav)
     var wzqf1=$(".wzqf1")
     window.onscroll=function(){
      var obj=document.documentElement.scrollTop?document.documentElement:document.body
      var Top=obj.scrollTop
      if (Top>1600) {
        nav.style.display="block"
     }else{
        nav.style.display="none"
     }

        for (var i = 0; i < wzqf1.length; i++) {
      if(Top>=wzqf1[i].offsetTop-370){
        for (var j = 0; j < wzqf1.length; j++) {
        navli[j].style.background="#fff"
        };
        navli[i].style.background="#FFAA00"
          now=i
      }
      
    };
      for (var i = 0; i < navli.length; i++) {
        navli[i].index=i             
            navli[i].onmouseover=function(){
            navli[this.index].style.background="#FFAA00"
            }
            navli[i].onmouseout=function(){
           if( this.index==now){
           }else{
            navli[this.index].style.background="transparent"
           }

            }
      };

         for (var i = 0; i < wzqf1.length; i++) {
        wzqf1[i].index=i
        navli[i].onclick=function(){
              var obj=document.documentElement.scrollTop?document.documentElement:document.body
          var top=wzqf1[this.index].offsetTop
                  animate(obj,{scrollTop:top},500)
                  // obj.scrollTop=top
                  now=this.index
        }
      };

  }

// 最下层轮播1

       var ab=0;
       var bc=0;
       var al=$(".al")[0]
       var rl=$(".rl")[0]
       var concent1=$(".concent1")[0]
       var concent5=$(".concent5",concent1)
      var w=concent5[0].offsetWidth
        rl.onclick=function(){
         bc=ab+1
         if(bc>=concent5.length){
          bc=0
         }
          concent5[bc].style.left=w+"px"
         animate(concent5[ab],{left:-w},500)
         animate(concent5[bc],{left:0},500)
         ab=bc
        }
        al.onclick=function(){
          bc=ab-1
          if(bc<0){
           bc=concent5.length-1
          }
        concent5[bc].style.left=-w+"px"
         animate(concent5[ab],{left:w},500)
         animate(concent5[bc],{left:0},500)
         ab=bc
        }
        concent1.onmouseover=function(){
          al.style.display="block"
           rl.style.display="block"


        }
         concent1.onmouseout=function(){
                  al.style.display="none"
                   rl.style.display="none"
                }

     // 轮播2
          var yu=0;
          var ui=0;
          var le1=$(".le1")[0]
           var re1=$(".re1")[0]
           var concent2=$(".concent2")[0]
           
           var concent7=$(".concent7")
           var m=concent7[0].offsetWidth
           re1.onclick=function(){
            ui=yu+1
            if(ui>=concent7.length){
             ui=0
            }
             concent7[ui].style.left=m+"px"
            animate(concent7[yu],{left:-m},500)
            animate(concent7[ui],{left:0},500)
            yu=ui
           }
           le1.onclick=function(){
             ui=yu-1
             if(ui<0){
              ui=concent7.length-1
             }
           concent7[ui].style.left=-m+"px"
            animate(concent7[yu],{left:w},500)
            animate(concent7[ui],{left:0},500)
           yu=ui
           }
           concent2.onmouseover=function(){
             le1.style.display="block"
             re1.style.display="block"
           }
            concent2.onmouseout=function(){
                     le1.style.display="none"
                     re1.style.display="none"
                   }


    //猜你喜欢
     var wzqlike=getClass("wzqlike")[0]
     var wzqlike1=getClass("wzqlike1")
     var li1111=getClass("li11")
     var wzqlikeq=getClass("wzqlikeq")[0]
     var width=wzqlike1[0].offsetWidth
     var now=0
     var next=0

     wzqlikeq.onclick=function(){
     	next=now+1
     	if(next>=wzqlike1.length){
           next=0
     	}
    
     	 wzqlike1[next].style.left=width+"px"
         animate(wzqlike1[now],{left:-width},500)
         animate(wzqlike1[next],{left:0},500)
         now=next
        	
   	};

//返回顶部
	var returns=$(".return1")[0];
	var fanhui=$(".rhidden",returns)[0];
	fanhui.onclick=function(){
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		var top=obj.scrollTop;
		animate(obj,{scrollTop:0},500);
	}
 function r(a){
		var shang=$(".r3box")[a];
		var hidden=$(".rhidden",shang)[0];
		var w=getStyle($("p",hidden)[0],"width");
		var width=w;
		shang.onmouseover=function(){
			animate(hidden,{width:width},100);
		}
		shang.onmouseout=function(){
			animate(hidden,{width:0},100);
		}
	}
	for(var i=0;i<7;i++){
		r(i);
	}
	function r1(a){
		var shang=$(".r6box")[0];
		var hiddens=$(".rhidden1",shang)[0];
		var hidd=$(".rh1",hiddens)[0];
		var hidden=$("img",$(".rh1",hiddens)[0])[0];
		var w=getStyle(hidd,"width");
		var rsan=$(".rsan",shang)[0];
		var width=w;
		shang.onmouseover=function(){
			animate(hidd,{width:width},200);
			rsan.style.display="block";
		}
		shang.onmouseout=function(){
			animate(hidd,{width:0},200);
			rsan.style.display="none";
		}
	}
	for(var i=0;i<1;i++){
		r1(i);
	}

// 导航右边


function xiala(a){
		var shang=$(".wzqmy")[0];
		var hidden=$(".hidden",shang)[0];
		var h=getStyle($("li",hidden)[0],"height");
		var li=$("li",hidden).length;
		var height=h*li;
		shang.onmouseover=function(){
			animate(hidden,{height:height},100);
			shang.style.background="#fff";
			shang.style.borderColor="#eee";
			shang.style.borderBottom=0;
			hidden.style.borderColor="#eee";
			hidden.style.borderTop=0;
		}
		shang.onmouseout=function(){
			animate(hidden,{height:0},100);
			shang.style.borderColor="#f5f5f5";
			shang.style.background="#f5f5f5";
			shang.style.borderBottom=0;
			hidden.style.borderTop=0;
			hidden.style.borderColor="#fff";
		}
	}
	for(var i=0;i<1;i++){
		xiala(i);
	}




	function kuang(a){
		var shang=$(".xia")[a];
		var hidden=$(".hidden",shang)[0];
		var h=getStyle($("li",hidden)[1],"height");
		var li=Math.ceil($("li",hidden).length/2);
		var height=h*li;
		shang.onmouseover=function(){
			animate(hidden,{height:height},100);
			shang.style.background="#fff";
			shang.style.borderColor="#eee";
			shang.style.borderBottom=0;
			hidden.style.borderColor="#eee";
			hidden.style.borderTop=0;
		}
		shang.onmouseout=function(){
			animate(hidden,{height:0},100);
			shang.style.borderColor="#f5f5f5";
			shang.style.background="#f5f5f5";
			shang.style.borderBottom=0;
			hidden.style.borderTop=0;
			hidden.style.borderColor="#fff";
		}
	}
	for(var i=0;i<4;i++){
		kuang(i);
	}


// 导航左边


	function kk(a){
		var wzqnnav=$(".wzqnnav")[a];
		var hidden=$(".hidden",wzqnnav)[0];
		var h=getStyle($("li",hidden)[1],"height");
		var height=h;
		//var bottom=$(".bottom-line")[0];
		wzqnnav.onmouseover=function(){
			animate(hidden,{height:height},100);
			wzqnnav.style.background="#fff";
			wzqnnav.style.borderColor="#eee";
			hidden.style.borderColor="#eee";
		}
		wzqnnav.onmouseout=function(){
			animate(hidden,{height:0},100);
			wzqnnav.style.border="1px solid #f5f5f5";
			wzqnnav.style.background="#f5f5f5";
			hidden.style.border="1px solid #fff";
		}
	}
	for(var i=0;i<1;i++){
		kk(i);
	}

//搜索的东西
    var dianchu=$(".dianchu")[0]
    var sousuo=$(".sousuo")[0]
    var guanbi=$(".guanbi");
    sousuo.onfocus=function(){
    	dianchu.style.display="block"
    	sousuo.value=""
    }
    sousuo.onblur=function(){
    	dianchu.style.display="none"
    }
    guanbi.onclick=function(){
    	dianchu.style.display="none"
    }



}) 






