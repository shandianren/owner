$(function(){
	var zyj_form=$(".zyj_form");
	var zyj_default=$(".zyj_default");
	var zyj_arrow=$(".zyj_arrow");
	var zyj_more=$(".zyj_more");
	for(var m=0;m<zyj_form.length;m++){
		var zyj_moreLi=$("li",zyj_more[m]);
		zyj_default[m].innerHTML=zyj_moreLi[0].innerHTML;
		for(var q=0;q<zyj_moreLi.length;q++){
			zyj_moreLi[q].onclick=function(){
				getPre(getPre(this.parentNode)).innerHTML=this.innerHTML;
				this.parentNode.style.display="none";	
			}
		}
	}
	for(var n=0;n<zyj_arrow.length;n++){
		zyj_arrow[n].index=n;
		zyj_arrow[n].flag=true;
		zyj_arrow[n].onclick=function(){
			if(this.flag){
				this.flag=false;
				zyj_more[this.index].style.display="block";
			}else{
				this.flag=true;
				zyj_more[this.index].style.display="none";			
			}
		}
	}
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