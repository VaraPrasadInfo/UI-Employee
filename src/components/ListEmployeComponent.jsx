import React, { useEffect, useState } from 'react'
// import { listEmployees } from '../services/EmployeService'
import { listEmployees } from '../services/EmployeService'
import {useNavigate} from 'react-router-dom'
const ListEmployeComponent = () => {

   const [employees,setEmployees]=useState([])
   const navigator=useNavigate();

   useEffect(()=>{
    listEmployees().then((response)=>{
        setEmployees(response.data);
    }).catch(error=>{
        console.error(error)
    })

   },[])
   function addNewEmployee(){
    navigator('/add-employee')

   }
   function updateEmployee(id)
   {
      navigator('/update-employee/${id}')
   }
  return (
   <div className='container'>
<h2 className='text-center'> List of Employees</h2>
<button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add employe</button>
<table className='table table-success table-striped'>
    <thead>
        <tr>
        <th>Employe Id</th>
            <th>Employe First Name</th>
            <th>Employe Last Name</th>
            <th>Employe Email </th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
            employees.map(employe=>
            <tr key={employe.id}>
                <td>{employe.id}</td>
                <td>{employe.firstName}</td>
                <td>{employe.lastName}</td>
                <td>{employe.email}</td>
                <td>
                    <button className='btn btn-info' onClick={()=>updateEmployee(employe.id)}>Update</button>
                </td>


            </tr>
            )
        }
        <tr>

        </tr>
    </tbody>
</table>

   </div>
  )
}

export default ListEmployeComponent