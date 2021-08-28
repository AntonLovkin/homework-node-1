const yargs = require('yargs');
const { hideBin } = require("yargs/helpers");
const { Command } = require('commander');

const contactsOperations = require('./contacts');
const { options } = require('yargs');

// (async () => {
//     try {
//         // const contacts = await contactsOperations.listContacts();
//         // console.log(contacts);
        
//         // const id = 10;
//         // const contacts = await contactsOperations.getContactById(id);
//         // console.log(contacts);
        
//         // const id = "53bea422-62c1-4fab-bd7b-9d1e052347f6";
//         // const contacts = await contactsOperations.removeContact(id);
//         // console.log(contacts);

//         // const newContact = await contactsOperations.addContact("Tom", "fffff@mail.com", "123456");
//         // console.log(newContact);
        
//     } catch (error) {
//         console.log(error.message);
//     }
// })();

//////////////////////////////////////////////////////////////////////////////////////////
// const arr = hideBin(process.argv);
// // console.log(arr);

// const { argv } = yargs(arr);
// // console.log(argv);

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//           (async () => {
//               try {
//                   const contacts = await contactsOperations.listContacts();
//                   console.log(contacts);
//               }
//               catch (error) {
//                   console.log(error.message);
//               }
//           })();
//           break;

//     case 'get':
//        (async () => {
//               try {
//                   const contact = await contactsOperations.getContactById(id);
//                   console.log(contact);
//               }
//               catch (error) {
//                   console.log(error.message);
//               }
//           })();
//       break;

//     case 'add':
//       (async () => {
//               try {
//                   const newContact = await contactsOperations.addContact(name, email, phone);
//                   console.log(newContact);
//               }
//               catch (error) {
//                   console.log(error.message);
//               }
//           })();
//       break;

//     case 'remove':
//       (async () => {
//               try {
//                   const removedContact = await contactsOperations.removeContact(id);
//                   console.log(removedContact);
//               }
//               catch (error) {
//                   console.log(error.message);
//               }
//           })();
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);

//////////////////////////////////////////////////////////////

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        (async () => {
              try {
                  const contacts = await contactsOperations.listContacts();
                  console.log(contacts);
              }
              catch (error) {
                  console.log(error.message);
              }
          })();
      break;

    case 'get':
        (async () => {
              try {
                  const contact = await contactsOperations.getContactById(id);
                  console.log(contact);
              }
              catch (error) {
                  console.log(error.message);
              }
          })();
      break;

    case 'add':
       (async () => {
              try {
                  const newContact = await contactsOperations.addContact(name, email, phone);
                  console.log(newContact);
              }
              catch (error) {
                  console.log(error.message);
              }
          })();
      break;

    case 'remove':
      (async () => {
              try {
                  const removedContact = await contactsOperations.removeContact(id);
                  console.log(removedContact);
              }
              catch (error) {
                  console.log(error.message);
              }
          })();
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);