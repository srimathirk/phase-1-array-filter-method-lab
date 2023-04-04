// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driversName,nameString){
    return driversName.filter(function (driversName){return driversName.toUpperCase() === nameString.toUpperCase()});
}
function fuzzyMatch(driversName,nameString){
    return driversName.filter(function (driversName){return driversName.charAt(0) === nameString.charAt(0)});
}
function matchName(driversName,nameString){
    return driversName.filter(function (driversName){return driversName.name.toLowerCase() === nameString.toLowerCase()});
}