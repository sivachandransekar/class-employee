class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    anuvalincome(){
        let c=this.salary*12;
        console.log(c);
    }
}
let emp1=new Employee("siva",20000,)

class Manger extends Employee{
    constructor(name,salary,department){
        super(name,salary)
        this.department=department;
    }
    anuvalincome(){
        let c=this.salary*12;
        let bounnasAmmout=1000;
        console.log(+bounnasAmmout);
    }
}
let  emp2=new Employee("siva",20000,"develper");
emp2.anuvalincome();