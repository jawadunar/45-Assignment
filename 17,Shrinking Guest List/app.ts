 //17
     //creat a Array
     let guestlist = ["Wajid", "Ali","Samer","Urooj",];
     // Making varible for those guest who cant come
let dontcome = guestlist[3];
     // Print the name of guset list Array
console.log(dontcome,"He is not coming ");
     //Add or Remove Valuse form Guest List Array
guestlist.splice(3,1,"khan");
     //Massage Print for Bigger Table
console.log("Good News ! we have found a Big Table For dinner");
     //Add a New  guset value at statring index of array 
guestlist.unshift("Jaam");
     //Get a middle index of our guest list array
let middleindex: number = Math.floor(guestlist.length / 3);
    //Adding a new Guest to middle of array
guestlist.splice(middleindex,0,"Sawan");
    //print massage
console.log("Updated List of our guest");
    //sending invitation massage
guestlist.forEach(oneGuest => console.log(`Hi ${oneGuest} would you like to  my dinner`));

 //inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive one time,so I can only invint two guset to dinner with me");
     //use to loop to remove guest form the array until only two names remain
while(guestlist.length > 2){
     let RemoveGuest = guestlist.pop();
     console.log(`sorry,${RemoveGuest} I cant invit you to dinner`)

}
    //sending a invitation to the last two guest  on the last 
console.log("invitation to the last  2 guest ");
guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`));

   // Removing last two guest form last
guestlist.pop();
guestlist.pop();

console.log("Empty last:" ,guestlist);






     








