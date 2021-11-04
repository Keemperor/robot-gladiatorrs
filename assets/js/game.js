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

var enemyNames = ["Roborto", "Amy Android", "Robo Trumbble" ];
var enemyHealth = 50;
var enemyAttack = 12;

// create function (function declaration in this case)
function fight() {
  window.alert("Welcome to Robot Gladiators!")
};

fight ();

// create function (function expression in this case)
var fight = function(enemyName) {

    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    console.log (promptFight);

    // if the player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

    enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."); 


// check enemy's health
    if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
    else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
  
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
     console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth <= 0) {
    window.alert(playerName + "has died!");
}
else {
    window.alert("Your robot " + playerName + " has " + playerHealth + " health left, he is still alive!");
}

// if player chooses to skip
} else if (promptFight === 'skip' || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");

        // substract money from playerMoney for skiping.
        playerMoney = playerMoney - 2;
        console.log (playerMoney);
    }

    //if no (false), ask question again by running fight() again
    else {
        fight();
    }

    window.alert(playerName + " has chosen to skip the fight!");

} else {
    window.alert("You need to choose a valid option. Try again!");
}

};

// execute function

for(var i = 0; i < enemyNames.length; i++) {
 fight(enemyNames[i]);
};