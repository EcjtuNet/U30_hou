/*
 * autor:小波 2016-8-5
 */

//左侧列表切换
(function(){
	var liElements=document.querySelectorAll(".nav-list > li");
	var list_a=document.querySelectorAll(".nav-list > li > a");
	for(var i=0;i<liElements.length;i++){
		liElements[i].addEventListener("click",function(e){
			var list_a=document.querySelectorAll(".nav-list > li");
			for(var i=0;i<list_a.length;i++){
				var list=liElements[i].classList;
				list.remove("active");
			}
			var list=this.classList;
			list.toggle("active");
		});
	}
})();

//文章删除
(function(){
	var tr=document.querySelectorAll("#arctic > tr");
	var deletes=document.querySelectorAll(".delete");
	for(var i=0;i<deletes.length;i++){
		deletes[i].setAttribute("data-i",i);
		deletes[i].addEventListener("click",function(e){
			tr[this.dataset["i"]].innerHTML="";
			e.preventDefault();
		});	
	}
})();

//一二级菜单关联
var timer_select=window.setInterval(function(){
	var select1=document.querySelector("#first_select");
	var options=document.querySelectorAll("#first_select > option");
	var selects=document.querySelectorAll("#second_select > select");
	for(var i=0;i<options.length;i++){
		selects[i].setAttribute("data-title",options[i].value);
		var list=selects[i].classList;
		list.add("hide_select");
	}
	for(var i=0;i<selects.length;i++){
		if(select1.value==selects[i].dataset["title"]){
			var list=selects[i].classList;
			list.remove("hide_select");
			list.add("show_select");
		}
	}
},100);

//级联图片和input
(function(){
	var inputFile=document.querySelector("#input_file");
	var btnSelect=document.querySelector("#btn_select");
	btnSelect.addEventListener("click",function(){
		//在按钮点击时，调用input的点击事件
		inputFile.click();
	});
})();

//密码二次输入
(function(){
	var password1=document.querySelector("#password1");
	var password2=document.querySelector("#password2");
	var btnReset=document.querySelector("#btn_reset");
	password1.addEventListener("change",function(){
		var list=password2.classList;
		list.remove("hidden");
	});
	btnReset.addEventListener("click",function(){
		var list=password2.classList;
		list.add("hidden");
	});
})();