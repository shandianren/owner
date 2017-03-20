$(function(){
	//reflow強制
	var sildes=$(".bannerdiv .bannerul li");
	var aa=$(".anniu .k1");
//	var aa=$(".anniu .current")
var lis=$(".banner_hide li");
	var state={
		current:0,
		next:1,
		direction:"right",
		timeId:null,
		liclick:false
	}
	
	var reader=function(){
//		aa.removeClass('current').eq(state.next).addClass("current");
        aa.removeClass("kk").eq(state.next).addClass("kk")
        
		sildes.removeClass("active ri ro li lo");
		
			if(!state.liclick){
			lis.removeClass("indicators hot");
			for(var i=0;i<state.next;i++){
				lis.eq(i).addClass("hot");
			}
			lis.eq(state.next).addClass("indicators");
		}else{
			lis.removeClass("indicators hot").eq(state.next).addClass("hot");
		}
		
		
		if(state.direction ==="right"){
	    sildes.eq(state.current).addClass("ro");
		sildes.eq(state.next).addClass("active ri");
		}else if(state.direction ==="left"){
		sildes.eq(state.current).addClass("lo");
		sildes.eq(state.next).addClass("li active");
			state.current=state.next;
		}
		setsaty()
	}
     var setsaty=function(){
		state.current=state.next;
		state.next=(state.next+1>2)?0:(state.next+1);
		
	}
        var tmp;
    function doTimes(num,fn){
        if(num===0){
           return;
        }
        var count=0;
        tmp=setInterval(function(){
            count+=1;
            if(count==num){
                clearInterval(tmp)
            }
            fn();
        },200)
    }
	var handelclick=function(){
		clearInterval(timeId);
		var index=$(this).index();
		var num=Math.abs(index-state.current);  //做几次
		if(index>state.current){
            state.direction='right';
            doTimes(num,next);
        }else{
            state.direction='left';
            doTimes(num,prev);
        }
	}
	var timeId=setInterval(reader,2000);

	$('.anniu .active').on("click",handelclick);
	var next=function(){
        state.next=(state.current+1>2)?0:(state.current+1);
        state.direction='right';
        state.liclick=true;
        reader();
    }
    var prev=function(){
        state.next=(state.current-1<0)?2:(state.current-1);
        state.direction='left';
        state.liclick=true;
        reader();
    }
	
	$(".right1").on("click",function(){
		clearInterval(timeId);
		next();
	})
	$(".left1").on("click",function(){
		clearInterval(timeId);
		prev();
	})
	
	
	
	$('.search').on('click',function(e){
		$('.header-inner .nav .dh1').addClass('nav0');
		$('.sousuo').addClass('sousuo0')
		$('.fanhui').addClass('fanhui1');
		$(".mo").addClass('mo1')
		e.preventDefault();
	
})
$('.fanhui').on('click',function(e){
   e.preventDefault();
	$('.header-inner .nav .dh1').removeClass('nav0');
		$('.sousuo').removeClass('sousuo0');
		$('.fanhui').removeClass('fanhui1');
		$(".mo").removeClass('mo1')
})
$('.box').on('click',function(){
	$('.xialakuang').toggleClass('xialakuangx');
	$('.box1').toggleClass('boxb');
    $('.box2').toggleClass('boxb');
    $(".bag1").toggleClass("bagp");
})
$(".sousuo1").on("click",function(){
	$('.xialakuang').toggleClass('xialakuangy');

})
$('.box').on('click',function(){
	$('.xialakuang').removeClass('xialakuangy');
	
})	
	
	
	
	
	
	
	
	//底部
$('.f1 h3').on('click',function(){
   if($('.footer').outerWidth(true)>768){
      return;
   }
   
   $(this).next().toggleClass('chulai');
})
$('.jiahao').on('click',function(){
$(this).find('.jiahao1').toggleClass('jiahao0')
$(this).find('.jiahao2').toggleClass('jiahao0')
})	

})
