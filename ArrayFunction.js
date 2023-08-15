function Addition(Arr) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
var week = [10, 20, 30, 40, 50, 60];
var Ret = 0;
Ret = Addition(week);
console.log("Addition =" + Ret);
