import {nombre,other} from './chiffre';
import {montre as aux} from './fonction';

aux();

console.log(nombre,other);

class Employee {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    payEmployee() {
        console.log("Time to pay " + this.name + " (" + this.title + ")");
    }
}

class Consultant extends Employee {
    constructor(name) {
        super(name, "Consultant");
    }
    payEmployee() {
        super.payEmployee();
        console.log("Time to pay " + this.name + " (" + this.title + ") -- remember.");
    }
}

const e = new Employee("Joe Bloggs", "Engineer");
e.payEmployee();

const c = new Consultant("John Smith");
c.payEmployee();