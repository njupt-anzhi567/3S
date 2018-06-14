// JavaScript Document
//===================================弹框js部分 start by:songfayuan=========================================  
//弹出隐藏层  
function ShowDiv(show_div,bg_div){  
    var scrollHeight = document.body.scrollHeight; //文档高度  
    document.getElementById(bg_div).style.height=scrollHeight+'px';  
      
    document.getElementById(show_div).style.display='block';  
    document.getElementById(bg_div).style.display='block';  
};  
//关闭弹出层  
function CloseDiv(show_div,bg_div)  
{  
    document.getElementById("label").value = '';  
    document.getElementById(show_div).style.display='none';  
    document.getElementById(bg_div).style.display='none';  
};  
//关闭弹出层  
function CloseDiv2()  
{  
    document.getElementById("MyDiv").style.display='none';  
    document.getElementById("fade").style.display='none';  
};  
//===================================弹框js部分 end by:songfayuan=========================================  