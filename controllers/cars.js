const express = require('express')
const router = express.Router()
const Car = require('../models/car')

// GET all cars: '/'
router.get('/', async (req, res)=>{
    try {
        // throw new Error('no cars')
        const allCars = await Car.find()
        res.status(200).json(allCars)
    } catch (err){
        res.status(500).json({Error: err.message})
    }
})

// POST a car: '/'
router.post('/', async (req, res)=>{
    try{
        const car = Car.create(req.body)
        res.status(201).json(car)
    } catch (err){
        res.status(500).json({Error: err.message})
    }
})

// GET a car: '/:carId'
router.get('/:carId', async (req, res)=>{
    try{
        const car = await Car.findById(req.params.carId)
        if (!car) {
            res.status(404);
            throw new Error('Car not found.');
        }
        res.status(200).json(car)
    } catch (err){
        if (res.statusCode === 404) {
            res.json({ error: err.message });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
})

// PUT an updated car: '/:carId'
router.put('/:carId', async (req, res)=>{
    try{
        const car = await Car.findByIdAndUpdate(req.params.carId, req.body, {new: true})
        if (!car) {
            res.status(404);
            throw new Error('Car not found.');
        }
        res.status(200).json(car);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }    
    }    
})

// DELETE a car: '/:carId'
router.delete('/:carId', async (req, res)=>{
    try{
        const car = await Car.findByIdAndDelete(req.params.carId)
        if (!car) {
            res.status(404);
            throw new Error('Car not found.');
        }
        res.status(200).json(car);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
})


module.exports = router;

