import React, { useState } from 'react'
import { addNews } from '../api/organizer-api';



const NewsForm = () => {

    const defaultValue = {
        newstitle:'',
        newsdate:'',
        newspicture:'',
        aboutnews:''
       
        
      }
      
      const [news,setNews] =useState(defaultValue);
      // const navigate = useNavigate();
      
        const onValueChange=(e)=>{
          setNews({...news,[e.target.name]:e.target.value});
        }
      
      
        const addNewsDetails = async() => {
          await addNews(news);
          // navigate('/all-speaker');
      }
  return (
    <>

     <div className='container mt-5'>
   <form className="row g-3">
  <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label">News Title</label>
    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required onChange={(e)=>onValueChange(e)} name='newstitle'/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Date</label>
    <input type="date" className="form-control" id="validationDefault02" defaultValue="Otto" required onChange={(e)=>onValueChange(e)} name='newsdate'/>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault03" className="form-label">News Picture Url</label>
    <input type="url" className="form-control" id="validationDefault03" required  onChange={(e)=>onValueChange(e)} name='newspicture'/>
  </div>
  <div className="mb-3">
    <label htmlFor="validationText" className="form-label">About</label>
    <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required onChange={(e)=>onValueChange(e)} name='aboutnews' />
  
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=>addNewsDetails()}>Submit form</button>
  </div>
</form>


     </div>

    </>
  )
}

export default NewsForm
