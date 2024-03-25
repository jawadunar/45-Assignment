//16
//creat a Array
var guestlist = ["Wajid", "Ali", "Samer", "Urooj",];
// Making varible for those guest who cant come
var dontcome = guestlist[3];
// Print the name of guset list Array
console.log(dontcome, "He is not coming ");
//Add or Remove Valuse form Guest List Array
guestlist.splice(3, 1, "khan");
//Massage Print for Bigger Table
console.log("Good News ! we have found a Big Table For dinner");
//Add a New  guset value at statring index of array 
guestlist.unshift("Jaam");
//Get a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 3);
//Adding a new Guest to middle of array
guestlist.splice(middleindex, 0, "Sawan");
//print massage
console.log("Updated List of our guest");
//sending invitation massage
guestlist.forEach(function (oneGuest) { return console.log("Hi ".concat(oneGuest, " would you like to  my dinner")); });
