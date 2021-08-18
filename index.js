function diceRoll(){
    var Random1 = Math.floor(Math.random()*6 + 1);
    var Random2 = Math.floor(Math.random()*6 + 1);
    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");

    var heading = document.querySelector("h1");
    if(Random1 === 1){
        dice1.setAttribute("src","images/dice1.png");
    }
    else if(Random1 === 2){
        dice1.setAttribute("src","images/dice2.png");
    }
    else if(Random1 === 3){
        dice1.setAttribute("src","images/dice3.png");
    }
    else if(Random1 === 4){
        dice1.setAttribute("src","images/dice4.png");
    }
    else if(Random1 === 5){
        dice1.setAttribute("src","images/dice5.png");
    }
    else if(Random1 == 6){
        dice1.setAttribute("src","images/dice6.png");
    }


    if(Random2 === 1){
        dice2.setAttribute("src","images/dice1.png");
    }
    else if(Random2 === 2){
        dice2.setAttribute("src","images/dice2.png");
    }
    else if(Random2 === 3){
        dice2.setAttribute("src","images/dice3.png");
    }
    else if(Random2 === 4){
        dice2.setAttribute("src","images/dice4.png");
    }
    else if(Random2 === 5){
        dice2.setAttribute("src","images/dice5.png");
    }
    else if(Random2 == 6){
        dice2.setAttribute("src","images/dice6.png");
    }

    if(Random1 > Random2){
        heading.innerText = "🎉🎈Player 1 wins!";
        heading.classList.add("h1");
    }else if(Random1 === Random2){
        heading.innerText = "Draw!👏";
        heading.classList.add("h1");
    }else{
        heading.innerText = "Player 2 wins!🎉✨";
        heading.classList.add("h1");
    }

} 