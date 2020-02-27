// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.

// Our code will break the game into 3 phases:
// 1.    User makes a choice. How will we collect the user’s choice?
// 2.    Computer makes a choice. How will we collect the computer’s choice?
// 3.    A conditional that determines who wins.

// In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
// 1.    Begin by prompting the user for their choice.
// 2.    Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
// 3.    Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead. ??????????
// ??????????????????????????????????????????????????????

// 4.    Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
// 5.    What if the result ends in a tie? Figure out how to handle that as well.
// 6.    What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

let playerPick, opponentPick; pick = "rock";
let input = true;

do {
  playerPick = prompt("Choose Rock, paper or scissors?").toLowerCase();

  if (playerPick === "rock" || playerPick === "paper" || playerPick === "scissors") {
      input = false;

  } else {
      window.alert("You need to enter Rock, paper or scissors---Try again ");
      input = true;
  }
} while (input);

  opponentPick = Math.random();
  { 
    if (opponentPick < 0.33) 
      {
        opponentPick = "rock";
      } 
      else if (opponentPick <= 0.67) 
      {
        opponentPick = "paper";
      } 
      else 
      {
        opponentPick = "scissors";
      }
  }

function choice(playerPick, opponentPick)
{
  if (playerPick === opponentPick) 
    {
      return "The result is a tie!" + " " + "Lets play again.";
    }
  
  if (playerPick === "rock") 
  {
      if (opponentPick === "paper") 
      {
        return "Paper covers rock. Computer wins! Good game.";
      } else //opponent picks scissors
      {
        return "Rock breaks scissors. You win! How lucky you are.";
      }
  }

  if (playerPick === "paper") 
  {
      if (opponentPick === "scissors") 
      {
        return "Scissors cut paper. Computer wins. Good game.";
      } else //rock
      {
        return "Paper covers rock. You win! How lucky you are.";
      }
  }

  if (playerPick === "scissors")
  {
      if (opponentPick === "rock") 
      {
        return "Rock breaks scissors. Computer wins. Good game.";
      }
      else //paper
      {
        return "Scissors cut paper. You win! How lucky you are.";
      }
  }
} //function choice

choice(playerPick, opponentPick);
document.write("Computer chose: " + opponentPick + "<br>");
document.write(choice(playerPick,opponentPick));

