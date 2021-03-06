/*获取类名*/
/*
classname:类名
father:对象
farher:范围
*/
function getClass(classname,father){
	father=father||document;//undefined||document//Boolean
	if(father.getElementsByClassName){
		return father.getElementsByClassName(classname);
		 
	}else{
		var all=father.getElementsByTagName("*");
		//alert(all.length)
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
	var arr=str.split(" ");//"one","box"==>"box"
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}
/***************************************************/
/*获取样式的兼容函数
obj:获取哪一个对象
attr:属性
*/
function getStyle(obj,attr){
   if(obj.currentStyle){
       return parseInt(obj.currentStyle[attr])
   }else{
      return parseInt(getComputedStyle(obj,null)[attr])
   }
}
/************************************************/
/*2016.10.24
3.获取元素
selector：选择器
*/
function $(selector,father){
     father=father||document;
     if(typeof selector=="string"){
     	selector=selector.replace(/^\s*|\s*$/,"")
     	if(selector.charAt(0)=="."){
     		return getClass(selector.substring(1),father)
     	}else if(selector.charAt(0)=="#"){
            return document.getElementById(selector.slice(1))
     	}else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){
     		return father.getElementsByTagName(selector)
     	}
        }else if(typeof selector=="function"){
    	window.onload=function(){
    		selector()
    	}
    }
}

/*************************************************************/
/*
4、获取字节点个数
*/
function getChilds(father){
      var childs=father.childNodes
      var newarr=[]
      for (var i = 0; i < childs.length; i++) {
      	if(childs[i].nodeType==1){
      		newarr.push(childs[i])
      	}
      }
      return newarr
}


/******************************************/
// 获取第一个子节点
function getFirst(father){
      return getChilds(father)[0]
}
// 获取最后一个子节点
function getLast(father){
      return getChilds(father)[getChilds(father).length-1]
}
// 获取指定节点 Appoint:指定
function getAppoint(father,sum){
      return getChilds(father)[sum]
}
// 获取下一个兄弟节点
function getNext(nodeobj){
      var next=nodeobj.nextSibling
      if(next==null){
         return false
      }
      while(next.nodeType==3||next.nodeType==8){
      	next=next.nextSibling
      	if(next==null){
         return false
      }
      }
      return next
}
// 获取上一个兄弟节点 getPrevious:上一个
 function getPrevious(nodeobj){
  var pre=nodeobj.previousSibling
      if(pre==null){
         return false
      }
      while(pre.nodeType==3||pre.nodeType==8){
      	pre=pre.previousSibling
      	if(pre==null){
         return false
      }
      }
      return pre
 }
//将一个元素查到另一个元素之后
function insertAfter(father,newobj,nowobj){
	    var next=getNext(nowobj)
         if(next){
       return father.insertBefore(newobj,next)
         }else{
         return father.appendChild(newobj)
         }
}

function insertBefore(){
  var parent=nowobj.parentNode
  parent.insertBefore(newobj,nowobj)
}

// 事件添加的兼容问题
// //function(){//obj.addEventListener高版本浏览器
//       fun.call(obj)
//      }
//      function(){//obj.attachEvent低版本浏览器(IE)
//       fun.call(obj)    //在IE8下 this指向的是window不是obj , 用call或reply指向obj
//      }
function addEvent(obj,event,fun){
  if(obj.addEventListener){
     obj.addEventListener(event,fun,false)
  }else{
     obj.attachEvent("on"+event,fun)
  }
}
//移除事件的兼容问题
function removeEvent(obj,event,fun){
  if(obj.removeEventListener){
    obj.removeEventListener(event,fun,false)   
  }else{
    obj.detachEvent("on"+event,fun)
  }
}
// 滚轮事件封装
function mousescroll(obj,upfun,downfun){
          if(obj.addEventListener){
                obj.addEventListener("mousewheel",fun,false)
                obj.addEventListener("DOMMouseScroll",fun,false)
          }else{
            obj.attachEvent("onmousewheel",fun)
          }
          function fun(e){
            var ev=e||window.event
            // 组织浏览器的默认动作
            if(ev.preventDefault){
                   ev.preventDefault()
            }else{
              ev.returnValue=false
            }
            var direction=ev.detail||ev.wheelDelta
            if(direction==120||direction==-3){
              upfun.call(obj)

            }else if(direction==-120||direction==3){
              downfun.call(obj)
            }
          }
     
     }


     //15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }

// 小甜点cookie的设置
 function setCookie(attr,value,time){
  if(time){
    var now=new Date()
    now.setTime(now.getTime()+time*1000)
    document.cookie=attr+"="+value+";expires="+now.toGMTString()
  }else{
     document.cookie=attr+"="+value
  }
}
// 小甜点cookie的获取
function getCookie(attr){
	var cookies=document.cookie
	var arrcookie=cookies.split("; ")
	for (i=0;i<arrcookie.length;i++) {
		var brrcookie=arrcookie[i].split("=")
		if(brrcookie[0]==attr){
			return brrcookie[1]
		}
		
		
	}
	return undefined
	
}

// 小甜点cookie的删除
function delCookie(attr){
	var now=new Date()
	now.setTime=(now.getTime()-12312)
	document.cookie=attr+"=saadsad;expires="+now.toGMTString()
}

//去空
function delSpace(str,type){
	if(typeof str=="string"){
	    switch(type){
		case "^":
		var reg=/^\s*/g    //开头
		return str.replace(reg,"")
		;break;
		case "$":
		var reg=/\s*$/g    //最后
		return str.replace(reg,"")
		;break;
		case "b":
		var reg=/^\s*|\s*$/g   //两边
		return str.replace(reg,"")
		;break;
		case "all":          //全部
		var reg=/\s*/g
		return str.replace(reg,"")
		;break;
		
		
	 }
	}

}

//实现ajax
function ajax(obj){
	var url=obj.url;
	var type=obj.type||"GET";    //请求的类型
	var dataType=obj.dataType||"text";  //字符串 
	var asynch=obj.asynch==undefined?true:obj.asynch;  //异步连接
	var success=obj.success;
	var data="";
	if(obj.data){
		for(var i in obj.data){
			data+=i+"="+obj.data[i]+"&";
		}
		data=data.slice(0,-1);
	}
	var ajax=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	//创建ajax
	
	if(type=="GET"){
		ajax.open("GET",url+"?"+data,asynch);
		ajax.send(null);
	}else if(type=="POST"){
		ajax.open("POST",url,asynch);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencode");
		ajax.send(data);
	}
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4){
			if(ajax.status==200){
				if(dataType=="text"){
					if(success){
						success(ajax.responseText);
					}
				}else if(dataType=="xml"){
					if(success){
						success(ajax.responseXML);
					}
				}else if(dataType=="json"){
					if(success){
						success(eval("("+ajax.response+")"));
					}
				}
			}else if(ajax.ststus==404){
				alert("页面未找到");
			}else{
				alert("页面获取错误");
			}
		}
	}
}