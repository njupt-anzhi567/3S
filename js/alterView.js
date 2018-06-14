// JavaScript Document
/**
 * Created by rayootech on 16/8/12.
 */
var containHtml;

/**
 * �������ĵ���
 */
<!--�Զ�����ʾ����,����,������ť�¼�-->
$.fn.showInputAlert = function(callback){
    if(typeof(callback)=="function") {
        showInputView(callback);
    }
}

<!--�Զ��������,һ����ť�¼�-->
function showInputView(callback){
    if(containHtml)return;
    containHtml = '<div class="cover"><div id="tipView"> <div id="tv_title"></div><div id="tv_content"><input type="text"></div><div><button id="tv_sureBtn">ȷ��</button></div> </div></div>';
    $(document).find("body").append(containHtml);
    $(".cover").css({background: "rgba(0,0,0,0.5)",position: "fixed", top: "0", left: "0", width: "100%",height: "100%"});
    $("#tipView").css({position:"fixed","padding-bottom": "15px",left:"30px",right:"30px","border-radius":"8px", "box-shadow":"0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1)",bottom:"50%","margin-bottom":"-30px","background-color":"#fff","text-align":"center","z-index": "1000"});
    $("#tv_title").css({"background-color":"#f3f3f3","border-top-left-radius":"8px","border-top-right-radius":"8px",height: "2.5em","line-height":"2.6em","text-align": "center","font-size": "16px"});
    $("#tv_content").css({"margin":"10px 10px 15px 10px","height": "40px"});
    $("#tv_content").find("input").css({display: "block",width: "calc(100% - 20px)",height: "100%","border": "0.5px solid lightgray","padding":" 0 10px 0 10px","font-size": "16px"});
    $("#tv_sureBtn").css({"background-color": "#f44c48",color:"#fff",width:"100px","line-height":"35px","font-size":"14px","border-radius":"6px"});
    showInput("��ʾ",callback);
    $(".cover").bind("click",removeFromSuperDiv);
    $("#tipView").bind("click",function(event){
       event.stopPropagation();
    });
}

<!--��ʾ��ʾ-->
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
 * ����ť�ĵ���
 */
<!--�Զ�����ʾ����,����,������ť�¼�-->
$.fn.showAlert = function(content,callback,singleButton){
    if(typeof(content)=="string"){
        if(callback){
            if(singleButton){
                alert("���ݼ�function������ť");
                showDouble(content,callback);
            }else{
                alert("���ݼ�functionһ����ť");
                showSingle(content);
            }
            return;
        }
        showSingle(content);
    }
}

<!--�Զ�������,��������ť�¼�-->
function showDouble(content,callback){
    if(containHtml)return;
    containHtml = '<div class="cover"><div id="tipView"> <div id="tv_title"></div> <div id="tv_content"></div><div> <button id="tv_cancleBtn">ȡ��</button><button id="tv_sureBtn">ȷ��</button></div> </div></div>';
    $(document).find("body").append(containHtml);
    $(".cover").css({background: "rgba(0,0,0,0.5)",position: "fixed", top: "0", left: "0", width: "100%",height: "100%"});
    $("#tipView").css({position:"fixed","padding-bottom": "15px",left:"30px",right:"30px","border-radius":"8px", "box-shadow":"0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1)",bottom:"50%","margin-bottom":"-30px","background-color":"#fff","text-align":"center","z-index": "1000"});
    $("#tv_title").css({"background-color":"#f3f3f3","border-top-left-radius":"8px","border-top-right-radius":"8px",height: "2.5em","line-height":"2.6em","text-align": "center","font-size": "16px"});
    $("#tv_content").css({"margin-top":"10px","margin-right": "20px","margin-left": "10px","font-size":"15px",margin:"10px 10px 0p", display:"-webkit-box","display":"-ms-flexbox",display:"-webkit-flex",display:"flex","-webkit-box-pack":"center","-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center","-webkit-box-align":"center","-ms-flex-align":"center","-webkit-align-items":"center","margin-bottom":"15px"});
    $("#tv_cancleBtn").css({"background-color": "#f44c48",color:"#fff",width:"100px","line-height":"35px","font-size":"14px","border-radius":"6px","margin-right":"30px"});
    $("#tv_sureBtn").css({"background-color": "#f44c48",color:"#fff",width:"80px","line-height":"35px","font-size":"14px","border-radius":"6px"});
    showTips("��ʾ",content,callback);
    $(".cover").bind("click",removeFromSuperDiv);
    $("#tipView").bind("click",function(event){
        event.stopPropagation();
    });
}

<!--ֻ��ʾ��ʾ����-->
function showSingle(content){
    if(containHtml)return;
    containHtml = '<div class="cover"><div id="tipView"> <div id="tv_title"></div> <div id="tv_content"></div> <div id="tv_sureBtn">ȷ��</div> </div></div>';
    $(document).find("body").append(containHtml);
    $(".cover").css({background: "rgba(0,0,0,0.5)",position: "fixed", top: "0", left: "0", width: "100%",height: "100%"});
    $("#tipView").css({position:"fixed","padding-bottom": "15px",left:"30px",right:"30px","border-radius":"8px", "box-shadow":"0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1), 0 0 10px 5px rgba(0, 0, 0, .1)",bottom:"50%","margin-bottom":"-30px","background-color":"#fff","text-align":"center","z-index": "1000"});
    $("#tv_title").css({"background-color":"#f3f3f3","border-top-left-radius":"8px","border-top-right-radius":"8px",height: "2.5em","line-height":"2.6em","text-align": "center","font-size": "16px"});
    $("#tv_content").css({"margin-top":"10px","margin-right": "20px","margin-left": "10px","font-size":"15px",margin:"10px 10px 0p", display:"-webkit-box","display":"-ms-flexbox",display:"-webkit-flex",display:"flex","-webkit-box-pack":"center","-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center","-webkit-box-align":"center","-ms-flex-align":"center","-webkit-align-items":"center","margin-bottom":"15px"});
    $("#tv_sureBtn").css({"background-color": "#f44c48",color:"#fff",width:"100px","line-height":"35px","font-size":"14px","border-radius":"6px","margin": "0 auto"});
    showTips("��ʾ",content,null);
    $(".cover").bind("click",removeFromSuperDiv);
    $("#tipView").bind("click",function(event){
        event.stopPropagation();
    });
}

<!--��ʾ��ʾ-->
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

<!--�Ƴ�����-->
function removeFromSuperDiv(){
    $(".cover").remove();
    containHtml=null;
}

$().showAlert("�ҺܺõĵĹ�����",function(){
  alert("������");
  },true);