import React from 'react'

const Form = () => {
  return (
    <div className="form" id="form">
        <div className="input-form" > 
        <h2 style={{marginBottom: "10px"}}>Contact</h2>
      <form>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        /><br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        /><br />
        <input type="text" id="email" name="email" placeholder="Email" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>

  )
}

export default Form