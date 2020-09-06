const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "../db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) throw err;
    console.table(data);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, function (err, data) {
    if (err) throw err;
    let json = JSON.parse(data);
    let contact = json.filter((contact) => contact.id === Number(contactId));
    console.log(JSON.stringify(contact));
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, function (err, data) {
    let json = JSON.parse(data);
    let contacts = json.filter((contact) => contact.id !== Number(contactId));

    fs.writeFile(contactsPath, JSON.stringify(contacts), function (err) {
      if (err) throw err;
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, function (err, data) {
    let json = JSON.parse(data);
    let lastId = json.length + 1;
    json.push({ id: lastId, name, email, phone });

    fs.writeFile(contactsPath, JSON.stringify(json), function (err) {
      if (err) throw err;
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
