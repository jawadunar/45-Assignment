      //Making a Array of countries and pirnt its Orginal order 
let conutryiesTOvisit :string[] = ["Afghanist","Brazil","China","Denmark",];
   console.log("Orginal way:",conutryiesTOvisit);

//Print the array in Alphabetical way without modifying the Actual Array list
   console.log("Alphabetical Way:",[...conutryiesTOvisit].sort());

// show that the array is still in its Orginal way
   console.log("Still in orginal way:",conutryiesTOvisit);

   //Pirnt the Array in Reversed way without modifyig the Actual Array List
   console.log("Reverse order:",[...conutryiesTOvisit].reverse());

//show that the array is still in its Orginal way
   console.log("Still in orginal way:",conutryiesTOvisit);

// we have changed the orginal Array way Now
   console.log("Orginal Array Reversed:",conutryiesTOvisit.reverse());
//print the array to show that it's back to its orginal way now
   console.log("Back to orginal way:",conutryiesTOvisit.reverse());

//print the array to show that it's way has been changed in Alphabatical way now 
   console.log("Sorted in Alphabetical way:", conutryiesTOvisit.sort())

//we have changed the  Agin orginal Array way Now in reverse 
console.log("Orginal Array Reversed:",conutryiesTOvisit.reverse());

