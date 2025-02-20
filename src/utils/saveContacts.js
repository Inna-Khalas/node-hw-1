import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from './readContacts.js';
import { writeContacts } from './writeContacts.js';

export const saveContacts = async (number = 1) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    await writeContacts([...contacts, ...newContacts]);
  } catch (error) {
    console.error(error.message);
  }
};
