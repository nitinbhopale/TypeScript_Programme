// Rest Parameter or Variable number of arguments

function Addition(...Arr : number[]) : number
{
    let Sum : number = 0;
    let cnt : number = 0;

    for(cnt = 0; cnt < Arr.length; cnt++)
    {
        Sum = Sum+ Arr[cnt];
    }
    return Sum;
}

var Ret : number = 0;

Ret = Addition(10,20);

console.log("Result is : "+Ret);

Ret = Addition();

console.log("Result is : "+Ret);

Ret = Addition(10,20,30,40);

console.log("Result is : "+Ret);

Ret = Addition(10,20,30,40,50,60);

console.log("Result is : "+Ret);
