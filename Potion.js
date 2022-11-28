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
        <section class="column" id=${this.name} onclick="dean('${this.name}')" >
            <figure class="potionimg">
            <img src=${this.imgsource} alt=""/>
            </figure>
            <article class="text">
            <h1 class="name">${this.name}</h1>
            <ul class="details">
                    <li>Recover Hp</li>
                    <li>15GP</li>
            </ul>
            </article>
        </section>            
        `;
        return content
    }
}

export default Potion