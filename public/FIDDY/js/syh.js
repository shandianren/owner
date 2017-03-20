$(function(){
	var syh_box=getClass("syh_daohangtop")[0];
	var syh_daohang=syh_box.getElementsByTagName("li");
	var syh_con=getClass("syh_con")[0];
	var syh_connr=getClass("syh_connr");
	var syh_xian1=$(".syh_d1");
	var syh_xian2=$(".syh_d2");
	var syh_xian3=$(".syh_d3");
	   for(var i=0;i<syh_daohang.length;i++){
            syh_daohang[i].index=i;
            syh_daohang[i].onclick=function(){
               for(var j=0;j<syh_connr.length;j++){
               	syh_daohang[j].style.border="none"
               	syh_daohang[j].style.marginTop="15px"
               	syh_daohang[j].style.height="60px"
               	syh_connr[j].style.display="none"
               	syh_xian1[j].style.display="none"
               	syh_xian2[j].style.display="none"
               	syh_xian3[j].style.display="none"
               }
               	syh_daohang[this.index].style.marginTop="0"
               	syh_daohang[this.index].style.border="2px solid #fff"
               	syh_daohang[this.index].style.height="80px"
               	syh_xian2[this.index].style.display="block"
               	syh_xian3[this.index].style.display="block"
               	syh_xian1[this.index].style.display="block"
               	syh_connr[this.index].style.display="block" 
            }
	   }



// 候
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
   }else if(hlj_actGrade>40&&hlj_actGrade<=90){
      hlj_actScore.style.color="#f19318";
      hlj_activeI.style.color="#f19318";
      hlj_activeI.innerHTML="活跃";
   }
   else if(hlj_actGrade>90&&hlj_actGrade<=120){
      hlj_actScore.style.color="#f45c09";
      hlj_activeI.style.color="#f45c09";
      hlj_activeI.innerHTML="很活跃";
   }
   // 候
})
	
	
