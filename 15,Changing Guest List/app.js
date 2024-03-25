var gustlist = ["wajid", "Ali", "Samer", "Urooj"];
var dontcome = gustlist["3"];
console.log(dontcome, "he is not come in Dinner");
gustlist.splice(3, 3, "khan");
gustlist.forEach(function (guest) { return console.log("hi ".concat(guest, " place  i would like to dinner with me ")); });
