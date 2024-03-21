// for

for(let i = 0; i < 10; i++)
{
    const element = i;
    console.log(i + '*' + (i + 1) + '=' + i*(i+1)); //here '+' represents concatenation
}

/* 
0*1=0
1*2=2
2*3=6
3*4=12
4*5=20
5*6=30
6*7=42
7*8=56
8*9=72
9*10=90
*/



//for loop in array
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length); //3
for(let index = 0; index <= myArray.length; index++) 
{
    const element = myArray[index]; 
    console.log(element);
    /*
    flash
    batman
    superman
    undefined //if that value is out of bound
    */
}


//break and continue

//break
for(let index = 1; index <= 20; index++)
{
    if(index == 5)
    {
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
}
//output:-
/*
    value of i is 1
    value of i is 2
    value of i is 3
    value of i is 4
    detected 5
*/


//continue
for(let index = 1; index <= 10; index++)
{
    if(index == 5)
    {
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}
//output:-
/*
value of i is 1
value of i is 2
value of i is 3
value of i is 4
detected 5
value of i is 6
value of i is 7
value of i is 8
value of i is 9
value of i is 10
*/
