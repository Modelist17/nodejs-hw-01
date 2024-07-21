// src/scripts/getAllContacts.js

import fs from "fs";
import { PATH_DB } from "../constants/contacts.js";

const getAllContacts = () => {
  const db = JSON.parse(fs.readFileSync(PATH_DB, "utf-8"));
  const contacts = db.contacts || [];
  return contacts;
};

export default getAllContacts;
