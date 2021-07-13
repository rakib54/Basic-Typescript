

class Person {
    name : string;
    constructor(name:string){
        this.name = name
    }
    getName(){
        return this.name;
    }
}
const name1 = new Person('david');
console.log(name1.name);
const Samname1:string = name1.getName()
