//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Object 
O: Return objet values in an array
C: n/a
E: n/a
*/
// Use Object.values() to return object values in an array
function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Object
O: Return object keys in a string seperated with a space
C: n/a
E: n/a
*/
// Create new array assigned to Object.keys()
// Use Object.keys to create an array of all the object keys
// Use .join() to join values of the array into a string
function keysToString(object) {
    var newString = Object.keys(object)
    return newString.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
    I: Object
    O: Values of object turned into a string value each seperated by a space
    C: n/a
    E: n/a
    */
   // Create storage array and set it equal to Object.values()
   // Test which values on the storage array are strings using for loop and typeof method
   // Force the string values onto new string array
   // Use join to 
function valuesToString(object) {
    var valuesOfObject = Object.values(object)
    var strings = [];
    for (var i = 0; i < valuesOfObject.length; i++){
        if (typeof valuesOfObject[i] === 'string'){
            strings.push(valuesOfObject[i]);
        }
    }
    return strings.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
    I: Argument
    O: Return array
    C: n/a
    E: n/a
    */
   /** Use if conditional to test 
    * if argument is an array using Array.isArray() method
    * if argument is an object using typeof method
    */
    // Return array if arguement is an array
    // Return an bject if arguement is an object literal
function arrayOrObject(collection) {
    if (Array.isArray(collection) === true){
        return 'array';
    }
    else if (typeof collection === 'object'){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
    I: String of one word
    O: Return word with first letter capitalized
    C:
    E:
    */
   // Access the fist character on the string 
   // use .toUpperCase() to capitalize the character
   // Concatenate the first character with a slice of the rest of the string
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
    I: String of words
    O: String of words with first letters all capitalized
    C: n/a
    E: n/a
    */
   // intiialize new array equal to the value of using .split() method to split the string into an array
   // Create another empty storage array for the new capital words
   // Iterate over new array using for loop and charAt to access the first character at each index
   // Use a second for loop and .slice() method to access the remianing characters in each words
   // Concatenate the capital letters with the .slcie() portion of the word
    //
function capitalizeAllWords(string) {
    var arrayOfString = string.split(' ');
    var capitalWords = [];
    for (var i = 0; i < arrayOfString.length; i++){
        
    } 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}