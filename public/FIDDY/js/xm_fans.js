$(function(){
	var xmboximg=$(".xm_boximg");
	var xmquxiao=$(".xm_quxiao",xmquxiao);
	var quxiao=$(".xm_onclick");
	function move(num){
		quxiao[num].onclick=function(){
			xmboximg[num].style.display="none";
		}
	}
	for(var i=0;i<quxiao.length;i++){
		move(i)
		}
	

})