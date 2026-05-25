"use strict";
// class writing system
Object.defineProperty(exports, "__esModule", { value: true });
// class Cricketer{
//     name:string;
//     role:string;
//     age:number;
//     // write constructor for initialized the class property
//     constructor(name:string,role:string,age:number){
//         this.name = name;
//         this.role = role;
//         this.age = age;
//     }
//     //Here we can also write methods
//     checkBatter(){
//         // console.log(`the player is: ${this.name}`)
//     }
// }
// const cricketer1 = new Cricketer('sakib','allrounder',37);
// const cricketer2 = new Cricketer('tamim','batting',38);
// cricketer1.checkBatter()
//Easyest way for writing this
class Cricketers {
    name;
    role;
    age;
    // write constructor for initialized the class property
    constructor(name, role, age) {
        // this.name = name;
        // this.role = role;
        // this.age = age;
        this.name = name;
        this.role = role;
        this.age = age;
    }
    //Here we can also write methods
    checkBatter() {
        // console.log(`the player is: ${this.name}`)
    }
}
const cricketers1 = new Cricketers('sakib', 'allrounder', 37);
console.log(cricketers1.name);
//# sourceMappingURL=class.js.map