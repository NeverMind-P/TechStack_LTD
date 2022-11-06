const express = require("express");
const router = express.Router();
const { getAll, getById, setApartment, deleteApartment } = require("../models/apartments.js");
const { body } = require('express-validator');
const { query } = require('express-validator/check');

router.get("/", [
    // Validation for query params
    query('price').isString().optional('asc','desc'),
    query('room').isInt()
  ], (req, res) => {
    try {
        getAll(req, res);
    } catch (error) {
        console.log(error)
    }
});

router.get("/:id", (req, res) => {
    try {
        getById(req, res);
    } catch (error) {
        console.log(error)
    }
});

router.post("/", (req, res) => {
    // Validation for body 
    body('name', 'description').notEmpty().isString({ max: 99 });
    body('room', 'price').notEmpty().isInt({ min: 0 });

    try {
        setApartment(req, res);
    } catch (error) {
        console.log(error)
    }
});

router.delete("/:id", (req, res) => {
    try {
        deleteApartment(req,res);
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
