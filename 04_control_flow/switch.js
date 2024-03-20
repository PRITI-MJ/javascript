//switch syntax

 /*
switch(key) {
    case value:

        break;
    
    default:
        break;
}
*/

const month = 3;
//if we do not write break then all the cases will be executed except "default"

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        break;
}


//we can also compare string in it
const months = "feb"
switch(months)
{
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        break;
}
