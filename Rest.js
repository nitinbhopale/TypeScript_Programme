// Rest Parameter or Variable number of arguments
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
Ret = Addition(10, 20);
console.log("Result is : " + Ret);
Ret = Addition();
console.log("Result is : " + Ret);
Ret = Addition(10, 20, 30, 40);
console.log("Result is : " + Ret);
Ret = Addition(10, 20, 30, 40, 50, 60);
console.log("Result is : " + Ret);
