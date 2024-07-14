const generateContacts = require("./scripts/generateContacts");
const addOneContact = require("./scripts/addOneContact");
const getAllContacts = require("./scripts/getAllContacts");
const countContacts = require("./scripts/countContacts");
const removeAllContacts = require("./scripts/removeAllContacts");
const removeLastContact = require("./scripts/removeLastContact");

//
generateContacts(5); // Generates 5 contacts
addOneContact(); // Adds one contact
console.log("All Contacts:", getAllContacts()); // Gets all contacts
console.log("Total Contacts:", countContacts()); // Counts total contacts
removeAllContacts(); // Removes all contacts
removeLastContact(); // Removes the last contact
