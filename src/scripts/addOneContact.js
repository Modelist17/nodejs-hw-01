// src/scripts/addOneContact.js

import fs from "fs";
import { PATH_DB } from "../constants/contacts.js";
import createFakeContact from "../utils/createFakeContact.js";

const addOneContact = () => {
  const db = JSON.parse(fs.readFileSync(PATH_DB, "utf-8"));
  const contacts = db.contacts || [];

  contacts.push(createFakeContact());

  fs.writeFileSync(PATH_DB, JSON.stringify({ contacts }, null, 2));
};

export default addOneContact;
