// Person represents a simple data object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// City owns its people and related logic
class City {
    constructor(name) {
        this.name = name;
        this.people = [];
    }

    addPerson(person) {
        this.people.push(person);
    }

    averageAge() {
        if (this.people.length === 0) return 0;

        let sum = 0;
        for (let person of this.people) {
            sum += person.age;
        }

        return sum / this.people.length;
    }

    population() {
        return this.people.length;
    }
}

// Hash table that connects city names to City instances
const cities = new Map();

function addPersonToCity(cityName, person) {
    if (!cities.has(cityName)) {
        cities.set(cityName, new City(cityName));
    }

    cities.get(cityName).addPerson(person);
}

// ------------------- USAGE -------------------

addPersonToCity("CDMX", new Person("Ana", 25));
addPersonToCity("CDMX", new Person("Luis", 35));
addPersonToCity("Querétaro", new Person("Carlos", 40));
addPersonToCity("CDMX", new Person("María", 30));
addPersonToCity("Guadalajara", new Person("Sofía", 20));
addPersonToCity("Guadalajara", new Person("Diego", 45));

// Logs
for (let [name, city] of cities) {
    console.log(`City: ${name}`);
    console.log(`Population: ${city.population()}`);
    console.log(`Average age: ${city.averageAge().toFixed(2)}`);
    console.log("People:", city.people);
    console.log("-------------");
}
