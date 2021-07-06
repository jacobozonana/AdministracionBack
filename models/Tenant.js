const mongoose = require("mongoose");

const { Schema } = mongoose;

const tenantSchema = new Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
    },
    company: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    placemeters: {
      type: Number,
      required: true,
    },
    parkingmeters: {
      type: Number,
      required: true,
    },
    parkingplaces: {
      type: Number,
      required: true,
    },
    startdatecontract: {
      type: Date,
      required: true,
    },
    duedatecontract: {
      type: Date,
      required: true,
    },
    maintenance: {
      type: Number,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    guarantee: {
      type: Number,
      required: true,
    },
    tel: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contractor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;
