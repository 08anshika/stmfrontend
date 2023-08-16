import React, {useState} from 'react'
import { addSlider } from '../api/organizer-api';


const SliderForm = () => {
    const defaultValue = {
    
        titleslider:'',
        sliderimage:'',
        slidersubtitle:''
      }
      
      const [slider,setSlider] =useState(defaultValue);
      
        const onValueChange=(e)=>{
          setSlider({...slider,[e.target.name]:e.target.value});
        }
      
      
        const addSliderDetails = async() => {
          await addSlider(slider);
        }
  return (
    <>
    
    <div className="container mt-2">

<form className="row">
<h3  className='text-center mt-5 mb-3'>Add Slider</h3>

  <div className="col-md-6">
    <label htmlFor="validationDefault01" className="form-label">Slider Title</label>
    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required onChange={(e)=>onValueChange(e)} name='titleslider'/>
  </div>
  <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Slider Background</label>
            <input type="file" className="form-control" id="validationDefault03"   onChange={(e)=>onValueChange(e)} name='sliderimage'/>
          </div>


  <div classname="mb-3 p-">
    <label htmlFor="validationTextarea" className="form-label">Slider Subtitle</label>
    <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" cols={'30'} rows={'4'} required  onChange={(e)=>onValueChange(e)} name='slidersubtitle'/>
    <div className="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  


  <div className="col-12 m-5">
    <button className="btn btn-primary" type="submit" onClick={()=>addSliderDetails()}>Submit form</button>
  </div>
</form>

</div>
    
    
    
    
    </>
  )
}

export default SliderForm