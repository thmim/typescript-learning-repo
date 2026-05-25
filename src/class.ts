// class writing system

class Cricketer{
    name:string;
    role:string;
    age:number;

    // write constructor for initialized the class property

    constructor(name:string,role:string,age:number){

        this.name = name;
        this.role = role;
        this.age = age;

    }

    //Here we can also write methods

    checkBatter(){
        // console.log(`the player is: ${this.name}`)
    }
}

const cricketer1 = new Cricketer('sakib','allrounder',37);
const cricketer2 = new Cricketer('tamim','batting',38);
cricketer1.checkBatter()


//Easyest way for writing class using public keyword

class Cricketers{

    // write constructor for initialized the class property

    constructor(public name:string, public role:string, public age:number){

        // this.name = name;
        // this.role = role;
        // this.age = age;

    }

    //Here we can also write methods

    checkBatter(){
        // console.log(`the player is: ${this.name}`)
    }
}

const cricketers1 = new Cricketers('sakib','allrounder',37);

console.log(cricketers1.name)