class Book{
    constructor(name, pages){
        this.name = name;
        this.pages = pages;
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBooksInLibrary(bookInstance){
        this.books.push(bookInstance)    
    }
}

let map = new Map();

function addElementsWithMap(libraryName, instanceBook){
    if(!map.has(libraryName)){
        map.set(libraryName, new Library(libraryName));
    }

    map.get(libraryName).addBooksInLibrary(instanceBook); 
}

function totalPagesByLibrary(map){ 
    let totalPages = 0;

    // for(let mapIndex = 0; mapIndex < map.length; mapIndex++){
    //     for(let bookIndex = 0; bookIndex < map[mapIndex].length; bookIndex++){
    //         totalPages = totalPages + map[mapIndex][bookIndex][1];
    //     }
    //     return totalPages / map[mapIndex].length; //Aqui lo taba haciendo asi pero si retorno solo retornare el de la prmera libreria jaja, otra opcion que estaba pensando era hacer como un map o  objeto asi {mexico: 12} obviamente con un condicional if adentro del segundo for para 
    // }
    let librarysCount = {};
    for(let mapIndex = 0; mapIndex < map.length; mapIndex++){
        if(!map[mapIndex] in librarysCount){
            librarysCount[map[mapIndex]] = 0;
        }

        let actualLibrary = librarysCount[map[mapIndex]];
        for(let bookIndex = 0; bookIndex < map[mapIndex].length; bookIndex++){
            actualLibrary = actualLibrary + map[mapIndex][bookIndex][1]
        }
    }
    return librarysCount;
}   

function libraryWithMoreBooks(map){

}

addElementsWithMap('Michigan', new Book('Little Prince', 134)); 
addElementsWithMap('Michigan', new Book('It', 355)); 
addElementsWithMap('Bookative', new Book('The Lion King', 59)); 
console.log(map)

