var isStarting= false;
        //     0         1     2          3
var colors=["green", "red", "yellow", "blue"];
var i=0;
var chosenSequence=[]; //gamepattern
var mySeq=[];  //userclickedpattern

$(document).on("keypress",function(){
    if(!isStarting){
    $("h1").text("Level "+i)
    nextSequence();
    isStarting= true;
    }
});



$(".btn").on("click",function(){

    var btnValue= this.getAttribute("id");
    mySeq.push(btnValue); 
    
    makeSound(btnValue);
    animate(btnValue);
    checkAnswer(mySeq.length-1);
    
});

function checkAnswer(currentLevel){

    
    if(mySeq[currentLevel] === chosenSequence[currentLevel]){
        if(mySeq.length === chosenSequence.length){
        setTimeout(function () {
            nextSequence();  }, 1000);
    }}

    else{
        wrong();
        startOver();
    }

}

function nextSequence(){
    $("h2").css("display","none");
    mySeq=[]; 
    i++;
    $("h1").text("Level "+i) 

    
    var randomNum= Math.floor(Math.random()*4);  //2
    var chosenColor= colors[randomNum];  //yellow
    chosenSequence.push(chosenColor);   ["yellow", "green", "red"];
    
    var clr= document.getElementById(chosenColor);
    $(clr).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    makeSound(chosenColor); 
}




function wrong(){

    var wrong= new Audio("sounds/wrong.mp3");
    wrong.play();
    $("h1").text("Game Over");
    $("html").addClass("gameOver");
    
        
    setTimeout(function(){
        $("h1").text("The Simon Game")
        $("html").removeClass("gameOver");},500
    );
}



function animate(btn){
    
    document.querySelector("#"+btn).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("#"+btn).classList.remove("pressed");},
        100
    );
}

function makeSound(clr){
    switch(clr){
        case "green":
        var green= new Audio("sounds/green.mp3");
        green.play();
        break;

        case "red":
        var green= new Audio("sounds/red.mp3");
        green.play();
        break;

        case "yellow":
        var green= new Audio("sounds/yellow.mp3");
        green.play();
        break;

        case "blue":
        var green= new Audio("sounds/blue.mp3");
        green.play();
        break;
            
    }
}

function startOver(){
    i=0;
    chosenSequence=[];
    isStarting=false;
    $("h2").css("display","block");
}