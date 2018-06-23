import mongoose from 'mongoose';
import Entry from './models/entry';
import moment from 'moment';
const entries = [
  {
    title: 'Lunch',
    entryType: 'Expense',
    amount: 8,
    entryDate: new Date(2018, 5, 22),
    recurring: false,
    frequency:'One-Time Expense'
  },
  {
    title: 'Aspire Student Loan',
    entryType: 'Bill',
    amount: 500,
    entryDate: new Date(2018, 5, 22),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Student Loan',
    entryType: 'Bill',
    amount:214.73,
    entryDate: new Date(2018, 5, 22),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Home Equity',
    entryType: 'Bill',
    amount:216.86,
    entryDate:new Date(2018, 5, 15),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Home Mortgage',
    entryType: 'Bill',
    amount:843.77,
    entryDate: new Date(2018, 5, 15),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Cellphone Service',
    entryType: 'Bill',
    amount:215.68,
    entryDate: new Date(2018, 5, 14),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'WellsFargo',
    entryType: 'Credit Card',
    amount:160,
    entryDate: new Date(2018, 5, 11),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Sears Payment',
    entryType: 'Credit Card',
    amount:622,
    entryDate:new Date(2018, 5, 19),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Horace Mann',
    entryType: 'Bill',
    amount:298.93,
    entryDate:new Date(2018, 5, 15),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Minneapolis Finance Department',
    entryType: 'Bill',
    amount:129.14,
    entryDate: new Date(2018, 5, 8),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'American Express Payment',
    entryType: 'Credit Card',
    amount:347.27,
    entryDate: new Date(2018, 5, 7),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Sams Club(Levy) Payment',
    entryType: 'Credit Card',
    amount:27,
    entryDate: new Date(2018, 5, 4),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Sams Club(Brian) Payment',
    entryType: 'Credit Card',
    amount:500,
    entryDate: new Date(2018, 5, 4),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Toyota',
    entryType: 'Loan',
    amount:539.04,
    entryDate: new Date(2018, 5, 28),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Excel Energy',
    entryType: 'Bill',
    amount:133.38,
    entryDate: new Date(2018, 5, 3),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Paypal Payment',
    entryType: 'Credit Card',
    amount:115,
    entryDate: new Date(2018, 5, 29),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Centerpoint Energy',
    entryType: 'Bill',
    amount:30,
    entryDate: new Date(2018, 5, 25),
    recurring: true,
    frequency:'Monthly'
  },
  {
    title: 'Xfinity Internet',
    entryType: 'Bill',
    amount:54.99,
    entryDate: new Date(2018, 5, 4),
    recurring: true,
    frequency:'Monthly'
  },
];
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000
};

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/entries',option);

// Go through each movie
entries.map(data => {
  // Initialize a model with movie data
  const entry = new Entry(data);
  // and save it into the database
  entry.save();
});