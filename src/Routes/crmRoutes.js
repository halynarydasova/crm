import { addNewContact, getContacts, getContactWithId, updateContact, deleteContact} from '../Controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();  
    }, getContacts)
    .post(addNewContact);

    app.route('/contact/:contactId')
    .put(updateContact)
    .get(getContactWithId)
    .delete(deleteContact)
}

export default routes;
