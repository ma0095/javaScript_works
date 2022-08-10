//class Person normal methord


// class Person{
//           //initialising instance variable

//     setPerson(name,age,gender){
//         this.name=name
//         this.age=age
//         this.gender=gender
//     }
//     printPerson(){
//         console.log(this.name,this.age,this.gender);

//     }
// }

// var p=new Person();      //--  creating object in javas cript
// p.setPerson("ram",27,"male")
// p.printPerson()



//2nd methord using constructor
    //constructor init in (python)= (in js) constructor 

    class Person{
        constructor(name,age,gender){     //for setting person details
            this.name=name
            this.age=age
            this.gender=gender
        }
        printPerson(){
            console.log(this.name,this.age,this.gender);
        }
    }


var p=new Person("ravi",27,"male");
p.printPerson()

