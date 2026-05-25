//Inheritance means baper theke jomi pawa 

// Duita class ar vitor j gulo common ace sei gulo k akta parent class a likhe duita class ai easyly access neya jai aitai hocce inheritance

class Parent{
    name:string;
    age:number;
    adress:string;

    constructor (name:string, age:number, adress:string){
        this.name=name;
        this.age = age;
        this.adress = adress;
    }

    getSleep(hours:number){
        console.log(`${this.name} daily ${hours} ghonta ghumai`)
    }
}

class Student extends Parent{
    

}

const student1 = new Student('sakib',21,'bangladesh');

student1.getSleep(12)

class Teacher extends Parent{
    
    designation:string;
    
    constructor(name:string, age:number, adress:string, designation:string){

        super(name, age, adress)
        this.designation=designation;

    }
   
    takeClass(timesOfClass:number){
        console.log(`${this.name} ${timesOfClass} ghonta class nei`)
    }
}

const teacher1 = new Teacher('momen',32,'bangla','professor')
teacher1.takeClass(5)