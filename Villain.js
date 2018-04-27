class Villain extends Person {
    constructor(name) {
        super("Villain");
        this.name = name;
    }
    render() {
        let html = ``;
        let hpBar = this.health;
        html += `<div class="card">`;
        html += `<img class="card-img-top" src="./img/villain.jpg"><div class="card-body">`;
        html += `<h5 class="card-title">${this.name}</h5>`;
        for (let i = 0; i < this.health; i++) {
            html += `<button class="btn btn-success villainHP"></button>`;
        }
        html += `<div class="attackBtn"><button class="btn btn-success villainAttack">Serious Attack</button></div></div></div>`;
        return html;
    }
}