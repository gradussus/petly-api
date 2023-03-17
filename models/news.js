const {
  listContactsService,
  getContactByIdService,
  removeContactService,
  addContactService,
  updateContactService,
  updateStatusContactService,
} = require("../services/contactsService");

const { NotFoundError } = require("../helpers/errors");

const listContacts = async (req, res) => {};

const getContactById = async (req, res) => {};

const removeContact = async (req, res) => {};

const addContact = async (req, res) => {};

const updateContact = async (req, res) => {};

const updateStatusContact = async (req, res) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
