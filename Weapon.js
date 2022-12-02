class Weapon {
    constructor(
        name,
        discription,
        attackValue,
        cost,
        imgsource,
        objname
    ){
        this.name=name;
        this.discription=discription;
        this.attackValue=attackValue
        this.cost=cost;
        this.imgsource=imgsource;
        this.objname=objname
    }

    Pcontent(){
        const content =`
        <section class="column" id= "${this.name}" onclick="dean('${this.objname}')" >
            <figure class="potionimg">
            <img src=${this.imgsource} alt=""/>
            </figure>
            <article class="text">
            <h1 class="name">${this.name}</h1>
            <ul class="details">
                    <li>Deal Damage: ${this.attackValue}</li>
                    <li>15GP</li>
            </ul>
            </article>
            </section>
            `;
            return content
        }
    Ppopup(){
        const content=`
        <div class="popup" Id="${this.objname}" >
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
            <a class="button" href="#"onclick="dean('${this.objname}')">Close</a>
        </div>


        `;
        return content
    }
}

export default Weapon