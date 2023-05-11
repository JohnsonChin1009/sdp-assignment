import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Replace with your Laravel API endpoint

export const login = async (email, password) => {
  try {
    console.log(email, password);
    const response = await axios.post(`${API_URL}/login`, {
        email, password
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/displaystudents`);
    const students = response.data.data;

    return students;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching student records');
  }
};

export const getStudentProfile = async (token) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayStudentProfile`, config);
    const students = response.data.data; 
    console.log(students);

    return students;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching student profile' || token);
  }
};

export const getLecturers = async () => {
  try {
    const response = await axios.get(`${API_URL}/displaylecturers`);
    const lecturers = response.data.data;

    return lecturers;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecture records');
  }
};

export const getLecturerProfile = async (token) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayLecturerProfile`, config);
    const students = response.data.data;
    console.log(lecturers);

    return students;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}

export const getNewEvent = async () => {
  try{
    const response = await axios.post(`${API_URL}/schedule`);
    return response.data;
    
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}

export const handleSubmit = async(event) => {
  event.preventDefault();
  const eventData ={
    name: eventName,
  };
  try{
    await axios.post(`${API_URL}/schedule`,eventData);
    //Upate events array
    setEvents([...events, eventData]);
    //Reset Form
    setEventName('')
  }catch(error){
    console.error('Error fetching events: ',error)
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
