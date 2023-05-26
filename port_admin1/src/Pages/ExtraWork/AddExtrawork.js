import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const AddExtrawork = () => {
    const name = useParams();
    const [consignment, setConsignment] = useState({
      port:"",
      vesselName:"",
      charter:"",
      broker:"",
      epda:"",
      eta:"",
      ownerName:""
     })
  const [data,setData]=useState({
    consignId:''
  })
  const handleinputdata=(e)=>{
    setData({...data,extrawork:e.target.value})
  }
    useEffect((res)=>{
        axios.get(`https://port-repo.onrender.com/consignment/oneconsignment/${name.id}`)
        .then((res)=>{
          setConsignment(res.data)
          setData({...data,consignId:res.data._id})
        }).catch((res)=>{
        })
    },[name.id])
  
    ///extra work

    //first input data
    const [first,setFirst]=useState([{
        carbooking:'',
        from:'',
        to:'',
        forwhom:'',
        purpose:''
    }
    ])

    const addFirst =(e)=>{
        e.preventDefault();
        setFirst([...first,{
            carbooking:'',
            from:'',
            to:'',
            forwhom:'',
            purpose:''
        }]) 
    }
    const addFirstRemove=(index)=>{
        alert("One Item is deleted");
        const list=[...first];
        list.splice(index,1);
        setFirst(list)
    }
    const handleinputfirst =(e,index)=>{
        const {name,value} = e.target;
        const list = [...first];
        list[index][name] = value;
        setFirst(list); 
    }

    //second

    const [second,setSecond]=useState([{
        hoterName:'',
        from:'',
        to:'',
        forwhom:'',
        purpose:''
    }
    ])

    const addSecond =(e)=>{
        e.preventDefault();
        setSecond([...second,{
            hoterName:'',
            from:'',
            to:'',
            forwhom:'',
            purpose:''
        }]) 
    }
    const addSecondRemove=(index)=>{
        alert("One Item is deleted");
        const list=[...second];
        list.splice(index,1);
        setSecond(list)
    }
    const handleinputsecond =(e,index)=>{
        const {name,value} = e.target;
        const list = [...second];
        list[index][name] = value;
        setSecond(list); 
    }


    //third

    const [third,setThird]=useState([{
        supervisor:'',
        supplyQuentity:'',
        vendorname:'',
        crewname:'',
    }
    ])

    const addThird =(e)=>{
        e.preventDefault();
        setThird([...third,{
            supervisor:'',
            supplyQuentity:'',
            vendorname:'',
            crewname:'',
        }]) 
    }
    const addThirdRemove=(index)=>{
        alert("One Item is deleted");
        const list=[...third];
        list.splice(index,1);
        setThird(list)
    }
    const handleinputThird =(e,index)=>{
        const {name,value} = e.target;
        const list = [...third];
        list[index][name] = value;
        setThird(list); 
    }

    //four

    const [four,setFour]=useState([{
        crewName:'',
    }
    ])

    const addFour =(e)=>{
        e.preventDefault();
        setFour([...four,{
            crewName:'',
        }]) 
    }
    const addFourRemove=(index)=>{
        alert("One Item is deleted");
        const list=[...four];
        list.splice(index,1);
        setFour(list)
    }
    const handleinputFour =(e,index)=>{
        const {name,value} = e.target;
        const list = [...four];
        list[index][name] = value;
        setFour(list); 
    }

    //five
  const [five,setFive]=useState([{
       extrawork:'',
    }
    ])

    const addFive =(e)=>{
        e.preventDefault();
        setFive([...five,{
            extrawork:'',
        }]) 
    }
    const addFiveRemove=(index)=>{
        alert("One Item is deleted");
        const list=[...five];
        list.splice(index,1);
        setFive(list)
    }
    const handleinputFive =(e,index)=>{
        const {name,value} = e.target;
        const list = [...five];
        list[index][name] = value;
        setFive(list); 
    }

    
    //submit all data

    const submit=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/allconsignment/extrawork`,{first:first,second:second,third:third,four:four,five:five,data:data})
        .then((res)=>{
            window.location = "/extrawork"
        }).catch((res)=>{
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
          Port Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='charter'
              id='inputEmail3'
              value={consignment.port}
              required
            />
          </div>
        </div>
        
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            Vessel Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='vesselName'
              id='inputEmail3'
               value={consignment.vesselName}
              required
            />
          </div>
        </div>
        
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            Charter
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='charter'
              id='inputEmail3'
              value={consignment.charter}
              required
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            Broker
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='charter'
              id='inputEmail3'
              value={consignment.broker}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          EPDA Amount
          </label>
          <div className='col-sm-10'>
            <input
              type='number'
              className='form-control'
              name='epda'
              id='inputEmail3'
              value={consignment.epda}
              required
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          ETA
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='eta'
              id='inputEmail3'
              value={consignment.eta}
              required
            />
          </div>
        </div>
        <div className='row mb-5'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Owner Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='eta'
              id='inputEmail3'
              value={consignment.ownerName}
              required
            />
          </div>
        </div>

{ first.map((x,i)=>{
                   return(
    <>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Car Booking vendor
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='carbooking'
              id='inputEmail3'
              onChange={e=>handleinputfirst(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          From
          </label>
          <div className='col-sm-10'>
            <input
              type='datetime-local'
              className='form-control'
              name='from'
              id='inputEmail3'
              onChange={e=>handleinputfirst(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          To
          </label>
          <div className='col-sm-10'>
            <input
              type='datetime-local'
              className='form-control'
              name='to'
              id='inputEmail3'
              onChange={e=>handleinputfirst(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          For Whom
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='forwhom'
              id='inputEmail3'
              onChange={e=>handleinputfirst(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          purpose
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='purpose'
              onChange={e=>handleinputfirst(e,i)}
              id='inputEmail3'
              required
            />
          </div>
        </div>
        <div className='row mb-3'>
       {first.length>1? <button type='submit' className='btn btn-danger col-1 btn-left' onClick={()=>addFirstRemove(i)}>
          Remove
        </button>:""}
        </div>
        </>
         )})
        }
        <div className=' row mb-5'>
        <button type='submit' className='btn btn-primary col-2 btn-left ' onClick={addFirst}>
          Add More
        </button>
        </div>
      

{ second.map((x,i)=>{
        return(
       <>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Hotel Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='hoterName'
              id='inputEmail3'
              onChange={e=>handleinputsecond(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          From
          </label>
          <div className='col-sm-10'>
            <input
              type='datetime-local'
              className='form-control'
              name='from'
              id='inputEmail3'
              onChange={e=>handleinputsecond(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          To
          </label>
          <div className='col-sm-10'>
            <input
              type='datetime-local'
              className='form-control'
              name='to'
              id='inputEmail3'
              onChange={e=>handleinputsecond(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          For Whom
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='forwhom'
              id='inputEmail3'
              onChange={e=>handleinputsecond(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          purpose
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='purpose'
              onChange={e=>handleinputsecond(e,i)}
              id='inputEmail3'
              required
            />
          </div>
        </div>
        <div className='row mb-3'>
       {second.length>1? <button type='submit' className='btn btn-danger col-1 btn-left' onClick={()=>addSecondRemove(i)}>
          Remove
        </button>:""}
        </div>
        </>
         )})
        }
      <div className=' row mb-5'>
        <button type='submit' className='btn btn-primary col-2 btn-left ' onClick={addSecond}>
          Add More
        </button>
        </div>


{ third.map((x,i)=>{
    return(
    <>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Supervisor Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='supervisor'
              id='inputEmail3'
              onChange={e=>handleinputThird(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Fresh Water Supply Quantity (MT)
          </label>
          <div className='col-sm-10'>
            <input
              type='number'
              className='form-control'
              name='supplyQuentity'
              id='inputEmail3'
              onChange={e=>handleinputThird(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Store Supply Vendor Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='vendorname'
              id='inputEmail3'
              onChange={e=>handleinputThird(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Sign On Crew Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='crewname'
              id='inputEmail3'
              onChange={e=>handleinputThird(e,i)}
              required
            />
          </div>
        </div>
        <div className='row mb-3'>
       {third.length>1? <button type='submit' className='btn btn-danger col-1 btn-left' onClick={()=>addThirdRemove(i)}>
          Remove
        </button>:""}
        </div>
        </>
         )})
        }
       <div className='row mb-5'>
        <button type='submit' className='btn btn-primary col-2 btn-left ' onClick={addThird}>
          Add More
        </button>
        </div>

{ four.map((x,i)=>{
    return(
    <>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Sign OFF Crew Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='crewName'
              id='inputEmail3'
              onChange={e=>handleinputFour(e,i)}
              required
            />
          </div>
        </div>

        <div className='row mb-3 '>
       {four.length>1? <button type='submit' className='btn btn-danger col-1 btn-left' onClick={()=>addFourRemove(i)}>
          Remove
        </button>:""}
        </div>
        </>
         )})
        }
       <div className='row mb-5'>
        <button type='submit' className='btn btn-primary col-2 btn-left ' onClick={addFour}>
          Add More
        </button>
        </div>  


{ five.map((x,i)=>{
    return(
    <>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Extra Work done on
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='extrawork'
              id='inputEmail3'
              onChange={e=>handleinputFive(e,i)}
              required
            />
          </div>
        </div>
        <div className='row mb-3 '>
       {five.length>1? <button type='submit' className='btn btn-danger col-1 btn-left' onClick={()=>addFiveRemove(i)}>
          Remove
        </button>:""}
        </div>
        </>
         )})
        }
       <div className='row mb-5'>
        <button type='submit' className='btn btn-primary col-2 btn-left ' onClick={addFive}>
          Add More
        </button>
        </div>  


        <button type='submit' className='btn btn-primary mt-2' onClick={submit}>
          Add Extra Work
        </button>
      </form>
    </div>
    <ToastContainer className={' mb-7'} />
  </div>
  )
}
