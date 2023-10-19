import mongoose from 'mongoose';
import { ContactSchema } from '../Models/crmModel.js';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save()
    .then(result => {
        res.json(result)
    })
    .catch((e) => res.send(e))
};

export const getContacts = (req, res) => {
    Contact.find({}).then((result) => res.send(result)).catch((e) => res.send(e))
}

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactId)
    .then((result) => res.send(result)).catch((e) => res.send(e))
}
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, { new: true })
    .then((result) => res.send(result)).catch((e) => res.send(e))
}
export const deleteContact = (req, res) => {
    Contact.deleteOne({_id: req.params.contactId})
    .then(() => res.json({message: 'Successfully deleted contact'})).catch((e) => res.send(e))
}