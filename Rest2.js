// Rest Parameter or Variable number of arguments
// function Addition(Arr.  : number[]) :number
function Addition() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var Sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        Sum = Sum + Arr[cnt];
    }
    return Sum;
}
var Ret = 0;
var Mydata = [10, 20, 30, 40];
// Ret = Addition(Mydata)
console.log("Result is : " + Ret);
Ret = Addition(10, 20, 30, 40);
