// Code your solution in this file!

// QUESTION 1
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  const headquartersLocation = 50;
  if (someValue >= headquartersLocation) {
    return someValue - headquartersLocation;
  } else {
    return headquartersLocation - someValue;
  }
}

//QUESTION 2
function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  const feetPerBlock = 100;
  const blocks = distanceFromHqInBlocks(someValue);
  const feet = blocks * feetPerBlock;
  return feet;
}

//QUESTION 3
function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  const feetPerBlock = 100;
  const distance = Math.abs(destination - start) * feetPerBlock;
  return distance;
}

//QUESTION 4
function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return "flat fare";
  } else {
    return "cannot travel that far";
  }
}
