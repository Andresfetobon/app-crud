import axios from "axios"
import { useState } from "react"

const useFetch = () => {

    const BaseUrl = 'http://cars-crud.academlo.tech/'
   
    const [ cars, setCars ] = useState()

    //GET
    const getAllCars = () => {
        axios.get(`${BaseUrl}cars/`)
        .then(res => setCars(res.data))
        .catch(err => console.log(err))
    }

    //CREATE
    const createNewCar = data => {
        axios.post(`${BaseUrl}cars/`, data)
        .then(res => {
            console.log(res.data)
            setCars([ ...cars, res.data])
            })
        .catch(err => console.log(err));
    }

    // DELETE
    const deleteCarById = id => {
        axios.delete(`${BaseUrl}cars/${id}`)
        .then(res => {
            console.log(res.data, 'this is removed car')
            const carsFilter = cars.filter(car => car.id !== id)
            setCars(carsFilter)
            // getAllCars()
        })
        .catch(err => console.log(err))
    }

    //UPDATE
    const updateCarById = (id, data) => {
        axios.put(`${BaseUrl}cars/${id}/`, data)
        .then(res => {
            console.log(res.data)
            const carsUpdate = cars.map(car => {
                if(data.id === car.id){
                    return data
                } else {
                    return car
                }
            })
            setCars(carsUpdate); 
        })
        .catch(err => console.log(err))
    }

    return [ cars, getAllCars, createNewCar, deleteCarById, updateCarById ]
}

export default useFetch