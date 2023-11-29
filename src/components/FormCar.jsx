/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormCar = ({ createNewCar, updateCar, updateCarById, setUpdateCar }) => {

    
    const {handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(updateCar)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ updateCar ])
  
    const submit = data => {
        if(updateCar) {
            updateCarById(updateCar.id, data)
            setUpdateCar()
        } else {
            createNewCar(data)
        }
        reset({
            brand: '',

            model: '',
            color: '',
            year: '',
            price: ''   
        })
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor='braand'>Brand</label>
        <input { ...register('brand', {required: true, maxLength: 10 })} id="brand" type='text' />
      </div>
      <div>
        <label htmlFor='model'>Model</label>
        <input { ...register('model')} id="model" type='text' />
      </div>
      <div>
        <label htmlFor='color'>Color</label>
        <input { ...register('color')} id="color" type='text' />
      </div>
      <div>
        <label htmlFor='year'>Year</label>
        <input { ...register('year')} id="year" type='text' />
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <input { ...register('price')} id="price" type='text' />
      </div>
      <br />
      <button>{updateCar ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default FormCar;

