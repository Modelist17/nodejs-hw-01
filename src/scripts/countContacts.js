// src/scripts/countContacts.js

import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const countContacts = () => {
  const db = JSON.parse(fs.readFileSync(PATH_DB, 'utf-8'));
  const contacts = db.contacts || [];
  return contacts.length;
};

export default countContacts;
