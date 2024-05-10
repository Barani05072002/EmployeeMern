import React from 'react'
import '../styles/Create.css'

const Create = () => {
  return (
    <div className="container">
        <h1>Create-Employee</h1>
        <form action="Dashboard.html" className="card-form">
            <div className="input">
                <input type="text" className="input_field" required/>
                <label className="input_label">Username</label>
            </div>
            <div className="input">
                <input type="text" className="input_field" required />
                <label className="input_label">Email</label>
            </div>
            <div className='input'>
                <input type="text" className='input_field' required/>
                <label className='input_label'>Mobile</label>
            </div>
            <div className='input-1 flex'>
                <label htmlFor="Designation">Designation</label>
                <select name="Designation" id="Designation" className='select'>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>
            </div>
            <div className='input-1 flex'>
                <label htmlFor="Gender">Gender</label>
                <div className='flex select'>
                    <label htmlFor="Male">
                        <input type="radio" name='Gender' id='Male'/>Male
                    </label>
                    <label htmlFor="Female">
                        <input type="radio" name='Gender' id='Female'/>Female
                    </label>
                </div>
            </div>
            <div className='input-1 flex'>
                <label htmlFor="Course">Course</label>
                <div className='flex select'>
                    <label htmlFor=""><input type="checkbox" name='MCA'/>MCA</label>
                    <label htmlFor=""><input type="checkbox" name='BCA'/>BCA</label>
                    <label htmlFor=""><input type="checkbox" name='BSc'/>BSc</label>
                </div>
            </div>
            <div className='input-1 flex'>
                <label htmlFor="myImage">Profile</label>
                <input type="file" name='myImage' className='select'/>
            </div>
            <button className="card_button">Submit</button>
        </form>
        <p></p>
    </div>
  )
}

export default Create