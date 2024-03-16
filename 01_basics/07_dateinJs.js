//Dates

let myDate = new Date(); 
console.log(myDate); //2024-03-16T17:25:17.915Z => cannot be understood properly

console.log(myDate.toString());//Sat Mar 16 2024 17:27:55 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); //Sat Mar 16 2024

console.log(myDate.toLocaleString()); //3/16/2024, 5:36:45 PM

console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23); 
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023 => it means months starting from 0th index in javascript (when declared individually)

let myCreatedDate1 = new Date(2023, 0, 25, 5, 3, 70)
console.log(myCreatedDate1.toLocaleString()); // 1/25/2023, 5:04:10 AM

let myCreatedDate2 = new Date("2023-01-14");
console.log(myCreatedDate2.toLocaleString()); //Sat Jan 14 2023 => it means when we give yy-mm-dd format, month starts from 1st index

let myCreatedDate3 = new Date("05-14-2023");
console.log(myCreatedDate2.toLocaleString()); // 1/14/2023, 12:00:00 AM  => date in Indian format(dd-mm-yy)

let myTimeStamp = Date.now()

console.log(myTimeStamp); //1710612049747

//Getting info about date,day,month,year,hour,minutes,seconds,milliseconds separately from a given dat
console.log(myCreatedDate.getTime()); //1674432000000



let newDate = new Date()
console.log(newDate.toDateString()); // 3/16/2024, 6:15:31 PM => Sat Mar 16 2024
console.log(newDate.getMonth() + 1); //3 => we are adding +1 because month starts from 0th index
console.log(newDate.getDay()); // 6 (0 = sunday, 1 = monday, .... 6 = saturday )

console.log(newDate.toLocaleString('default', {
    weekday: "long",
})) //saturday