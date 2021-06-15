const ul = document.getElementById("myUl");

class Cat {
    constructor (fact) {
        this.fact = fact;
    }

}

class CatFactory {
    constructor(url) {
        this.url = url;
    }

    produceCat(factText) {
        return new Cat(factText);
    }

    async produceCats() {
        const response = await fetch(this.url);
        const factArray = await response.json();

        return factArray.map(factObj => this.produceCat(factObj.text));
    }
} 


const factory = new CatFactory("https://cat-fact.herokuapp.com/facts");
factory.produceCats().then(cats => console.log(cats));
