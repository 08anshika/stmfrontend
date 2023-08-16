import React from 'react'

const Photo = () => {
  return (
    <>
   <form className="was-validated">
  <div className="mb-3">
    <label htmlFor="validationText" className="form-label">Name</label>
    <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required defaultValue={""} />
  
  </div>
 

  <div className="mb-3">
    <input type="file" className="form-control" aria-label="file example" required />
    <div className="invalid-feedback">Example invalid form file feedback</div>
  </div>
  <div className="mb-3">
    <button className="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
</form>

    
    
    
    </>
  )
}

export default Photo