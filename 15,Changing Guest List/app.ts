let gustlist = ["wajid","Ali","Samer","Urooj"];

let dontcome = gustlist["3"];

console.log(dontcome,"he is not come in Dinner");

gustlist.splice(3,3,"khan");

gustlist.forEach(guest  => console.log(`hi ${guest} place  i would like to dinner with me `));
