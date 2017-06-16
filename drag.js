window.onload=function(){
	var box = document.querySelector("#box").style.color="aqua";
	console.log('我是缓存区的样子');
	box.onclick=function(){
		this.innerHTML = '哈哈';
	}
}