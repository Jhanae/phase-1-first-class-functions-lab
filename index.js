// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) => {
    const newArray = [driverArray[0],driverArray[1]]
    return newArray
}
const returnLastTwoDrivers = (driverArray) => {
    const newArray = [driverArray[driverArray.length-2],driverArray[driverArray.length-1]]
    return newArray
}   
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
  
const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };