
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = 0;
let numOfAstronauts =0;
let altitude = 0;
const input = require('readline-sync');



//Exercise #4: Construct while loops to do the following:

//a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
fuelLevel = Number(input.question("Please enter the starting fuel level. Must be greater than 5,000 but no higher then 30,000: "));

while (fuelLevel < 5000 || fuelLevel > 30000 || isNaN(fuelLevel) ) { // isNaN is used incase the users inputs a letter instead of a number.
  fuelLevel = Number(input.question("Invalid input. Please enter the starting fuel level. Must be greater than 5,000 but no higher then 30,000: "));
  
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  // numOfAstronauts = Number(input.question("Please enter the number of astronauts for this mission. Must be 1 - 7: "));
numOfAstronauts = Number(input.question(`Please enter the number of astronauts for this mission. Must be 1 - 7: `));

while (numOfAstronauts < 1 || numOfAstronauts > 7 || isNaN(numOfAstronauts) ) { // isNaN is used incase the users inputs a letter instead of a number.
  
  numOfAstronauts = Number(input.question(`Invalid Input. Please enter the number of astronauts for this mission. Must be 1 - 7: `));
  // error = "Invalid Input. " I originally had the error message run only if the while loop has gone through twice, but it wouldn't work on the loop above too for some reason.
}
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while ( fuelLevel > (numOfAstronauts * 100) && fuelLevel !== 0 ) {

  fuelLevel -= (100 * numOfAstronauts);
  altitude += 50;
  
  console.log(`Altitude: ${altitude}km and fuel level: ${fuelLevel}`);
  // if(altitude >= 2000){
  //   break;
  // }  originally had this because orbit is 2000km or higher, but the instructions don't really say to add it.
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if(altitude >= 2000){
  console.log(`The shuttle gained an altitude of ${altitude}km. Orbit Achived!`);
} else {
  console.log(`The shuttle gained an altitude of ${altitude}km. Failed to reach orbit of 2000km or greater.`);
}
