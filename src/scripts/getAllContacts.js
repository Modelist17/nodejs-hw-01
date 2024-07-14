// src/scripts/getAllContacts.js

const fs = require("fs");
const { PATH_DB } = require("../constants/contacts");

function getAllContacts() {
  try {
    const data = JSON.parse(fs.readFileSync(PATH_DB, "utf8"));
    return data;
  } catch (error) {
    console.error("Error reading contacts from db.json:", error);
    return [];
  }
}

module.exports = getAllContacts;
