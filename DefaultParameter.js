function Percentage(Marks, Outof) {
    if (Marks === void 0) { Marks = 400; }
    if (Outof === void 0) { Outof = 500; }
    var Ans = 0;
    Ans = (Marks / Outof) * 100;
    return Ans;
}
var Per = 0;
Per = Percentage(220, 300);
console.log("Percentage is : " + Per);
Per = Percentage(220);
console.log("Percentage is : " + Per);
Per = Percentage();
console.log("Percentage is : " + Per);
