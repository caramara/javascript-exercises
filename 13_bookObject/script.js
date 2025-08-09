function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read? "read": "not read yet"}`;
    
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(book1.info());
//book1 inherits from Book.prototype meaning it has access to the prototype object's functions and variables
//We define new prototype (static) functions and variables with Book.prototype.functionName = function (){}
//Book.prototype inherits from Object.prototype, The prototype itself is an object that can also store functions and variables
console.log(Object.getPrototypeOf(book1)===Book.prototype);
//getPrototype is just a get property function
console.log(Object.getPrototypeOf(Book.prototype)===Object.prototype);
console.log(Object.prototype.hasOwnProperty("valueOf"));
//Chain of prototypal inheritance: instance>prototype>Object.prototype
console.log(book1.valueOf());

//object.prototype equals object[[prototype]]
//object.getPrototypeOf() and object.setPrototypeOf() equals __proto__

