// Your code here.
function getFirstName(obj) {

  return obj.firstName;

}

//=======================================================//

function getLastName(obj) {

  return obj.lastName;

}

//=======================================================//

function getFullName(obj) {

  return obj.firstName + " " + obj.lastName;

}

//=======================================================//

function setFirstName(obj, newName) {

  obj.firstName = newName; 

}

//=======================================================//

function setAge() {

  


}





// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
