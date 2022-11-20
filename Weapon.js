class Weapon {
    constructor(
        name,
        discription,
        attackValue,
        cost
    ){
        this.name=name;
        this.discription=discription;
        this.attackValue=attackValue
        this.cost=cost;
    }

    content(){
        const content =`
            <main>
        `
        return content
    }
}

export default Weapon