class demo{
    Name : string;
    empId : number;
    contact : number;
    designation : string;
    constructor(Name : string, empId : number, contact : number, designation : string) {
        this.Name = Name;
        this.empId = empId;
        this.contact = contact;
        this.designation = designation;  
    }
    Display():void{
        console.log("Name of Employee "+this.Name);
        console.log("Employee ID "+this.empId);
        console.log("Mobile Number "+this.contact);
        console.log("Job Role "+this.designation);
    }
}
var John = new demo("John Doe",125,987452310,"Manager");

John.Display();

var Peter = new demo("Peter",236,9856320147,"Team Lead");

Peter.Display();