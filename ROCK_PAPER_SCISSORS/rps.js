function humanChoice(){
    var choice=parseInt(prompt());
    if(0<choice<=3){
        return choice;
        console.log(choice); 
    }else{
        console.log("Not a choice.");
        Humanchoice();
    }
    
}
function computerChoice(){
    var computerchoice=(Math.floor(Math.random()*3))+1;
    return computerchoice;
}

function compareTheScore(){

var i=0;
var hp=0;
var cp=0;
while(i<3){
    var H=humanChoice();
    var C=computerChoice();
    if(H===C){
        hp+=0;
        cp+=0;
    }else{
        if((H===1 && C===2) || (H===2 && C===3) || (H===3 && C===1)){
            cp++;
        }else{
            hp++;
        }
    }
i++;
}
if(hp>cp){
    console.log("you won");
}else{
    console.log("you lost");
}
}

compareTheScore();

