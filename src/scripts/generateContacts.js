// src/scripts/generateContacts.js

const fs = require("fs");
const { PATH_DB } = require("../constants/contacts");
const createFakeContact = require("../utils/createFakeContact");

function generateContacts(numContacts) {
  const contacts = [];

  for (let i = 0; i < numContacts; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  try {
    let data = JSON.parse(fs.readFileSync(PATH_DB, "utf8"));
    data = [...data, ...contacts];
    fs.writeFileSync(PATH_DB, JSON.stringify(data, null, 2));
    console.log(`${numContacts} contacts generated and saved to ${PATH_DB}`);
  } catch (error) {
    console.error("Error writing contacts to db.json:", error);
  }
}

module.exports = generateContacts;
