const { User, Tenant } = require("../models");
const { UserService, MailService } = require("../services");
const { comparePasswords, createToken } = require("../utils");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

module.exports = {
  findAll: (req, res) => {
    User.findById(req.params.id).then((info) => {
      let role = info.role;
      if (role !== "admin")
        res.status(400).json({ message: "No tienes acceso" });
      else {
        Tenant.find()
          .then((resDB) => res.status(200).json(resDB))
          .catch((Error) => console.log(Error));
      }
    });
  },
  findOne: (req, res) => {
    Tenant.findById(req.params.id)
      .then((resDB) => res.status(200).json(resDB))
      .catch((Error) => console.log(Error));
  },
  create: (req, res) => {
    User.findById(req.params.id).then((info) => {
      let role = info.role;
      if (role !== "admin" && role !== "user")
        res.status(400).json({ message: "No tienes acceso" });
      else {
        const { body } = req;
        const newTenant = new Tenant(body);
        newTenant
          .save()
          .then((resDB) => res.status(201).json(resDB))
          .catch((Error) => console.log(Error));
      }
    });
  },
  change: (req, res) => {
    User.findById(req.params.id).then((info) => {
      let role = info.role;
      if (role !== "admin" && role !== "user")
        res.status(400).json({ message: "No tienes acceso" });
      else {
        Tenant.findById(req.params.id2).then(async (info) => {
          const { body } = req;
          Tenant.findByIdAndUpdate(req.params.id2, body, { new: true })
            .then((resDB) => res.status(200).json(resDB))
            .catch((err) => res.status(400).json(err));
        });
      }
    });
  },
  delete: (req, res) => {
    User.findById(req.params.id).then((info) => {
      let role = info.role;
      if (role !== "admin" && role !== "user")
        res.status(400).json({ message: "No tienes acceso" });
      else {
        Tenant.findByIdAndDelete(req.params.id2)
          .then(() => res.status(200).json({ message: "Arrendatario borrado" }))
          .catch((err) => res.status(400).json(err));
      }
    });
  },
};
