// JavaScript Document
//===================================����js���� start by:songfayuan=========================================  
//�������ز�  
function ShowDiv(show_div,bg_div){  
    var scrollHeight = document.body.scrollHeight; //�ĵ��߶�  
    document.getElementById(bg_div).style.height=scrollHeight+'px';  
      
    document.getElementById(show_div).style.display='block';  
    document.getElementById(bg_div).style.display='block';  
};  
//�رյ�����  
function CloseDiv(show_div,bg_div)  
{  
    document.getElementById("label").value = '';  
    document.getElementById(show_div).style.display='none';  
    document.getElementById(bg_div).style.display='none';  
};  
//�رյ�����  
function CloseDiv2()  
{  
    document.getElementById("MyDiv").style.display='none';  
    document.getElementById("fade").style.display='none';  
};  
//===================================����js���� end by:songfayuan=========================================  