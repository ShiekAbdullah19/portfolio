import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    console.log(req.body);

    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await newContact.save();

    res.status(201).json("Message Sent Successfully");

  } catch (error) {

    console.log(error);

    res.status(500).json(error);

  }

});

export default router;