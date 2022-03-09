var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
while (enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") { //Play skip fight option
        var confirmSkip = window.confirm("Are you sure that you'd like to skip this fight?") //question double checking to see if the player truly wants to skip this fight

        if (confirmSkip) { //player confirmed fight skip and money loss
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 10; 
        window.alert(playerName + " has " + playerMoney + " dollars remaining!")   
        break;
        }
    }
    enemyHealth = enemyHealth - playerAttack; //Player attacks enemy
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!"); //death if your enemy has less than or = to 0 hp
            break;
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left."); // shows your enemies remaining health
        }

        playerHealth = playerHealth - enemyAttack; //Enemy attacks player
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!"); //death if you have less than or = to 0 hp
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left."); // shows your remaining health
        }
    } //end of while loop
} // end of function

var startGame = function() {
    
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for (var i = 0; i < enemyNames.length; i++) {
    
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
        }

        else{
            window.alert("GAME OVER");
            break;
        }
    }
    endGame();
}

var endGame = function() {
    
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            startGame();
        } 
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
}

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "Refill":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        break;
        case "UPGRADE":
        case "Upgrade":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        break;
        case "LEAVE":
        case "Leave":
        case "leave":
            window.alert("Leaving the store.");
        break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
        break;
    }
}
    startGame();