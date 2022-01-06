let temp= document.querySelector(".random");
let sound=document.getElementById('click');
var count=0;
temp.addEventListener("click",()=>
{
    change();
    audio();
    counter();
});
let maxw = temp.parentElement.clientWidth - 100;
let maxh = temp.parentElement.clientHeight - 100;
function change(){
    let posx = Math.floor(Math.random() * (maxw));
    let posy = Math.floor(Math.random() * (maxh))
    temp.style.left= posx + "px";
    temp.style.top= posy+ "px";

   
}
function audio(){
    sound.play();
}

function counter(){
    count=count+1;
    document.getElementById("display").innerHTML=count;
    if(count==30){
        alert("30 Targets hit")
        count=0;
    }
}



