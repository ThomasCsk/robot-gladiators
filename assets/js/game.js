var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        
        enemyHealth = enemyHealth - playerAttack; //Player attacks enemy
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!"); //death if your enemy has less than or = to 0 hp
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left."); // shows your enemies remaining health
            }

        playerHealth = playerHealth - enemyAttack; //Enemy attacks player
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!"); //death if you have less than or = to 0 hp
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left."); // shows your remaining health
            }
}
    else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") { //Play skip fight option
        var confirmSkip = window.confirm("Are you sure that you'd like to skip this fight?") //question double checking to see if the player truly wants to skip this fight

        if (confirmSkip) { //player confirmed fight skip and money loss
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 2; 
        window.alert(playerName + " has " + playerMoney + " dollars remaining!")   
        }

        else{
            fight(); //Sends you back to the fight if you choose not to confirm the skip
        }
    }
    
    else{
        window.alert("You need to choose a valid option. Try again!");
    }
}

fight();