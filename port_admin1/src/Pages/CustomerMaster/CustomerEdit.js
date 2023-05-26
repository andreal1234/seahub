import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerEdit = () => {
    const name = useParams();
    const [data,setdata]= useState({
        name:"",
        contractNumber:"",
        email:"",
        address:""
    })
    useEffect(()=>{
        axios.get(`https://port-repo.onrender.com/cutomer/onecustomer/${name.id}`)
        .then((res)=>{
            setdata(res.data)
        }).catch((res)=>{
            console.log(res);
        })
    },[])

    const handleData=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.put(`https://port-repo.onrender.com/cutomer/updateCustomer/${name.id}`,data)
        .then((res)=>{
            toast.success("Edit sucessfull", {
                position: toast.POSITION.TOP_CENTER,
        
              });
        }).catch((res)=>{
            console.log(res);
        })
    }
  return (
    <div className="main-content">
    <div className="page-content">
        
        <form className=" w-75 m-auto">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Customer Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.name} name="name" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Customer Phone Number
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.contractNumber} name="contractNumber" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
            Customer Email id
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="email" value={data.email} id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Customer Address
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="address" value={data.address} id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Add new Customer 
          </button>
          <Link to={"/customermaster"}><button className="btn btn-primary d-table float-end"  >Go back</button></Link>
        </form>
        <ToastContainer className={' mb-7'} />
        </div>
        </div>
       
  )
}

export default CustomerEdit