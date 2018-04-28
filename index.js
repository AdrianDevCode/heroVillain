$(function () {
    let playersNames = {
        getHeroName: () => {
            return prompt("What's the Hero's name? ");
        },
        getVillainName: () => {
            return prompt("And what's the Villain's name?");
        }
    }
    let player = {
        hero: new Hero(playersNames.getHeroName()),
        villain: new Villain(playersNames.getVillainName())
    }
    let renderPlayer = {
        heroRender: player.hero.render(),
        villainRender: player.villain.render()
    }
    let appendPlayer = {
        hero: $(".hero").append(renderPlayer.heroRender),
        villain: $(".villain").append(renderPlayer.villainRender)
    }
    let playerWeapon = {
        heroWep: new Weapon("smiles"),
        villainWep: new Weapon("gun")
    }
    let equipWeapon = {
        heroWep: player.hero.equipWeapon(playerWeapon.heroWep),
        VillainWep: player.villain.equipWeapon(playerWeapon.villainWep)
    }
    let checkGameOVer = (hp) => {
        if (hp <= 0) {
            alert(`${player.hero.name} won! ${player.villain.name} lost!`);
            location = location;
        }
    }
    let HPbars = (HP, selector) => {
        if (HP <= 5) {
            $(selector).attr("class", "btn btn-danger");
        } else if (HP <= 12) {
            $(selector).attr("class", "btn btn-warning");
        }
    }
    // hero attack button
    $(".hero").on("click", ".heroAttack", function () {
        player.hero.attack(player.villain);
        let villainHP = player.villain.health;
        let selector = ".villainHP";

        $(".villain").empty();
        $(".villain").append(player.villain.render());
        HPbars(villainHP, selector);
        checkGameOVer(villainHP);
    });
    // vilain attack button
    $(".villain").on("click", ".villainAttack", function () {
        player.villain.attack(player.hero);
        let heroHP = player.hero.health;
        let selector = ".heroHP";
        
        $(".hero").empty();
        $(".hero").append(player.hero.render());
        HPbars(heroHP, selector);
        checkGameOVer(heroHP);
        
    });


});
