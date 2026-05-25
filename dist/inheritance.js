"use strict";
//Inheritance means baper theke jomi pawa 
Object.defineProperty(exports, "__esModule", { value: true });
// Duita class ar vitor j gulo common ace sei gulo k akta parent class a likhe duita class ai easyly access neya jai aitai hocce inheritance
class Parent {
    name;
    age;
    adress;
    constructor(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    getSleep(hours) {
        console.log(`${this.name} daily ${hours} ghonta ghumai`);
    }
}
class Student extends Parent {
}
const student1 = new Student('sakib', 21, 'bangladesh');
student1.getSleep(12);
class Teacher {
    designation;
    constructor(name, age, adress, designation) {
        super(name, age, adress);
        this.designation = designation;
    }
    takeClass(timesOfClass) {
        console.log(`${this.name} ${timesOfClass} ghonta class nei`);
    }
}
const teacher1 = new Teacher('momen', 32, 'bangla', 'professor');
teacher1.takeClass(5);
//# sourceMappingURL=inheritance.js.map