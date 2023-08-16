import axios from "axios";

const URL = 'https://stmconf.onrender.com'

export const addOrganizer = async (data) => {

    try {
        return await axios.post(`${URL}/add-organizer`, data)
    } catch (error) {
        console.log('Error while adding organizer Api ', error);    
    }
}


export const getOrganizers = async () => {
    try {
        return await axios.get(`${URL}/all-organizers`);

    } catch (error) {
        console.log('Error while getting organizers api', error);
    }
}

export const getOrganizer = async (id) => {
    try {
        return await axios.get(`${URL}/organizer${id}`);
    } catch (error) {
        console.log('Error while getting organizer api', error);
    }
}

export const editOrganizer = async (organizer, id) => {
    try {
        return await axios.put(`${URL}/organizer${id}`, organizer);
    } catch (error) {
        console.log('Error while getting organizer api', error);
    }
}


export const deleteOrganizer = async (id) => {

    try {
        return await axios.delete(`${URL}/organizer${id}`);
    } catch (error) {
        console.log('Error while deleting organizer api', error);

    }
}

//speaker section
export const addSpeaker = async (data) => {

    try {
        return await axios.post(`${URL}/add-speaker`, data)
    } catch (error) {
        console.log('Error while adding speaker Api ', error);
    }
}


export const getSpeakers = async () => {
    try {
        return await axios.get(`${URL}/all-speakers`);

    }    catch (error) {
        console.log('Error while getting speakers api', error);
    }
}

export const getSpeaker = async (id) => {
    try {
        return await axios.get(`${URL}/speaker${id}`);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}

export const editSpeaker = async (speaker, id) => {
    try {
        return await axios.put(`${URL}/speaker${id}`, speaker);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}


export const deleteSpeaker = async (id) => {

    try {
        return await axios.delete(`${URL}/speaker${id}`);
    } catch (error) {
        console.log('Error while deleting speaker api', error);

    }
}

// contact
export const addContact = async (data) => {


    try {
        return await axios.post(`${URL}/contact`, data);

    }
    catch (error) {
        console.log('Error while add contact', error);
    }

}
export const getContacts = async () => {
    try {
        return await axios.get(`${URL}/all-contact`);

    } catch (error) {
        console.log('Error while getting contacts api', error);
    }
}
export const getContact = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while getting contact api', error);
    }
}


// Event Section



export const addEvent = async (data) => {

    try {
        return await axios.post(`${URL}/add-event`, data)
    } catch (error) {
        console.log('Error while adding event Api ', error);
    }
}


export const getEvents = async () => {
    try {
        return await axios.get(`${URL}/all-events`);

    } catch (error) {
        console.log('Error while getting events api', error);
    }
}

export const getEvent = async (id) => {
    try {
        return await axios.get(`${URL}/event${id}`);
    } catch (error) {
        console.log('Error while getting event api', error);
    }
}

export const editEvent = async (event, id) => {
    try {
        return await axios.put(`${URL}/event${id}`, event);
    } catch (error) {
        console.log('Error while getting event api', error);
    }
}


export const deleteEvent = async (id) => {

    try {
        return await axios.delete(`${URL}/event${id}`);
    } catch (error) {
        console.log('Error while deleting event api', error);

    }
}
// slider Section


export const addSlider = async (data) => {

    try {
        return await axios.post(`${URL}/add-slider`, data)
    } catch (error) {
        console.log('Error while adding event Api ', error);
    }
}


export const getSliders = async () => {
    try {
        return await axios.get(`${URL}/all-slider`);

    } catch (error) {
        console.log('Error while getting slider api', error);
    }
}

export const getSlider = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while getting slider api', error);
    }
}

export const editSlider = async (slider, id) => {
    try {
        return await axios.put(`${URL}/slider${id}`, slider);
    } catch (error) {
        console.log('Error while getting slider api', error);
    }
}


export const deleteSlider = async (id) => {

    try {
        return await axios.delete(`${URL}/slider${id}`);
    } catch (error) {
        console.log('Error while deleting slider api', error);

    }
}

// News section

export const addNews = async (data) => {

    try {
        return await axios.post(`${URL}/add-news`, data)
    } catch (error) {
        console.log('Error while adding news Api ', error);    
    }
}
export const getNewss = async () => {
    try {
        return await axios.get(`${URL}/all-news`);

    } catch (error) {
        console.log('Error while getting slider api', error);
    }
}

export const getNews = async (id) => {
    try {
        return await axios.get(`${URL}/news${id}`);
    } catch (error) {
        console.log('Error while getting news api', error);
    }
}

export const editNews = async (news, id) => {
    try {
        return await axios.put(`${URL}/news${id}`, news);
    } catch (error) {
        console.log('Error while getting news api', error);
    }
}


export const deleteNews = async (id) => {

    try {
        return await axios.delete(`${URL}/news${id}`);
    } catch (error) {
        console.log('Error while deleting news api', error);

    }
}