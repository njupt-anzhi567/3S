/**********************************************************************************   
NewsMenu 
*   Copyright (C) 2001  Hill steven
*   This script was released at lcity.51.net
*   Visit for more great scripts!
*   This may be used and changed freely as long as this msg is intact!
*   We will also appreciate any links you could give us.
*
*   Made by Hill steven
*********************************************************************************/
function lib_bwcheck(){ //Browsercheck (needed)
	this.ver=navigator.appVersion
	this.agent=navigator.userAgent
	this.dom=document.getElementById?1:0
	this.opera5=this.agent.indexOf("Opera 5")>-1
	this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom && !this.opera5)?1:0; 
	this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom && !this.opera5)?1:0;
	this.ie4=(document.all && !this.dom && !this.opera5)?1:0;
	this.ie=this.ie4||this.ie5||this.ie6
	this.mac=this.agent.indexOf("Mac")>-1
	this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0; 
	this.ns4=(document.layers && !this.dom)?1:0;
	this.bw=(this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.opera5)
	return this
}
var bw=new lib_bwcheck()

/********************************************************************************
If you want to change the appearens on the text, background-colors, size or
anything do that in the style tag above.

This menu might not be as easy to adapt to your own site, but please
play around with it before you mail me for help...
****************************************************************************/

/***************************************************************************
Variables to set.
****************************************************************************/

//There are 2 ways these menus can be placed
// 0 = column
// 1 = row
nPlace=0


//How many menus do you have? (remember to copy and add divs in the body if you add menus)
var nNumberOfMenus=2

var nMwidth=101 //The width on the menus (set the width in the stylesheet as well)
var nPxbetween=20 //Pixels between the menus
var nFromleft=10 //The first menus left position
var nFromtop=85 //The top position of the menus
var nBgcolor='#CECFCE' //The bgColor of the bottom mouseover div 
var nBgcolorchangeto='#6380BC' //The bgColor to change to
var nImageheight=11 //The position the mouseover line div will stop at when going up!

/***************************************************************************
You shouldn't have to change anything below this
****************************************************************************/
//Object constructor
function makeNewsMenu(obj,nest){
	nest=(!nest) ? "":'document.'+nest+'.'					
   	this.css=bw.dom? document.getElementById(obj).style:bw.ie4?document.all[obj].style:bw.ns4?eval(nest+"document.layers." +obj):0;		
	this.evnt=bw.dom? document.getElementById(obj):bw.ie4?document.all[obj]:bw.ns4?eval(nest+"document.layers." +obj):0;			
	this.scrollHeight=bw.ns4?this.css.document.height:this.evnt.offsetHeight
	this.moveIt=b_moveIt;this.bgChange=b_bgChange;
	this.slideUp=b_slideUp; this.slideDown=b_slideDown;
	this.clipTo=b_clipTo;
    this.obj = obj + "Object"; 	eval(this.obj + "=this")		
}
//Objects methods
function b_moveIt(x,y){this.x=x; this.y=y; this.css.left=this.x; this.css.top=this.y}
function b_bgChange(color){if(bw.dom || bw.ie4) this.css.backgroundColor=color; else this.css.bgColor=color}
function b_clipTo(t,r,b,l){
	if(bw.ns4){this.css.clip.top=t; this.css.clip.right=r; this.css.clip.bottom=b; this.css.clip.left=l
	}else this.css.clip="rect("+t+","+r+","+b+","+l+")";
}
function b_slideUp(ystop,moveby,speed,fn,wh){
	if(!this.slideactive){
		if(this.y>ystop){
			this.moveIt(this.x,this.y-5); eval(wh)
			setTimeout(this.obj+".slideUp("+ystop+","+moveby+","+speed+",'"+fn+"','"+wh+"')",speed)
		}else{
			this.slideactive=false; this.moveIt(0,ystop); eval(fn)
		}
	}
}
function b_slideDown(ystop,moveby,speed,fn,wh){
	if(!this.slideactive){
		if(this.y<ystop){
			this.moveIt(this.x,this.y+5); eval(wh)
			setTimeout(this.obj+".slideDown("+ystop+","+moveby+","+speed+",'"+fn+"','"+wh+"')",speed)
		}else{
			this.slideactive=false; this.moveIt(0,ystop); eval(fn)
		}
	}
}
//Initiating the page, making cross-browser objects
function newsMenuInit(){
	oTopMenu=new Array()
	zindex=10
	for(i=0;i<=nNumberOfMenus;i++){
		oTopMenu[i]=new Array()
		oTopMenu[i][0]=new makeNewsMenu('divTopMenu'+i)
		oTopMenu[i][1]=new makeNewsMenu('divTopMenuBottom'+i,'divTopMenu'+i)
		oTopMenu[i][2]=new makeNewsMenu('divTopMenuText'+i,'divTopMenu'+i)
		oTopMenu[i][1].moveIt(0,nImageheight)
		oTopMenu[i][0].clipTo(0,nMwidth,nImageheight+3,0)
		if(!nPlace) oTopMenu[i][0].moveIt(i*nMwidth+nFromleft+(i*nPxbetween),nFromtop)
		else{
			oTopMenu[i][0].moveIt(nFromleft,i*nImageheight+nFromtop+(i*nPxbetween))
			oTopMenu[i][0].css.zIndex=zindex--
		}
		oTopMenu[i][0].css.visibility="visible"
	}
}
//Moves the menu
function topMenu(num){
	if(oTopMenu[num][1].y==nImageheight) oTopMenu[num][1].slideDown(oTopMenu[num][2].scrollHeight+20,10,40,'oTopMenu['+num+'][0].clipTo(0,nMwidth,oTopMenu['+num+'][1].y+3,0)','oTopMenu['+num+'][0].clipTo(0,nMwidth,oTopMenu['+num+'][1].y+3,0)')
	else if(oTopMenu[num][1].y==oTopMenu[num][2].scrollHeight+20) oTopMenu[num][1].slideUp(nImageheight,10,40,'oTopMenu['+num+'][0].clipTo(0,nMwidth,oTopMenu['+num+'][1].y+3,0)','oTopMenu['+num+'][0].clipTo(0,nMwidth,oTopMenu['+num+'][1].y+3,0)')
}
//Changes background onmouseover
function menuOver(num){oTopMenu[num][1].bgChange(nBgcolorchangeto)}
function menuOut(num){oTopMenu[num][1].bgChange(nBgcolor)}

//Calls the init function onload
onload=newsMenuInit;
// JavaScript Document