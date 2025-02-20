import { saveContacts } from '../utils/saveContacts.js';

export const generateContacts = async (num) => {
  await saveContacts(num);
};

generateContacts(10);
