import Entry from '../models/entry';
import moment from 'moment';


export const index = (req, res, next) => {
  // Find all entries and return json response
  Entry.find().lean().exec((err, entries) => res.json(
       { entries: entries.map(entry => ({
      ...entry,
     }))}
  ));
};