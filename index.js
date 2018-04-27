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
    // hero attack button
    $(".hero").on("click", ".heroAttack", function () {
        let villainHP = player.hero.attack(player.villain);
        player.villain.health = villainHP;

        $(".villain").empty();
        $(".villain").append(player.villain.render());

        if (villainHP <= 5) {
            $(".villainHP").attr("class", "btn btn-danger");
        } else if (villainHP <= 12) {
            $(".villainHP").attr("class", "btn btn-warning");
        }

        if (player.villain.health <= 0) {
            alert(`${player.hero.name} won! ${player.villain.name} lost!`);
            location = location;
        }
    });
    // vilain attack button
    $(".villain").on("click", ".villainAttack", function () {
        let heroHP = player.villain.attack(player.hero);
        player.hero.health = heroHP;

        $(".hero").empty();
        $(".hero").append(player.hero.render());

        if (heroHP <= 5) {
            $(".heroHP").attr("class", "btn btn-danger");
        } else if (heroHP <= 12) {
            $(".heroHP").attr("class", "btn btn-warning");
        }

        if (player.hero.health <= 0) {
            alert(`${player.hero.name} lost... ${player.villain.name} wins!`);
            location = location;
        }
    });


});
