class Potion {
    constructor(
        name,
        description,
        hp,
        cost,
        imgsource
    ){
        this.name=name;
        this.description=description
        this.hp=hp;
        this.cost=cost;
        this.imgsource=imgsource;
    }
    Pcontent(){
        const content =`
        <article>
        <figure class="Potion IMG">
            <img src=${this.imgsource} alt=""/>
        </figure>
        <h1 class="name">${this.name}</h1>
            <ul>
                <li>Recover Hp</li>
                <li>15GP</li>
            </ul>
        <article>
        `;
        return content
    }
}

export default Potion