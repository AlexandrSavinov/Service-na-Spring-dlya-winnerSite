
var bottom = document.getElementById("bottom");

var filter = document.getElementById("filter");
var form = document.getElementById("form");

var topBl = document.getElementById("top");
    console.log(form);
var topH = topBl.offsetHeight;
var botH = bottom.offsetHeight;


//window.addEventListener('scroll',function(){
//    
//   
//    console.log(window.scrollY*2.2);
//    console.log(document.documentElement.offsetHeight);
//    
//    if(window.scrollY*2.2 > document.documentElement.offsetHeight){
//        end.style.transform="translateY(0px)";
//    }
//    
//    if(window.scrollY*2.2<document.documentElement.offsetHeight-250){
//        end.style.transform="translateY(386px)";
//    }
//    
//
//});

window.addEventListener('scroll',function(){
    console.log(window.scrollY*2.59);
    console.log(document.documentElement.offsetHeight);
   
        if(window.scrollY*2.2 > topH){
        filter.style.transform="translateY(-"+topH+"px)";
        }
        
        if(window.scrollY*2.2 < topH){
        filter.style.transform="translateY(0px)";
        }
        
        if(window.scrollY+150 > document.documentElement.offsetHeight){
        form.style.transform="translateY(-"+botH+"px)";   
        }
            
            if(window.scrollY+100 < document.documentElement.offsetHeight){
        form.style.transform="translateY(0px)";
    }
        

});






var tag = document.getElementById("tag");
var tag_sroll = document.getElementById("tag_sroll");


function getValue(){
    tag.value=tag_sroll.value;
}











