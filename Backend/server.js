const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 6000;
const CONTACTS_FILE = 'contacts.json';

app.use(bodyParser.json());

// GET /api/contacts - Retrieve all contacts
app.get('/api/contacts', (req, res) => {
  fs.readFile(CONTACTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading contacts file');
    } else {
      const contacts = JSON.parse(data);
      res.json(contacts);
    }
  });
});

// GET /api/contacts/:id - Retrieve a specific contact by ID
app.get('/api/contacts/:id', (req, res) => {
  const contactId = req.params.id;

  fs.readFile(CONTACTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading contacts file');
    } else {
      const contacts = JSON.parse(data);
      const contact = contacts.find((c) => c.id === contactId);

      if (contact) {
        res.json(contact);
      } else {
        res.status(404).send('Contact not found');
      }
    }
  });
});

// POST /api/contacts - Create a new contact
app.post('/api/contacts', (req, res) => {
  fs.readFile(CONTACTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading contacts file');
    } else {
      const contacts = JSON.parse(data);
      const newContact = req.body;

      // Generate a unique ID for the new contact
      const nextId = contacts.length > 0 ? Math.max(...contacts.map((c) => c.id)) + 1 : 1;
      newContact.id = nextId;

      contacts.push(newContact);
      console.log(contacts)

      fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error writing contacts file');
        } else {
          res.status(201).json(newContact);
        }
      });
    }
  });
});

// PUT /api/contacts/:id - Update an existing contact
app.put('/api/contacts/:id', (req, res) => {
  const contactId = req.params.id;
  const updatedContact = req.body;

  fs.readFile(CONTACTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading contacts file');
    } else {
      let contacts = JSON.parse(data);
      const contactIndex = contacts.findIndex((c) => c.id === parseInt(contactId));

      if (contactIndex !== -1) {
        contacts[contactIndex] = { ...contacts[contactIndex], ...updatedContact };

        fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error writing contacts file');
          } else {
            res.json(contacts[contactIndex]);
          }
        });
      } else {
        res.status(404).send('Contact not found');
      }
    }
  });
});

// DELETE /api/contacts/:id - Delete a contact
app.delete('/api/contacts/:id', (req, res) => {
  const contactId = req.params.id;

  fs.readFile(CONTACTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading contacts file');
    } else {
      let contacts = JSON.parse(data);
      const contactIndex = contacts.findIndex((c) => c.id === parseInt(contactId));

      if (contactIndex !== -1) {
        const deletedContact = contacts[contactIndex];
        contacts.splice(contactIndex, 1);

        fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error writing contacts file');
          } else {
            res.json({
              deletedContact,
              success:true
            });

          }
        });
      } else {
        res.status(404).send('Contact not found');
      }
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
