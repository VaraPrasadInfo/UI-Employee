import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmploye } from '../services/EmployeService'
import {useNavigate,useParams} from 'react-router-dom'

const EmployeComponent = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const navigator=useNavigate();
   const{id} =useParams();
   const [errors,setErrors]= useState({
        firstName:'',
        lastName:'',
        email:''
    })
    function handleFirstName(e){
        setFirstName(e.target.value);
    }
    function handleLastName(e){
        setLastName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }
    useEffect(()=>{
        if(id)
        {
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error=>{
                console.error(error);
            })
        }
    })
    function saveOrUpdateEmploye(e){
        e.preventDefault();
        if(validateForm()){
            const employe={firstName,lastName,email}
            console.log(employe)
            if(id)
            {
                updateEmploye(id,employe).then((response)=>{
                    console.log(response.data);
                    navigator('/employees');

                }).catch(error=>{
                    console.error(error);
                })
            }else{
                createEmployee(employe).then((response)=>{
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error=>{
                    console.error(error);
                })
            }
           
           
        }
        
    }
    function validateForm()
    {
        let valid=true;
        const errorCopy={... errors}
        if(firstName.trim())
        {
            errorCopy.firstName='';
        }else{
            errorCopy.firstName='First Name is Required';
            valid=false;
        }
        if(lastName.trim())
        {
            errorCopy.lastName='';
        }else{
            errorCopy.lastName='Last Name is Required';
            valid=false;
        }
        if(email.trim())
        {
            errorCopy.email='';
        }else{
            errorCopy.email='Email is Required';
            valid=false;
        }
        setErrors(errorCopy);
        return valid;

    }
    function pageTitle()
    {
      if(id){
        return <h2 className='text'>update Employe</h2>
      }else
      {
        return <h2 className='text-center'>Add Employe</h2>
      }
    }
  return (
   
    <div className='container'>
<div className='row'>
    <div className='card col-md-6 offset-md-3 offset-md-3'>
        {
            pageTitle()
        }
        <div className='card-body'>
            <form>
                <div className='form-group mb-2'>
                 <label className='form-label'>First Name</label>
                 <input 
                 type='text'
                 placeholder='Enter Employe First Name'
                 name='firstName'
                 value={firstName}
                 className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                 onChange={handleFirstName}
                 >
                 
                 </input>
                 {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
 
                 
                </div>
                <div className='form-group mb-2'>
                 <label className='form-label'>Last Name:</label>
                 <input 
                 type='text'
                 placeholder='Enter Employe Last Name'
                 name='lastName'
                 value={lastName}
                 className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                 onChange={handleLastName}
                 >
                 
                 </input>
                 {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
  
                 
                </div>
                <div className='form-group mb-2'>
                 <label className='form-label'>Email:</label>
                 <input 
                 type='text'
                 placeholder='Enter Employe Email'
                 name='email'
                 value={email}
                 className={`form-control ${errors.email ? 'is-invalid':''}`}
                 onChange={handleEmail}
                 >
                 
                 </input>
                 {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
 
                 
                </div>
                <button className='btn btn-success' onClick={saveOrUpdateEmploye}>Submit</button>
            </form>

        </div>

    </div>

</div>

    </div>
  )
}

export default EmployeComponent