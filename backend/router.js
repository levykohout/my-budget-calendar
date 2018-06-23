import express, { Router } from 'express';
import Entry from './models/entry';
// Import index action from movies controller
import { index } from './controllers/entries';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/entries.json')
  .get(index);

  router.delete('/:id', function(req, res) {
    var id = req.params.id;

    Entry.remove({
        "_id": id
    }).then(function(entry) {
        res.sendStatus(200);

    }).catch(function(err) {
        console.log('Error in deleting entry', err);
        res.sendStatus(500);
    });
});

router.post('/', function(req, res) {
    var entry = new Entry(req.body);
console.log('tHIS IS REQUEST BODY', req.body);
    entry.save().then(function(entry) {
        res.sendStatus(201);
    }).catch(function(err) {
        console.log('Theres an error creating an entry', err);
        res.sendStatus(500);
    });
});


export default router;