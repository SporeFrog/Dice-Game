
function diceGame(){
  var result1 = (Math.floor(Math.random()*6) + 1);
  var result2 = (Math.floor(Math.random()*6) + 1);

  if(result1 === 1){
    document.querySelector(".dice1").innerHTML = "<i class='fas fa-dice-one'></i>";
  }else if(result1 === 2){
    document.querySelector(".dice1").innerHTML = "<i class='fas fa-dice-two'></i>";
  }else if(result1 === 3){
    document.querySelector(".dice1").innerHTML = "<i class='fas fa-dice-three'></i>";
  }else if(result1 === 4){
    document.querySelector(".dice1").innerHTML = "<i class='fas fa-dice-four'></i>";
  }else if(result1 === 5){
    document.querySelector(".dice1").innerHTML = "<i class='fas fa-dice-five'></i>";
  }else if(result1 === 6){
    document.querySelector(".dice1").innerHTML = "<i class='fas fa-dice-six'></i>";
  }

  if(result2 === 1){
    document.querySelector(".dice2").innerHTML = "<i class='fas fa-dice-one'></i>";
  }else if(result2 === 2){
    document.querySelector(".dice2").innerHTML = "<i class='fas fa-dice-two'></i>";
  }else if(result2 === 3){
    document.querySelector(".dice2").innerHTML = "<i class='fas fa-dice-three'></i>";
  }else if(result2 === 4){
    document.querySelector(".dice2").innerHTML = "<i class='fas fa-dice-four'></i>";
  }else if(result2 === 5){
    document.querySelector(".dice2").innerHTML = "<i class='fas fa-dice-five'></i>";
  }else if(result2 === 6){
    document.querySelector(".dice2").innerHTML = "<i class='fas fa-dice-six'></i>";
  }
  if(result1 > result2){
    document.querySelector(".result").textContent = "Blue Wins!";
  }else if(result1 < result2){
    document.querySelector(".result").textContent = "Red Wins!";
  }else if(result1 === result2){
    document.querySelector(".result").textContent = "It's a draw!";
  }
}

