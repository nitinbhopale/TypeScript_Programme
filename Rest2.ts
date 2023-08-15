// Rest Parameter or Variable number of arguments

// function Addition(Arr.  : number[]) :number
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

var Mydata : number[]=[10,20,30,40];

// Ret = Addition(Mydata)

console.log("Result is : "+ Ret);

Ret = Addition(10,20,30,40)