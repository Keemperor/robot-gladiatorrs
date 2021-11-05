// Game states
// "WIN" - Player Robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//Prompts and variables at the top

var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumbble"];
var enemyHealth = 50;
var enemyAttack = 12;

// create function (function declaration in this case)
/*function fight() {
  window.alert("Welcome to Robot Gladiators!")
};*/

// fight ();
var fight = function(pickedEnemyName) {
    //repeat and execute as long as the enemy-robot is still alive
    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    console.log (promptFight);

    // if player chooses to skip the nstop the loop
    if (promptFight === 'skip' || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
    
            // substract money from playerMoney for skiping.
            playerMoney = playerMoney - 10;
            console.log ("playerMoney", playerMoney);
            break;
        }
    }
    // if the player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

    enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + pickedEnemyName + ". " + pickedEnemyName + " now has " + enemyHealth + " health remaining."); 

// check enemy's health
    if (enemyHealth <= 0) {
    window.alert(pickedEnemyName + " has died!");
    
    playerMoney = playerMoney + 20;

    break;
}
    else {
    window.alert(pickedEnemyName + " still has " + enemyHealth + " health left.");
}
  
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
     console.log(pickedEnemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth <= 0) {
    window.alert(playerName + "has died!");
    break;
}

else {
    window.alert("Your robot " + playerName + " has " + playerHealth + " health left, he is still alive!");
}

}
    }
};
// create function (function expression in this case)
//fight ();

// execute function
// function to start the game 

var startGame = function () {
    // reset plyer stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for(var i = 0; i < enemyNames.length; i++) {

    //debugger;
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i +1));

        var pickedEnemyName = enemyNames[i];

        enemyHealth = 50;

        //debugger;

        fight(pickedEnemyName);      
    }

else {
    window.alert("You have lost your robot in battle! Game Over !");
    break;
    }
   }

   // function to end the entire game
var endgame = function() {
    window.alert("The game has ended. Let's see how you did!");
 
     // if player is still alive, player wins!
     if (playerHealth > 0) {
         window.alert("Great job you've survived the game! You now have a score of " + playerMoney + ".");
     }
 
     else {
         window.alert("You've lost your robot in battle");
     }
 
 var playAgainConfirm = window.confirm("Would you like to play again?");
 
 if (playAgainConfirm) {
     // restart the game
     startGame();
 }
 
 else {
     window.alert("Thank you for playing Robot Gladiators! Coome back soon!");
 }
 
 }
   // play again
   endgame ();
};

// start the game when the page loads
startGame();

