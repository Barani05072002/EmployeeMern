import React from 'react'
import '../styles/Table.css'

const Table = (props) => {

  return (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Designation</th>
                <th>gender</th>
                <th>Course</th>
                <th>Date</th>
                <th className>Action</th>
            </tr>
        </thead>
        <tbody>
           <tr>
                <td>1</td>
                <td>image</td>
                <td>hukum</td>
                <td>hcgupta@cstech.in</td>
                <td>95000 10022</td>
                <td>HR</td>
                <td>Male</td>
                <td>MCA</td>
                <td>13-fec-21</td>
                <td className='choice'>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
           </tr>
            {props.data.map((value,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{"image"}</td>
                <td>{value.Name}</td>
                <td>{value.Eamil}</td>
                <td>{value.Mobile}</td>
                <td>{value.Designation}</td>
                <td>{value.Gender}</td>
                <td>{value.Course.join(",")}</td>
                <td>{value.Date}</td>
                <td className='choice'>
                    <button value={value._id}>Edit</button>
                    <button value={value._id}>Delete</button>
                </td>
            </tr>)}
        </tbody>
    </table>
  )
}

export default Table