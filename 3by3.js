var allSrc = ["gsd.png","dalma.png","lab.png","pit.png","pood.png","rott.jpg","rtvr.png","saint.jpg","gsd.png","dalma.png","lab.png","pit.png","pood.png","rott.jpg","rtvr.png","saint.jpg"]
var newVar = [];
var finalSrcArr = [];
var clickedid = "";
var clickarr = [];
var countt=0;
var buffer ="";
var contasntkeep = [];
var pointcount = 0;
var pplayer1 = 0;
var pplayer2 = 0;
var counter = 0;

function startgame2(){
    // window.open(url,"3by3.html")
    window.location.replace("index.html");
    document.getElementsByClassName("back").disabled = true;
    }

do{
    var rnum =  Math.floor(Math.random()*allSrc.length);
    var grab = allSrc[rnum];
    let spliced = allSrc.splice(rnum,1);
    newVar.push(grab);
    console.log(newVar);
} while(newVar.length != 16);
function matching (clickedid){
    for(var i =0 ;i<1;i++){
        clickarr.push(clickedid)
        console.log(clickarr)
       
    }
    
   window.matchid = clickedid;
}


 var arrayForElement = ["first","second","third","forth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelth","thirteen","fourteen","fifteen","sixteen"];
function reset(){
counter++;
// count%2 = 0;
var src1=document.getElementById(clickarr[0]).getAttribute("src");

var src2=document.getElementById(clickarr[1]).getAttribute("src");
if(src1 === src2){
    var constantkept1 =clickarr[0]
    var constantkept2 = clickarr[1]
    contasntkeep.push(constantkept1)
    contasntkeep.push(constantkept2)
    document.getElementById(clickarr[0]).src = "check.png";
   
    document.getElementById(clickarr[1]).src = "check.png"
    var randomremove = clickarr.splice(0,2);
    pointcount++
    if(counter%2 == 0){
        pplayer2++;
        document.getElementById("player2").innerHTML = pplayer2;
        
    }
    else if (counter%2 == 1){
        pplayer1++;
        document.getElementById("player1").innerHTML = pplayer1;
    }
   
    
}


if(contasntkeep.length == 16){
    
    
    if(pplayer1>pplayer2){
        document.getElementById("result").innerHTML = "PLAYER 1"
        document.getElementById("grandfinale").classList.add('show');
    }
    else{
        document.getElementById("result").innerHTML = "PLAYER 2"
        document.getElementById("grandfinale").classList.add('show');
    }
    
   
    console.log("hello")


}

else if(src1 != src2){
    var randomremove = clickarr.splice(0,2);


for (var i =0;i<16;i++){
document.getElementById(arrayForElement[i]).src = "stagnant.png" ;

}
for(var j=0;j<contasntkeep.length;j++){
document.getElementById(contasntkeep[j]).src = "check.png";


}


}
}



console.log(contasntkeep)





    
    // var elementvl = document.getElementById(clickedid).getAttribute("src");
    // finalSrcArr.push(elementvl);
    // console.log(finalSrcArr);
    // for(j=0;j<2;j++){
    // if (finalSrcArr[0] ==  finalSrcArr[1]){
    
         
    //  }
    // }}
    
function flip(clickid2){
   console.log(clickid2)
    document.getElementById(clickid2).src = pair[clickid2];
    count++;
    console.log(count);
    if (count%2 == 0){
        var sett = setTimeout(reset,1000)

        // document.getElementsByClassName("item").removeEventListener("click",normal)
    }
   
}

let count = 0;
var pair ={
    "first": newVar[0]
    ,"second":newVar[1]
    ,"third":newVar[2]
    ,"forth":newVar[3]
    ,"fifth":newVar[4]
    ,"sixth":newVar[5]
    ,"seventh":newVar[6]
    ,"eighth":newVar[7]
    ,"ninth":newVar[8]
    ,"tenth":newVar[9]
    ,"eleventh":newVar[10]
    ,"twelth":newVar[11]
    ,"thirteen":newVar[12]
    ,"fourteen":newVar[13]
    ,"fifteen":newVar[14]
    ,"sixteen":newVar[15]
}

function returnHome(){
    window.location.replace("index.html");
}

