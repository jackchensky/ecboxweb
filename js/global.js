// 菜单当前页面的样式
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}  
  
// 菜单当前页面的样式
function highlightPage(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementsById) return false;
	var headers = document.getElementsById('header');
	if (headers.length == 0) return false;
	var navs = headers[0].getElementsById('headnav');
	if (navs.length == 0) return false;
	var links = navs[0].getElementsByTagName("a");
	var linkurl;
	for (var i=0; i<links.length; i++) {
		linkurl = links[i].getAttribute("href");
		if (window.location.href.indexOf(linkurl) != -1) {
			links[i].className = "here";
		}
	}
}
addLoadEvent(highlightPage);
