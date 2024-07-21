// src/scripts/removeAllContacts.js

import fs from "fs";
import { PATH_DB } from "../constants/contacts.js";

const removeAllContacts = () => {
  fs.writeFileSync(PATH_DB, JSON.stringify({ contacts: [] }, null, 2));
};

export default removeAllContacts;
