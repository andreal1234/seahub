import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddBroker = () => {
 const [broker, setbroker] = useState({
  name: '',
  email: '',
  phoneNumber: '',
  country: ''
})

const handleData = e => {
  setbroker({ ...broker, [e.target.name]: e.target.value })
}

const submit = e => {
  e.preventDefault()
  axios
    .post('/broker/newbroker', broker)
    .then((res)=>{
      window.location = "/broker"
    })
    .catch((res)=>{
        toast.error(res.response.data, {
        position: toast.POSITION.TOP_CENTER,
        })
    })
}


  return (
    <div className='main-content'>
      <div className='page-content'>
        <form className=' w-75 m-auto'>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Name
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='name'
                id='inputEmail3'
                placeholder='Enter Broker name'
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Phone Number
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='phoneNumber'
                id='inputEmail3'
                placeholder='Enter Broker phone number'
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Email id
            </label>
            <div className='col-sm-10'>
              <input
                type='email'
                className='form-control'
                name='email'
                id='inputEmail3'
                placeholder='Enter Broker email'
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Country
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='country'
                id='inputEmail3'
                placeholder='Enter Broker country'
                onChange={handleData}
                required
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary' onClick={submit}>
            Add new Broker
          </button>
        </form>
      </div>
      <ToastContainer className={' mb-7'} />
    </div>
  )
}

export default AddBroker
