// src/scripts/removeLastContact.js

import fs from "fs";
import { PATH_DB } from "../constants/contacts.js";

const removeLastContact = () => {
  const db = JSON.parse(fs.readFileSync(PATH_DB, "utf-8"));
  const contacts = db.contacts || [];

  if (contacts.length > 0) {
    contacts.pop();
    fs.writeFileSync(PATH_DB, JSON.stringify({ contacts }, null, 2));
  }
};

export default removeLastContact;
