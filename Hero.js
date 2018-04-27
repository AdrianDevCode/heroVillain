class Hero extends Person {
    constructor() {
        super("Hero");
    }
    render() {
        let html = ``;
        let hpBar = this.health;
        html += `<img src="./img/hero.jpg">`;
        for(let i = 0; i < this.health; i++){
            html += `<button class="btn btn-success"></button>`;
            return html;
        }
    }
}