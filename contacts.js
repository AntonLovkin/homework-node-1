const { v4 } = require('uuid');
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, "db/contacts.json");
// console.log(contactsPath);

// TODO: задокументировать каждую функцию
async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        return contacts;
        
    } catch (error) {
        throw error;
    }
}

async function getContactById(contactId) {
  try {
      const contacts = await listContacts();
      const selectContactById = contacts.find(item => item.id === contactId);
        if(!selectContactById){
            throw new Error(`Contact with id=${contactId} not found`);
        }
        return selectContactById;
    
    }
    catch(error){
        throw error;
    }
}

async function removeContact(contactId) {
  try {
        const contacts = await listContacts();
        const idx = contacts.findIndex(item => item.id === contactId);
        if(idx === -1){
            throw new Error(`Contact with id=${contactId} not found`);
        }
        const newListContacts = contacts.filter(item => item.id !== contactId);
        // const delProduct = products.splice(idx, 1);
        await updateContacts(newListContacts);
        return contacts[idx];
    }
    catch(error){
        throw error;
    }
}

async function addContact(name, email, phone) {
try {
  const newContact = { name, email, phone, id: v4() };
  const contacts = await listContacts();
//   const newListContacts =  contacts.push(newContact);
  const newListContacts = [...contacts, newContact];
  await updateContacts(newListContacts);
  return newContact;
}
catch (error) { 
}
};

async function updateContacts (contacts) {
    const contactsString = JSON.stringify(contacts);
    await fs.writeFile(contactsPath, contactsString);
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};