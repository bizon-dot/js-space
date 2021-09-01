/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere.
To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5% and 23.5%.
Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%
*/

function safeLevels(array) {
  let start = 1950;
  let end = 2350;
  let safePlanets = [];
  let range = [];
  for (start; start < end; start++) {
    let numbPerc = `${(start / 100).toString()}%`;
    range.push(numbPerc);
  }
  /* console.log(range); */
  range.forEach((num) =>{
    if (array.includes(num)) {
             let safePlanet ={};
             let key = array.indexOf(num);
             safePlanet.id = key;
             safePlanet.oxLev = num;
             safePlanets.push(safePlanet);
    }
    
  });
  return safePlanets;
  

}



/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"]
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"]


const safe = safeLevels(oxygenLevels1);
console.log(safe);

