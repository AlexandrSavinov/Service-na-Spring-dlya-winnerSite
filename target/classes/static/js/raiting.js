var raiting = document.getElementsByClassName("raiting");

var oneStar =     "★";
var twoStar =    "★★";
var threeStar = "★★★";
var fouhrStar ="★★★★";
var fiveStar ="★★★★★";

function setStar(star,arr){
    arr.innerHTML=star;
}
function checkAndSetStar(arr){
    var make = arr.innerHTML;
        if(make != null && make != ""){

            if(make==1){
                setStar(oneStar,arr);
            }
                if(make==2){
                setStar(twoStar,arr);
            }
                if(make==3){
                setStar(threeStar,arr);
            }
                if(make==4){
                setStar(fouhrStar,arr);
            }
                if(make==5){
                setStar(fiveStar,arr);
            }

        }else{
            setStar(fiveStar,arr);
        }
 
}

var i =0;
for(i;i<=raiting.length;i++){
    checkAndSetStar(raiting[i]);
}

