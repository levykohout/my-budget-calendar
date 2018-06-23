import mongoose, { Schema } from 'mongoose';

// Define movie schema
var entrySchema = new Schema({
  title: String,
  entryType: String,
  amount: Number,
  entryDate: Date,
  recurring: Boolean,
  frequency:String,
});

// Export Mongoose model
export default mongoose.model('entry', entrySchema);