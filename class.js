var demo = /** @class */ (function () {
    function demo(Name, empId, contact, designation) {
        this.Name = Name;
        this.empId = empId;
        this.contact = contact;
        this.designation = designation;
    }
    demo.prototype.Display = function () {
        console.log("Name of Employee " + this.Name);
        console.log("Employee ID " + this.empId);
        console.log("Mobile Number " + this.contact);
        console.log("Job Role " + this.designation);
    };
    return demo;
}());
var John = new demo("John Doe", 125, 987452310, "Manager");
John.Display();
var Peter = new demo("Peter", 236, 9856320147, "Team Lead");
Peter.Display();
