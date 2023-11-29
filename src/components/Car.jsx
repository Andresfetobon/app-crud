/* eslint-disable react/prop-types */

const Car = ({ car, deleteCarById, setUpdateCar }) => {

    const handleDeleteCar = () => {
        deleteCarById(car.id)
    }

    const handleUpdateCar = () => {
        setUpdateCar(car)
    }

    console.log(car)
    return (
        <div>
            <h1>Component Car</h1>
            <article>
                <h2>{`#${car.id} ${car.brand} ${car.model}`}</h2>
                <ul>
                    <li><span>Color:</span>{car.color}</li>
                    <li><span>Year:</span>{car.year}</li>
                    <li><span>Price:</span>{car.price}</li>
                </ul>
                <button onClick={handleDeleteCar}>Delete this car</button>
                <button onClick={handleUpdateCar}>Update</button>
            </article>
        </div>
    );
};

export default Car;