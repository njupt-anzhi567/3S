// JavaScript Document
/**
 * Created by rayootech on 16/8/12.
 */
var containHtml;

/**
 * 带输入框的弹框
 */
<!--自定义提示标题,内容,单个按钮事件-->
$.fn.showInputAlert = function(callback){
    if(typeof(callback)=="function") {
        showInputView(callback);
    }
}

<!--自定义输入框,一个按钮事件-->
function showInputView(callback){
    if(containHtml)return;
    containHtml = '<div class="cover"><div id="tipView"> <div id="tv_title"></div><div id="tv_content"><input type="text"></div><div><button id="tv_sureBtn">确定</button></div> </div></div>';
    $(document).find("body").append(containHtml);
    $(".cover").css({background: "rgba(0,0,0,0.5)",position: "fixed", top: "0", left: "0", width: "100%",height: "100%"});
    $("#tipView").css({position:"fixed","padding-bottom": "15px",left:"30px",right:"30px","border-radius":"8px", "box-shadow":"0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1)",bottom:"50%","margin-bottom":"-30px","background-color":"#fff","text-align":"center","z-index": "1000"});
    $("#tv_title").css({"background-color":"#f3f3f3","border-top-left-radius":"8px","border-top-right-radius":"8px",height: "2.5em","line-height":"2.6em","text-align": "center","font-size": "16px"});
    $("#tv_content").css({"margin":"10px 10px 15px 10px","height": "40px"});
    $("#tv_content").find("input").css({display: "block",width: "calc(100% - 20px)",height: "100%","border": "0.5px solid lightgray","padding":" 0 10px 0 10px","font-size": "16px"});
    $("#tv_sureBtn").css({"background-color": "#f44c48",color:"#fff",width:"100px","line-height":"35px","font-size":"14px","border-radius":"6px"});
    showInput("提示",callback);
    $(".cover").bind("click",removeFromSuperDiv);
    $("#tipView").bind("click",function(event){
       event.stopPropagation();
    });
}

<!--显示提示-->
function showInput(title,callback) {
    $("#tv_title").text(title);
    $("#tv_sureBtn").click(function () {
        if(callback){
            var text= $("#tv_content").find("input").val();
            callback(text);
        }
        removeFromSuperDiv();
    });
}


/**
 * 带按钮的弹框
 */
<!--自定义提示标题,内容,单个按钮事件-->
$.fn.showAlert = function(content,callback,singleButton){
    if(typeof(content)=="string"){
        if(callback){
            if(singleButton){
                alert("内容加function两个按钮");
                showDouble(content,callback);
            }else{
                alert("内容加function一个按钮");
                showSingle(content);
            }
            return;
        }
        showSingle(content);
    }
}

<!--自定义内容,两个个按钮事件-->
function showDouble(content,callback){
    if(containHtml)return;
    containHtml = '<div class="cover"><div id="tipView"> <div id="tv_title"></div> <div id="tv_content"></div><div> <button id="tv_cancleBtn">取消</button><button id="tv_sureBtn">确定</button></div> </div></div>';
    $(document).find("body").append(containHtml);
    $(".cover").css({background: "rgba(0,0,0,0.5)",position: "fixed", top: "0", left: "0", width: "100%",height: "100%"});
    $("#tipView").css({position:"fixed","padding-bottom": "15px",left:"30px",right:"30px","border-radius":"8px", "box-shadow":"0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1)",bottom:"50%","margin-bottom":"-30px","background-color":"#fff","text-align":"center","z-index": "1000"});
    $("#tv_title").css({"background-color":"#f3f3f3","border-top-left-radius":"8px","border-top-right-radius":"8px",height: "2.5em","line-height":"2.6em","text-align": "center","font-size": "16px"});
    $("#tv_content").css({"margin-top":"10px","margin-right": "20px","margin-left": "10px","font-size":"15px",margin:"10px 10px 0p", display:"-webkit-box","display":"-ms-flexbox",display:"-webkit-flex",display:"flex","-webkit-box-pack":"center","-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center","-webkit-box-align":"center","-ms-flex-align":"center","-webkit-align-items":"center","margin-bottom":"15px"});
    $("#tv_cancleBtn").css({"background-color": "#f44c48",color:"#fff",width:"100px","line-height":"35px","font-size":"14px","border-radius":"6px","margin-right":"30px"});
    $("#tv_sureBtn").css({"background-color": "#f44c48",color:"#fff",width:"80px","line-height":"35px","font-size":"14px","border-radius":"6px"});
    showTips("提示",content,callback);
    $(".cover").bind("click",removeFromSuperDiv);
    $("#tipView").bind("click",function(event){
        event.stopPropagation();
    });
}

<!--只显示提示内容-->
function showSingle(content){
    if(containHtml)return;
    containHtml = '<div class="cover"><div id="tipView"> <div id="tv_title"></div> <div id="tv_content"></div> <div id="tv_sureBtn">确定</div> </div></div>';
    $(document).find("body").append(containHtml);
    $(".cover").css({background: "rgba(0,0,0,0.5)",position: "fixed", top: "0", left: "0", width: "100%",height: "100%"});
    $("#tipView").css({position:"fixed","padding-bottom": "15px",left:"30px",right:"30px","border-radius":"8px", "box-shadow":"0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1)",bottom:"50%","margin-bottom":"-30px","background-color":"#fff","text-align":"center","z-index": "1000"});
    $("#tv_title").css({"background-color":"#f3f3f3","border-top-left-radius":"8px","border-top-right-radius":"8px",height: "2.5em","line-height":"2.6em","text-align": "center","font-size": "16px"});
    $("#tv_content").css({"margin-top":"10px","margin-right": "20px","margin-left": "10px","font-size":"15px",margin:"10px 10px 0p", display:"-webkit-box","display":"-ms-flexbox",display:"-webkit-flex",display:"flex","-webkit-box-pack":"center","-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center","-webkit-box-align":"center","-ms-flex-align":"center","-webkit-align-items":"center","margin-bottom":"15px"});
    $("#tv_sureBtn").css({"background-color": "#f44c48",color:"#fff",width:"100px","line-height":"35px","font-size":"14px","border-radius":"6px","margin": "0 auto"});
    showTips("提示",content,null);
    $(".cover").bind("click",removeFromSuperDiv);
    $("#tipView").bind("click",function(event){
        event.stopPropagation();
    });
}

<!--显示提示-->
function showTips(title,content,callback) {
    if(!content||content=="")return;
    $("#tv_title").text(title);
    $("#tv_content").text(content);
    $("#tv_sureBtn").click(function () {
        if(callback)callback();
        removeFromSuperDiv();
    });
    $("#tv_cancleBtn").click(function () {
        removeFromSuperDiv();
    });
}

<!--移除弹框-->
function removeFromSuperDiv(){
    $(".cover").remove();
    containHtml=null;
}

$().showAlert("我很好的的哈哈哈",function(){
  alert("回来了");
  },true);