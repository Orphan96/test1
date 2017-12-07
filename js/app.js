var data = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
var list = document.createElement('li');
var bar = document.getElementById('bar');

function construct (){
  for (i=0;i<data.length;i++)
  {
        
        list.style.height=(data[i]*20)+"px";
        if (data[i]<=5) {
          list.style.background="green";
         }
         if (data[i]>5&&data[i]<10) {
          list.style.background="yellow";
         }
         if (data[i]>10) {
          list.style.background="red";
         }
        list.innerHTML=data[i]+"";
        bar.appendChild(list.cloneNode(true));



       
  }   

}
construct();

