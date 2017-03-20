//解决类名获取兼容问题：①判断浏览器类型②是现代，用原生去获取元素③如果是IE，用标签将所有元素找见，用className去和想要找的类名进行匹配，匹配成功则把这个元素保存到新数组中。
function getClass(classname,father){
	father=father||document;//给参数做默认值
	//如果father没有传参数时（undefined===>false），默认值为document;
	//如果传参数时，都为真取第一个为真的值
	//判断浏览器类型 (判断获取类名方法在不在)
	if(father.getElementsByClassName){     //是现代，用原生去获取元素
		return father.getElementsByClassName(classname)
	}else{
		//获取所有的标签元素
		var all=father.getElementsByTagName("*");
		var newarr=[];
		for(var i=0;i<all.length;i++){
			if(checkRep(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function checkRep(str,classname){
	var arr=str.split(" ");				//"one box"====>["one","box"]变成数组
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;//多个类名只要有一个是满足的，就停止匹配，并返回一个值true
		}
	}
	return false;
}
/***********************************/
//获取样式的兼容格式
function getStyle(obj,attr){/*obj=获取哪一个对象的样式，attr=属性名*/
	if(obj.currentStyle){//IE8
		return parseInt(obj.currentStyle[attr])//attr="width"
	}else{//现代
		return parseInt(getComputedStyle(obj,null)[attr]);//获取宽高无单位
	}
}
/***********************************/
//获取元素
function $(selector,father){//selector选择器
	father=father||document;
	if(typeof selector=="string"){//检测是否为字符串
		selector=selector.replace(/^\s*|\s*$/,"")//去除空白字符
		if(selector.charAt(0)=="."){
			return getClass(selector.substring(1),father);//截取
		}else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){
			return father.getElementsByTagName(selector);
		}
	}else if(typeof selector=="function"){
		//检测结果是函数，则等待文档加载完成后触发
		window.onload=function(){
			selector();
		}
	}
}
/***********************************/
//获取子节点兼容问题
function getChilds(father){
	var childs=father.childNodes;
	var newarr=[];
	for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==1){
			newarr.push(childs[i]);
		}
	}
	return newarr;
}
/***********************************/
//获取第一个子节点兼容问题
function getFirst(father){
	return getChilds(father)[0];
}
/***********************************/
//获取最后一个子节点兼容问题
function getLast(father){
	return getChilds(father)[getChilds(father).length-1];
}
/***********************************/
//获取指定位置子节点
function getNum(father,num){
	return getChilds(father)[num];
}
/***********************************/
//获取下一个兄弟节点兼容问题
function getNext(nodeObj){
	var next=nodeObj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling;//如果不是元素节点，继续找下一个兄弟节点
		if(next==null){
			return false;
		}
	}
	return next;
}
/***********************************/
//获取上一个兄弟节点兼容问题
function getPre(nodeObj){
	var pre=nodeObj.previousSibling;
	if(pre==null){
		return false;
	}
	while(pre.nodeType==3||pre.nodeType==8){
		pre=pre.previousSibling;//如果不是元素节点，继续找下一个兄弟节点
		if(pre==null){
			return false;
		}
	}
	return pre;
}
/***********************************/
//将元素插入到另一个元素之后（不用获取父元素）
function insertBefore(newObj,nowObj){
	var parent=nowObj.parentNode;
	parent.insertBefore(newObj,nowObj);
}
/***********************************/
//将元素插入到另一个元素之后
/*function insertAfter(father,newObj,nowObj){
	var next=getNext(nowObj);
	if(next){
		father.insertBefore(newObj,next);
	}else{
		father.appendChild(newObj);
	}
}*/
function insertAfter(newObj,nowObj){
	var nextSibling=getNext(nowObj);
	if(next){
		insertBefore(newObj,next);
	}else{
		nowObj.parentNode.appendChild(newObj);
	}
}