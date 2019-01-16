
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
  created_date: { type: Date, default: Date.now }
})

export const User = mongoose.model('User', userSchema, 'users');
