// Game states
// "WIN" - Player Robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//Prompts and variables at the top

var getPlayerName = function () {
var name = "";

while (name === "" || name === null){
    name = prompt("What is your robot's name?");
}

console.log("Your robot's name is " + name);

return name;

};


var playerInfo = {
name: getPlayerName(),
health: 100,
attack: 10,
money: 10,
reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
},
refillHealth: function(){
    if (this.money >= 7){
        window.alert("Refilling player's health by 20 for 7 dollars.");
    
    this.health += 20;
    this.money -= 7;
    }
    else {
        window.alert("You don't have enough money.");
    }
},
upgradeAttack: function(){
    if (this.money >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
    }
    else {
        window.alert("You don't have enough money.");
    }
}
};

// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1)) + 10;

    return value;
};

var enemyInfo = [
{
    name: "Roborto",
    attack: randomNumber(10, 14)
},
{
    name: "Amy Android",
    attack: randomNumber(10,14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10,14)
},

];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);
// create function (function declaration in this case)
/*function fight() {
  window.alert("Welcome to Robot Gladiators!")
};*/

// fight ();
var fight = function(enemyInfo) {
    //repeat and execute as long as the enemy-robot is still alive
    while(playerInfo.health > 0 && enemyInfo.health > 0) {

        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    console.log (promptFight);

    // if player chooses to skip the nstop the loop
    if (promptFight === 'skip' || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    
            // substract money from playerInfo.money for skiping.
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log ("playerInfo.money", playerInfo.money);
            break;
        }
    }

   /* var randomNumber = function(){
        var value = Math.floor(Math.random() * (3)) + 12;

        return value;
    };*/

    // if the player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

// generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

//Subtract the value of `playerInfo.attack` from the value of `enemyInfo.health` and use that result to update the value in the `enemyInfo.health` variable
    enemyInfo.health = Math.max(0, enemyInfo.health - damage);

// Log a resulting message to the console so we know that it worked.
    console.log(playerInfo.name + " attacked " + enemyInfo.name + ". " + enemyInfo.name + " now has " + enemyInfo.health + " health remaining."); 

// check enemy's health
    if (enemyInfo.health <= 0) {
    window.alert(enemyInfo.name + " has died!");
    
    playerInfo.money = playerInfo.money + 20;

    break;
}
    else {
    window.alert(enemyInfo.name + " still has " + enemyInfo.health + " health left.");
}
  
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

// Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    playerInfo.health = Math.max(0, playerInfo.health - damage);

// Log a resulting message to the console so we know that it worked.
     console.log(enemyInfo.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

// check to see if the value of the playerInfo.health variable is greater than 0
if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + "has died!");
    break;
}

else {
    window.alert("Your robot " + playerInfo.name + " has " + playerInfo.health + " health left, he is still alive!");
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
    playerInfo.reset();

for(var i = 0; i < enemyInfo.length; i++) {

    //debugger;
    if (playerInfo.health > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i +1));
   

        var pickedEnemyObj = enemyInfo[i];

        // function to generate random numeric values
        var randomNumber = function() {
            var value = Math.floor(Math.random() * (21)) + 40;

            return value
        };

        pickedEnemyObj.health = randomNumber(40, 60);

        //debugger;

        fight(pickedEnemyObj);   
        
         if (playerInfo.health > 0 && i < enemyInfo.length - 1 ) {

            // ask if the player wants to use the store
            var storeConfirm = window.confirm("the fight is over, visit the store before the next round?");

            // if yes, take them to the store function
            if (storeConfirm) {
            shop();
            }
        }
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
     if (playerInfo.health > 0) {
         window.alert("Great job you've survived the game! You now have a score of " + playerInfo.money + ".");
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

var shop = function () {
    // ask the player what they would like to do
    var shopOptionPrompt = window.prompt ( "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
          playerInfo.refillHealth();

            break;

          case "UPGRADE":
          case "upgrade":
          playerInfo.upgradeAttack();

            break;

          case "LEAVE":
          case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;

          default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;

    }
};

// start the game when the page loads
startGame();

