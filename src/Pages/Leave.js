import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Leave() {


    
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/leave/getAllLeave')
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])


   

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>Leave Applications</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>


        <div className='d-flex justify-content-start'>
            <Link to="/leaveapplication" className='btn btn-primary'>Add +</Link>
        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Days</th>
                    <th>From</th>
                    <th>To</th>


                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) =>(
                        <tr key={i}>
                            <td>{d._id}</td>
                            <td>{d.days}</td>
                            <td>{d.from}</td>
                            <td>{d.to}</td>
                           


                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
  )
}