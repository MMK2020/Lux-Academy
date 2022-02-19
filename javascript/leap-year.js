function checkLeap(year){
 this.year = year;
if(year<1){
    //Checks so that only a positive value is entered.
    console.log(year, "is not a valid year");
}
else{
 //Leap year Algorithm
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return 1; // It is a leap year
    } else {
    return 0; // not a leap year
    }
}
}
console.log(checkLeap(2022));