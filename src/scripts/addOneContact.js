// src/scripts/addOneContact.js

const fs = require("fs");
const { PATH_DB } = require("../constants/contacts");
const createFakeContact = require("../utils/createFakeContact");

function addOneContact() {
  const newContact = createFakeContact();

  try {
    let data = JSON.parse(fs.readFileSync(PATH_DB, "utf8"));
    data.push(newContact);
    fs.writeFileSync(PATH_DB, JSON.stringify(data, null, 2));
    console.log("One contact added to db.json:", newContact);
  } catch (error) {
    console.error("Error adding contact to db.json:", error);
  }
}

module.exports = addOneContact;
