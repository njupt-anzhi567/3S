// JavaScript Document
function Setcookie (name, value)

{ 

    //设置名称为name,值为value的Cookie
    var expdate = new Date();   //初始化时间
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);   //时间
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";

   //即document.cookie= name+"="+value+";path=/";   时间可以不要，但路径(path)必须要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！~
}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return null
}

function setValueById(c_name,c_id)
{
	 //alert('sss');
	 if(getCookie(c_name)!=" ")
	 {
		 document.getElementById(c_id).value = getCookie(c_name);
		 document.getElementById(c_id).blur();
      }	
}
function setDevivceNum()
{
	if(getCookie('c_device') == null)
	{
		Setcookie('c_device','0');
		document.getElementById('currentDevice').value = getCookie('c_device');
		
	}
	else
	{
		document.getElementById('currentDevice').value =  parseInt(getCookie('c_device')) + 1 + '';
		checkDeviceNum( parseInt(getCookie('c_device')) + 1 + '' );

	}
	
	if(getCookie('deviceNumber')!=null)
	{
	  document.getElementById('sumdevice').value = getCookie('deviceNumber');
	}
	else
	{
		Setcookie('deviceNumber','1');
		document.getElementById('sumdevice').value= '1';
	}
  	
	
}
 
function checkDeviceNum(currentNumber)
{

		
	var sum = parseInt(getCookie('deviceNumber'));
	var c_sum = parseInt(currentNumber);
    if(c_sum == sum)
	{
	//	alert('最后一次添加设备！');
		Setcookie('c_device','0');
	}else
	{
		Setcookie('c_device',currentNumber);
	}
}

