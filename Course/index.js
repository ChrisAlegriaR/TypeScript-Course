let content = {};

class City{
    constructor(name){
        this.name = name;

        if(this.name in content){
            console.log('This city alredy exists.');
        } else {
            content[this.name] = [];
        }
    }
}

class Persona{
    #password;

    constructor(name, edge, password){
        this.name = name;
        this.edge = edge;
        this.#password = password;
    }

    insertPerson(city){
        content[city].push({name: this.name, edge: this.edge, password: this.#password})
    }
}

let city1 = new City('Mexico');
let city2 = new City('Canada');
let city3 = new City('USA');

let persona1 = new Persona('Jose', 23, '2fK=3d');
persona1.insertPerson('Mexico')

console.log(content)