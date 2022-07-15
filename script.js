var months = ["January", "February", "March", "April" ,"May", "June", "July" ,"August" ,"September", "October" ,"November", "December"];

function getMonthName(getMonth) {
 return months[getMonth - 1];
}

//console.log(getMonthName(5));

let getMonth = prompt("Enter the number of the month");
let month = getMonthName(getMonth);
alert("The Month is" + " " + month);
