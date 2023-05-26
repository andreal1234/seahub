import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ExtarWork = () => {
    const [search, setSearech] = useState([])
    useEffect(() => {
      axios.get('https://port-repo.onrender.com/consignment/viewconsignmenetbt').then(res => {
        setSearech(res.data)
      })
    }, [])

    const delet = (e)=>{
      axios.delete(`https://port-repo.onrender.com/consignment/${e}`)
      .then((res)=>{
          window.location.reload()
      }).catch((res)=>{
  
      })
    }
  
    var i = 1;
  return (
    <div className='main-content'>
    <div className='page-content'>
      <div class='col'>
        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-borderless mb-0'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Port Name</th>
                    <th>Vessel Name</th>
                    <th>Chartarer</th>
                    <th>Broker</th>
                    <th>EPDA Amount</th>
                    <th>ETA</th>
                    <th>Owner NAme</th>
                    <th>operation</th>
                  </tr>
                </thead>
                <tbody>
                  {search.map(data => (
                    <tr>
                      <th scope='row'>{i++}</th>
                      <td>{data.port}</td>
                      <td>{data.vesselName}</td>
                      <td>{data.charter}</td>
                      <td>{data.broker}</td>
                      <td>{data.epda}</td>
                      <td>{data.eta}</td>
                      <td>{data.ownerName}</td>
                      <td className='d-flex'>
                        <Link to={`/addextrawork/${data._id}`}><button className='btn btn-success mx-2'>Extra Work</button></Link>
                        <Link to={`/viewextrawork/${data._id}`}><button className='btn btn-success mx-2'>View Extra Work</button></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ExtarWork