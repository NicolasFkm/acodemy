function Immutability() {
    const heal = function(player, hp) {
        player.hp += hp;
        
        return player;
    }
    
    const healImmutable = function(player, hp) {
        // It could be also Object.assign({}, player)
        const healthPlayer = {... player};
        healthPlayer.hp += hp;
        
        return healthPlayer;
    }
    
    const player = {
        race: "Wizard",
        hp: 10
    }
    
    console.log("beginning ", player);
    const healedPlayer = heal(player, 5);
    console.log("healed ", player);
    console.log("original ", healedPlayer);
    
    const healedImmutablePlayer = healImmutable(player, 5);
    console.log("original ", player);
    console.log("healed ", healedImmutablePlayer);
}

Immutability();