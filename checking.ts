function CountCapital(str : String) : number
{
    var count : number = 0;
    var len : number = str.length;
    var ch;
    for(var i=0;i<len;i++)
    {
        ch = str.charAt(i);
        if(ch >= 'A' && ch<='Z' ){
            count++;
        }
    }
    return count;
}
var ret = CountCapital("HeLLe");
console.log(ret)