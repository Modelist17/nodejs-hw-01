// src/scripts/generateContacts.js

import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = (count) => {
  const db = JSON.parse(fs.readFileSync(PATH_DB, 'utf-8'));
  const contacts = db.contacts || [];

  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }

  fs.writeFileSync(PATH_DB, JSON.stringify({ contacts }, null, 2));
};

export default generateContacts;
