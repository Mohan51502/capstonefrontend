import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function StudentQuery() {


    
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/query/getAllQuery')
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))

    },[])


   
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Queries</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>



        <div className='d-flex justify-content-end'>

        <Link to="/dash" className='btn btn-danger studentbackbutton'>Back</Link>

            <Link to="/queries" className='btn btn-success'>Create Query</Link>


        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Voice</th>
                    <th>Action</th>


                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) =>(
                        <tr key={i}>
                            <td>{d._id}</td>
                            <td>{d.category}</td>
                            <td>{d.title}</td>
                            <td>{d.voice}</td>
                            <td>
                                <Link to={`/${d._id}`} className='btn btn-sm btn-info me-2'>Solve</Link>

                            </td>



                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
  )
}