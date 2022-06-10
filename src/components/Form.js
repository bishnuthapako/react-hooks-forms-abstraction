import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    firstName: "Bishnu",
    lastName: "Thapa",
    admin: false
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    if(event.target.type ==='checked'){
      value = event.target.checked;
    }
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  // const listOfSubmission = formData.map((data, index)=>{
  //   return (<div key={index}>{data.firstName} {data.lastName}</div>)
  // })

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.firstName} />
      <input type="text" onChange={handleChange} value={formData.lastName} />
      <input type= "checkbox" onChange = {handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
    {/* <div>Submission</div>
    {listOfSubmission} */}
    </>
    );
}

export default Form;
