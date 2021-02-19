var in_bl = document.getElementById("in_bl");
var animDote = document.getElementById("animDote");
//var child = animDote.children;
var left = 0;
var i=1;
var j=0;

setInterval(function(){
    left-=100;
    in_bl.style.marginLeft = left+"%";
//    console.log(111);
    if(left==-500){
       in_bl.style.marginLeft = "0";
        left=0;
       }
    
    if(in_bl.style.marginLeft==-100){
        console.log(in_bl.style.marginLeft);
    }
    

},3500);


setInterval(function(){
    
     child[i].classList.add("mainDote");
    i++;
    
    child[j].classList.remove("mainDote");
     j++;
    if(i>4){
       i=0;
       }
    
    
    if(j>4){
       j=0;
       }
    console.log(111);
},1000);

