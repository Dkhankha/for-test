class Human {
    blood_group = "B";

    group = () => {
        console.log(this.blood_group);
    }
}
class Person extends Human{
    name = "daniyal"
    age = 35;
    printName(){
      console.log(this.name)
    }
    printage = () => {
        console.log(this.age)
    }
}

const person = new Person();
person.printName();
person.printage();
person.group();