var personeName = "Jawad";
console.log(personeName.toLowerCase());
console.log(personeName.toUpperCase());
console.log(personeName.replace(/\b\w/, function (char) { return char.toLowerCase(); }));