const express = require("express");
const router = express.Router();
const { getAll, getById, setApartment, deleteApartment, getFiltered } = require("../models/apartments.js");
const { body } = require('express-validator');
const { query } = require('express-validator/check');

router.get("/", [
    // Validation for query params
    query('price').isString().optional('asc','desc'),
    query('room').isInt()
  ], async (req, res) => {
    const { room, price } = req.query
    try {
        if(room && price){
            const response =  await getFiltered(room, price);
            return res.json(response.rows).status(200);
        } else {
            const response = await getAll()
            return res.json(response.rows).status(200)
        }    
    } catch (error) {
        console.error(error);
        res.status(404);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getById(id)
        return res.json(response.rows).status(200)
    } catch (error) {
        console.error(error);
        res.status(404);
    }
});

router.post("/", async (req, res) => {
    // Validation for body 
    body('name', 'description').notEmpty().isString({ max: 99 });
    body('room', 'price').notEmpty().isInt({ min: 0 });

    const { room, name, price, description } = req.body;

    try {
        await setApartment({ room, name, price, description })
        return res.status(200).send('Succesfully');
    } catch (error) {
        console.error(error);
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await deleteApartment(id)
        return res.status(200).send('Succesfully deleted');
    } catch (error) {
        console.error(error);
        res.status(404);
    }
});

module.exports = router;
