import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required,
    },
    pincode: {
      type: String,
      required,
    },
    specializedIn: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
