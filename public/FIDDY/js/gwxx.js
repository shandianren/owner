$(function(){
      var yq_xinxi=$(".yq_xuanxiang");
      var yq_xuanxiang=$(".yq_xuanxiang1");
      var yq_sanjiao=$(".yq_sanjiao");
      var yq_duanxuan=$(".yq_duanxuan");
      for(var i=0;i<yq_xinxi.length;i++){
      	var yq_duanxuanli=$("li",yq_duanxuan[i])
      	yq_xuanxiang[i].innerHTML=yq_duanxuanli[0].innerHTML;
      	for(var j=0;j<yq_duanxuanli.length;j++){
      		yq_duanxuanli[j].onclick=function(){
      			getPre(getPre(this.parentNode)).innerHTML=this.innerHTML;
      			this.parentNode.style.display="none";	
      		}
      	}
      }
      for(var n=0;n<yq_sanjiao.length;n++){
        yq_sanjiao[n].index=n;
      	yq_sanjiao[n].flag=true;
      	yq_sanjiao[n].onclick=function(){
      		if(this.flag){
      			this.flag=false
      			yq_duanxuan[this.index].style.display="block"
      		}else{
      			this.flag=true
      			yq_duanxuan[this.index].style.display="none"
      		}
      	}
      }

   
  var  yuan=$("#yuan")
  var yq_kai=$(".yq_kai")[0];
  


   var flag=true
     yuan.onclick=function(){
            if (flag) { 
                  flag=false;
                  yuan.style.left="61px";
                  yq_kai.innerHTML="不公开";
                  yuan.style.background="#ddd";

            }else{
                  flag=true;
                  yuan.style.left="3px";
                  yq_kai.innerHTML="公开";
                  yuan.style.background="#77ea75";

            }
      }
     /* for (var i = 0; i < li.length; i++) {
            li[i].aa=i;
            li[i].onclick=function(){
                  text=li[this.aa].innerHTML;
            }
      };
*/
  //星级评分
  var hlj_left=$(".hlj_left")[0];
  var hlj_score=$(".hlj_score",hlj_left)[0];
  var hlj_stark=$(".hlj_stark",hlj_score)[0];
  var hlj_stars=$(".hlj_stars",hlj_score)[0];
  var hlj_kongStar=$("div",hlj_stark);
  var hlj_shiStar=$("div",hlj_stars);
  var hlj_grade=$("b",hlj_score)[0].innerHTML;
  for(var h=0;h<hlj_kongStar.length;h++){
    if(hlj_grade>h&&hlj_grade<=h+1){
      for(var g=0;g<=h;g++){
        hlj_shiStar[g].style.display="block";
      }
    }
  }
  //活跃度
  var hlj_activeLi=$("li",$(".hlj_active",hlj_left)[0])[0];
  var hlj_act=$(".hlj_act",hlj_activeLi)[0];
  var hlj_width=hlj_act.offsetWidth;
  var hlj_line=$("b",hlj_act)[0];
  var hlj_actScore=$("strong",hlj_activeLi)[0];
  var hlj_actGrade=hlj_actScore.innerHTML;
  hlj_line.style.left=(hlj_actGrade/120)*106-6+"px";
  var hlj_activeI=$("i",hlj_activeLi)[0];/*
  var hlj_activeIcenter=hlj_activeI.innerHTML;*/
  if(hlj_actGrade>=0&&hlj_actGrade<=40){
    hlj_actScore.style.color="#f1c518";
    hlj_activeI.style.color="#f1c518";
    hlj_activeI.innerHTML="不活跃";
  }else if(hlj_actGrade>40&&hlj_actGrade<=80){
    hlj_actScore.style.color="#f19318";
    hlj_activeI.style.color="#f19318";
    hlj_activeI.innerHTML="活跃";
  }
  else if(hlj_actGrade>80&&hlj_actGrade<=120){
    hlj_actScore.style.color="#f45c09";
    hlj_activeI.style.color="#f45c09";
    hlj_activeI.innerHTML="很活跃";
  }
















})