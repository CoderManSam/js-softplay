// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.


// function enter(numAdults, numChildren): checks that whenever a child enters at least one adult enters as well
// if it does it returns true, otherwise false. If true add numAdults and numChildren to current total

// function leave(same as above): checks the following conditions, if any fail returns false, otherwise true
// if true deduct the numAdults and numChildren from the current total
// child not attempting to leave without an adult
// there are as many or more adults than kids remaining
// every child leaving there is at least one adult leaving with them
// the no of adults and children leaving is not greater than the number in the center

// function occupancy() should return an object with two keys: adult and children


function resetTotal () {
  totalAdults = 0
  totalChildren = 0
}

let totalAdults = 0
let totalChildren = 0

function enter(numAdults, numChildren) {

  let equalOrMoreAdultsToChildrenEntering = true

  if (numChildren > numAdults) {

    equalOrMoreAdultsToChildrenEntering = false

  }

  if (equalOrMoreAdultsToChildrenEntering === true) {

    adults += numAdults;
    children += numChildren;
    totalAdults += numAdults;
    totalChildren += numChildren

  }


  return equalOrMoreAdultsToChildrenEntering

}

console.log("there are as many or more adults entering than kids: ", enter( 7, 6))
console.log("the number of adults entering is: ", adults)
console.log("the number of children entering is: ", children)


function leave(numAdults, numChildren) {

  let equalOrMoreAdultsToChildrenLeaving = true

  if (numChildren > numAdults ||
    (adults - numAdults) < (children - numChildren) ||
    numAdults > adults || 
    numChildren > children) {

    equalOrMoreAdultsToChildrenLeaving = false

  }

  if (equalOrMoreAdultsToChildrenLeaving === true) {

    adults -= numAdults;
    children -= numChildren;

  }

  console.log("the number of adults leaving is: ", numAdults)
  console.log("the number of children leaving is: ", numChildren)


  return equalOrMoreAdultsToChildrenLeaving

}

console.log("there are as many or more adults leaving than kids: ", leave( 2, 2))
console.log("the number of adults remaining is: ", adults)
console.log("the number of children remaining is: ", children)


function occupancy() {

  let currentOccupancy = {
    adults: adults,
    children: children
  }
  

  return currentOccupancy

}

console.log("the current occupancy is: ", occupancy())


function total() {

  let totalEntered = {
    totalAdults: totalAdults,
    totalChildren: totalChildren
  }
  

  return totalEntered

}

console.log("total number of adults and children that entered today is: ", total())

console.log("there are as many or more adults entering than kids: ", enter( 7, 6))

console.log("total number of adults and children that entered today is: ", total())

console.log("there are as many or more adults entering than kids: ", enter( 7, 6))

console.log("total number of adults and children that entered today is: ", total())


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset,
  total: total,
  resetTotal: resetTotal,
}
