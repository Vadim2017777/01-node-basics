var contactFunction = require("./contacts.js");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactFunction.listContacts();
      break;

    case "get":
      contactFunction.getContactById(id);
      break;

    case "add":
      contactFunction.addContact(name, email, phone);
      break;

    case "remove":
      contactFunction.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
