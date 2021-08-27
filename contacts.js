const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, "db/contacts.json");
// console.log(contactsPath);

// TODO: задокументировать каждую функцию
async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        console.log(contacts);
        
    } catch (error) {
        throw error;
    }
}

function getContactById(contactId) {
  // ...твой код
    console.log('Hello');
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};