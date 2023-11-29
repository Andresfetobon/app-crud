/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import Car from './components/Car'
import FormCar from './components/FormCar'


function App() {

  const [updateCar, setUpdateCar] = useState()

  const [ cars, getAllCars, createNewCar, deleteCarById, updateCarById ] = useFetch()

  useEffect(() => {
    getAllCars();
  }, [])

  

   return (
        <div className='app'>
          <h1>Peticiones HTTP</h1>
          <FormCar
          createNewCar={createNewCar}
          updateCar={updateCar}
          updateCarById={updateCarById}
          setUpdateCar={setUpdateCar}
          />
          {
            cars?.map(car => (
              <Car 
              key={car.id}
              car={car}
              deleteCarById={deleteCarById}
              setUpdateCar={setUpdateCar}
              />

            ))
          }
        </div>
  )
}

export default App
