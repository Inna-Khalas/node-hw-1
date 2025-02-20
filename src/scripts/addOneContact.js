import { saveContacts } from '../utils/saveContacts.js';

export const addOneContact = async () => {
  await saveContacts();
};
addOneContact();
