// src/scripts/removeLastContact.js

const fs = require("fs");
const { PATH_DB } = require("../constants/contacts");

function removeLastContact() {
  try {
    let data = JSON.parse(fs.readFileSync(PATH_DB, "utf8"));
    if (data.length > 0) {
      const removedContact = data.pop();
      fs.writeFileSync(PATH_DB, JSON.stringify(data, null, 2));
      console.log("Last contact removed from db.json:", removedContact);
    } else {
      console.log("No contacts to remove.");
    }
  } catch (error) {
    console.error("Error removing last contact from db.json:", error);
  }
}

module.exports = removeLastContact;
