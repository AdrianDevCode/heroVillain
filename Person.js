class Person {
    constructor(name) {
        this.name = name || "guy";
        this.health = 20;
        this.weapon = null;
    }
    equipWeapon(weapon) {
        this.weapon = weapon;
    }
    attack(person) {

        if(!person){
            return console.log("no person was passed");
        }

        if(this.weapon == null){
            return console.log("no weapon equipped");
        }
        
        person.health -= this.weapon.damage;
    }
}