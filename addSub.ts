class Arithemetics{
    No1 : number;
    No2 : number;
    constructor(A : number, B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }
    Add() : number
    {
        return this.No1+this.No2;
    }
    Sub() : number
    {
        return this.No1-this.No2;
    }
}

var obj1 = new Arithemetics(25,10);

var Ret : number = 0;
Ret = obj1.Add();
console.log("Addition is "+Ret);

var obj2 = new Arithemetics(35,20);

Ret = obj2.Sub();
console.log("Substraction is "+Ret);
