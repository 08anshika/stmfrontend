import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About/About'
import Faq from './pages/faq/Faq'
import Contact from './pages/contact/Contact'
import News from './pages/news/News'
import Orgn from './pages/forms/Orgn'
import Organizers from './pages/organization/Organizers'
import Speakers from './pages/speakers/Speakers'
import Services from './pages/services/Services'
import Events from './pages/events/Events'
import Dashboard from './pages/dashboard/Dashboard'
import SpeakersForm from './pages/forms/SpeakersForm'
import SlideUpdate from './pages/forms/SlideUpdate'
import EditOrgn from './pages/forms/EditOrgn'
import EditSpeaker from './pages/forms/EditSpeaker'
import ContactView from './pages/contact/ContactView'
import EventsFORM from './pages/forms/EventsForm'
import EditEvent from './pages/forms/EventEdit'
import SliderForm from './pages/forms/SliderForm'
import Conference from './pages/conference/Conference'
import EditOrganizer from './pages/organization/EditOrganizer'
import EditSpeak from './pages/speakers/EditSpeak'
import UpdateEvent from './pages/events/UpdateEvent'
import EventEdit from './pages/forms/EventEdit'
import NewsForm from './pages/forms/NewsForm'
import Anews from './pages/forms/Anews'
import EditNews from './pages/forms/EditNews'
import About2 from './pages/About/About2'
import Testimonials from './pages/Testimonial/Testimonials'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/add-organizer' element={<Orgn/>}/>
      <Route path='/edit-organizer/:id' element={<EditOrgn/>}/>
      <Route path='/edit-speaker/:id' element={<EditSpeaker/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/add-speaker' element={<SpeakersForm/>}/>
      <Route path='/all-speakers' element={<Speakers/>}/>
      <Route path='/all-organizers' element={<Organizers/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/slider' element={<SlideUpdate/>}/>
      <Route path='/all-contact' element={<ContactView/>}/>
      <Route path='/add-event' element={<EventsFORM/>}/>
      <Route path='/edit-event/:id' element={<EditEvent/>}/>
      <Route path='/add-slider' element={<SliderForm/>}/>
      <Route path='/conference' element={<Conference/>}/>
      <Route path='/editorganizer' element={<EditOrganizer/>}/>
      <Route path='/edit-speak' element={<EditSpeak/>}/>
      <Route path='/edit-event' element={<UpdateEvent/>}/>
      <Route path='/edit-event/:id' element={<EventEdit/>}/>
      <Route path='/add-news' element={<NewsForm/>}/>
      <Route path='/all-news' element={<Anews/>}/>
      <Route path='/edit-news/:id' element={<EditNews/>}/>
      <Route path='/aboutus' element={<About2/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
    
      
    </>
  )
}

export default App