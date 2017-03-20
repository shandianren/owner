/**
 * Created by 王张强 on 2017/1/5.
 */
$(function () {
    //banner图
    var sildes=$(".banner .li1");
    var state={
        current:0,
        next:1,
        direction:"right",
        timeId:null,
        liclick:false
    };
    var reader=function(){
        sildes.removeClass("active ri ro li lo");
        if(state.direction ==="right"){
            sildes.eq(state.current).addClass("ro");
            sildes.eq(state.next).addClass("active ri");
        }else if(state.direction ==="left"){
            sildes.eq(state.current).addClass("lo");
            sildes.eq(state.next).addClass("li active");
            state.current=state.next;
        }
        setsaty()
    };
    var setsaty=function(){
        state.current=state.next;
        state.next=(state.next+1>2)?0:(state.next+1);

    };
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
    };
    var timeId=setInterval(reader,2000);
    var next=function(){
        state.next=(state.current+1>2)?0:(state.current+1);
        state.direction='right';
        state.liclick=true;
        reader();
    };
    var prev=function(){
        state.next=(state.current-1<0)?2:(state.current-1);
        state.direction='left';
        state.liclick=true;
        reader();
    };

});