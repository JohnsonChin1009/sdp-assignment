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
    const lecturers = response.data.data;
    console.log(lecturers);

    return lecturers;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}

export const getNewEvent = async () => {
  try{
    const response = await axios.post(`${API_URL}/addSchedule`);
    return response.data;
    
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}

export const addEvent = async (EventName, startDatetime, endtime) => {
  try {
    
    console.log(EventName, startDatetime, endtime);
    const eventData = {
      title: EventName,
      start: startDatetime,
      end: endtime,
    };
    const response = await axios.post(`${API_URL}/addSchedule`, eventData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error adding Event"
    );
  }
};
export const fetchSlides = async () => {
  try{
    const response = await axios.get(`${API_URL}/displayslides`);
    return response.data;
  }catch(error){
    
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
export const UpdateProfileStu = async (token, newValue) =>{
  try{
    const config = {
      headers: {
        Authorization: 'Bearer' + token
      }
    }
    const payload = {
      newValue,
    }
    const response = await axios.put(`${API_URL}/updateprofilestu`,config);
    const update = response.data.data;
    console.log(update);
    console.log(payload)
    return update;
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}

export const AssignLecturers= async (token, value1, value2)=>{
  try{
    const config = {
      headers: {
        Authorization: 'Bearer' + token
      }
    }
    const payload = {
      value1,
      value2,
    }
    const response = await axios.put(`${API_URL}/assignlecturers`,config);
    const update = response.data.data;
    console.log(update);
    console.log(payload)
    return update;
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}