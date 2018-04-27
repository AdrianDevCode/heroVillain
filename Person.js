class Person {
    constructor(name) {
        this.name = name;
        this.health = 20;
        this.weapon = null;
    }
    equipWeapon(weapon) {
        this.weapon = weapon;
    }
    attack(person) {
        return person.health - this.weapon.damage;
    }
}