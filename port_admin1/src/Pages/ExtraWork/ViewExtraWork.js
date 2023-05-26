import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ViewExtraWork = () => {
    const name = useParams();
    const[work,setWork]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/allconsignment/viewextrawork/${name.id}`)
        .then((res)=>{
          setWork(res.data);
          console.log(res.data);
        }).catch((res)=>{
            console.log(res.data);
        })
    },[name.id])
var a=1
var b=1
var c=1
var d=1
var e=1
  return (
    <div className='main-content'>
    <div className='page-content'>
    <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-borderless mb-0'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Port</th>
                    <th>Vessel Name</th>
                    <th>Charter</th>
                    <th>Broker</th>
                    <th>EPDA</th>
                    <th>ETA</th>
                    {/* <th>Extra Work done on<br/> Description of Extra Work</th> */}
                  </tr>
                </thead>
                <tbody>
                {work.map((data)=>(
                    <tr>
                      <th scope='row'>{a++}</th>
                      <td>{data.consignId.port}</td>
                      <td>{data.consignId.vesselName}</td>
                      <td>{data.consignId.charter}</td>
                      <td>{data.consignId.broker}</td>
                      <td>{data.consignId.epda}</td>
                      <td>{data.consignId.eta}</td>
                      {/* <td>{data.extrawork}</td> */}
                      </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      {work.map((data)=>(
      <div class='col'>
        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-borderless mb-0'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Car Booking vendor</th>
                    <th>From</th>
                    <th>To</th>
                    <th>For Whom</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {data.first.map(data => (
                    <tr>
                      <th scope='row'>{a++}</th>
                      <td>{data.carbooking}</td>
                      <td>{data.from}</td>
                      <td>{data.to}</td>
                      <td>{data.forwhom}</td>
                      <td>{data.purpose}</td>
                      </tr>
                   ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-borderless mb-0'>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Hotel Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>For Whom</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                {data.second.map(data => (
                    <tr>
                      <th scope='row'>{b++}</th>
                      <td>{data.hoterName}</td>
                      <td>{data.from}</td>
                      <td>{data.to}</td>
                      <td>{data.forwhom}</td>
                      <td>{data.purpose}</td>
                      </tr>
                   ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-borderless mb-0'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Fresh Water Supply Quantity (MT)</th>
                    <th>Store Supply Vendor Name</th>
                    <th>Sign On Crew Name</th>
                  </tr>
                </thead>
                <tbody>
                  {data.third.map(data => (
                    <tr>
                      <th scope='row'>{c++}</th>
                      <td>{data.supplyQuentity}</td>
                      <td>{data.vendorname}</td>
                      <td>{data.crewname}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-borderless mb-0'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>crewName</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {data.four.map(data => (
                    <tr>
                      <th scope='row'>{d++}</th>
                      <td>{data.crewName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-borderless mb-0'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>crewName</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {data.five.map(data => (
                    <tr>
                      <th scope='row'>{e++}</th>
                      <td>{data.extrawork}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
))}
    </div>
  </div>
  )
}

export default ViewExtraWork