var flag=1;
var t=5;//�趨��ת��ʱ��
function timeJumpResConfig(){
	//alert(loc);
����setInterval("refer('../resourceConfig.html')",1000); //����1�붨ʱ
}
function timeJumpResStateConfig(){
	//alert(loc);
����setInterval("refer('../resStateConfig.html')",1000); //����1�붨ʱ
}
function timeJumpProfileConfig(){
	//alert(loc);
����setInterval("refer('../profileConfig.html')",1000); //����1�붨ʱ
}
function timeJumpModelConfig(){
	//alert(loc);
����setInterval("refer('../modelConfig.html')",1000); //����1�붨ʱ
}
function timeJumpGroundingConfig(){
	//alert(loc);
����setInterval("refer('/ResourceModelServlet')",1000); //����1�붨ʱ
}

function refer(loc){
	  if(flag==1){
		  ��������if(t==0){
������������location= loc; //#�趨��ת�����ӵ�ַ
            
��������}
        document.getElementById('show').innerHTML="��ϲ�㣬ע��(�޸�)��Ϣ�ɹ���"+t+"�����ת���û���¼ҳ�档"; // ��ʾ����ʱ 
��������t--; // �������ݼ� 
		  }
		else{
			document.getElementById('show').innerHTML="�����ɹ���������ͣ���ڱ�ҳ�档"; // ��ʾ����ʱ 
			}

}








function stopRefer(){
	flag = 0;
	}
