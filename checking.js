function CountCapital(str) {
    var count = 0;
    var len = str.length;
    var ch;
    for (var i = 0; i < len; i++) {
        ch = str.charAt(i);
        if (ch >= 'A' && ch <= 'Z') {
            count++;
        }
    }
    return count;
}
var ret = CountCapital("HeLLe");
console.log(ret);
