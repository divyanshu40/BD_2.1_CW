let express = require("express");

let app = express();
let PORT = 3000;
app.listen(PORT, () => {
  console.log("This server is running");
});
// Exercise 1: Return the Person Object
let person = {
  firstName: "Amit",
  secondName: "Sharma",
  gender: "Male",
  age: 30,
  isMember: true,
};
app.get("/person", (req, res) => {
  res.json(person);
});
// Exercise 2: Access the Full Name of the Person
function getFullName(person) {
  return person.firstName + " " + person.secondName;
}
app.get("/person/fullName", (req, res) => {
  let fullName = getFullName(person);
  res.json({ fullName: fullName });
});
// Exercise 3: Access Just the First Name and Gender of the Person
function getFirstNameAndGender(person) {
  return {
    firstName: person.firstName,
    gender: person.gender,
  };
}
app.get("/person/firstName-gender", (req, res) => {
  let fisrtNameAndGender = getFirstNameAndGender(person);
  res.json(fisrtNameAndGender);
});
// Exercise 4: Increment the Age of the Person and Return the Updated Object
function getUpdatedObject(person) {
  person.age = person.age + 1;
  return person;
}
app.get("/person/increment-age", (req, res) => {
  let updatedObject = getUpdatedObject(person);
  res.json(updatedObject);
});
// Exercise 5: Return the Full Name and Membership Status of the Person
function getFullNameAndMemberShip(person) {
  return {
    fullName: person.firstName + " " + person.secondName,
    isMember: person.isMember,
  };
}
app.get("/person/fullName-membership", (req, res) => {
  let fullNameAndMembership = getFullNameAndMemberShip(person);
  res.json(fullNameAndMembership);
});
// Exercise 6: Get Final Price After Discount for Members
function getFinalPrice(cartTotal) {
  let finalPrice;
  if (person.isMember === true) {
    finalPrice = cartTotal - cartTotal * 0.1;
  } else {
    finalPrice = cartTotal;
  }
  return finalPrice;
}
app.get("/person/final-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  res.json({ finalPrice: getFinalPrice(cartTotal) });
});
// Exercise 7: Get Shipping Cost Based on Cart Total and Membership Status
function getShippingCost(cartTotal) {
  let shippingCost;
  if (cartTotal > 500 && person.isMember === true) {
    shippingCost = 0;
  } else {
    shippingCost = 99;
  }
  return shippingCost;
}
app.get("/person/shipping-cost", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  res.json({ shippingCost: getShippingCost(cartTotal) });
});
