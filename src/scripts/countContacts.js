// src/scripts/countContacts.js

const fs = require("fs");
const { PATH_DB } = require("../constants/contacts");

function countContacts() {
  try {
    const data = JSON.parse(fs.readFileSync(PATH_DB, "utf8"));
    return data.length;
  } catch (error) {
    console.error("Error counting contacts from db.json:", error);
    return 0;
  }
}

module.exports = countContacts;
