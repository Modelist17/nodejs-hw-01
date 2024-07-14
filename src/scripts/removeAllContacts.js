// src/scripts/removeAllContacts.js

const fs = require("fs");
const { PATH_DB } = require("../constants/contacts");

function removeAllContacts() {
  try {
    fs.writeFileSync(PATH_DB, "[]");
    console.log("All contacts removed from db.json");
  } catch (error) {
    console.error("Error removing contacts from db.json:", error);
  }
}

module.exports = removeAllContacts;
