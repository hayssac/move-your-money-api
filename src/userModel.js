
import mongoose from 'mongoose';

const mockSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name:  {
    type: String,
    required: true
  },
});

const Mock = mongoose.model('Mock', mockSchema);

export default Mock