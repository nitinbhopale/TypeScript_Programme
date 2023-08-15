var Arithemetics = /** @class */ (function () {
    function Arithemetics(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithemetics.prototype.Add = function () {
        return this.No1 + this.No2;
    };
    Arithemetics.prototype.Sub = function () {
        return this.No1 - this.No2;
    };
    return Arithemetics;
}());
var obj1 = new Arithemetics(25, 10);
var Ret = 0;
Ret = obj1.Add();
console.log("Addition is " + Ret);
var obj2 = new Arithemetics(35, 20);
Ret = obj2.Sub();
console.log("Substraction is " + Ret);
