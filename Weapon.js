class Weapon {
    constructor(name) {
        this.name = name;
        this.damage = Math.floor(Math.random() * (6 - 1)) + 1;
    }
}
