const contactsOperations = require('./contacts');

(async () => {
    try {
        // const contacts = await contactsOperations.listContacts();
        // console.log(contacts);
        
        // const id = 10;
        // const contacts = await contactsOperations.getContactById(id);
        // console.log(contacts);
        
        // const id = 9;
        // const contacts = await contactsOperations.removeContact(id);
        // console.log(contacts);

        // const newContact = await contactsOperations.addContact("Tom", "fffff@mail.com", "123456");
        // console.log(newContact);
        
    } catch (error) {
        console.log(error.message);
    }
})();
// const contacts =  contactsOperations.listContacts();
// console.log(contacts);

// const contacts = contactsOperations.getContactById(1);
// console.log(contacts);