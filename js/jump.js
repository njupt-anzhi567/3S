var flag=1;
var t=5;//设定跳转的时间
function timeJumpResConfig(){
	//alert(loc);
　　setInterval("refer('../resourceConfig.html')",1000); //启动1秒定时
}
function timeJumpResStateConfig(){
	//alert(loc);
　　setInterval("refer('../resStateConfig.html')",1000); //启动1秒定时
}
function timeJumpProfileConfig(){
	//alert(loc);
　　setInterval("refer('../profileConfig.html')",1000); //启动1秒定时
}
function timeJumpModelConfig(){
	//alert(loc);
　　setInterval("refer('../modelConfig.html')",1000); //启动1秒定时
}
function timeJumpGroundingConfig(){
	//alert(loc);
　　setInterval("refer('/ResourceModelServlet')",1000); //启动1秒定时
}

function refer(loc){
	  if(flag==1){
		  　　　　if(t==0){
　　　　　　location= loc; //#设定跳转的链接地址
            
　　　　}
        document.getElementById('show').innerHTML="恭喜你，注册(修改)信息成功！"+t+"秒后跳转回用户登录页面。"; // 显示倒计时 
　　　　t--; // 计数器递减 
		  }
		else{
			document.getElementById('show').innerHTML="操作成功，将继续停留在本页面。"; // 显示倒计时 
			}

}








function stopRefer(){
	flag = 0;
	}
