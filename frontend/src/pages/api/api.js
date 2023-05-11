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
      header: {
        Authorization:'Bearer ${token}'
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayStudentProfile`, config);
    const students = response.data.data;

    return students;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching student records');
  }
};

export const getLecturers = async () => {
  try {
    const response = await axios.get(`${API_URL}/displaylecturers`);
    const lectures = response.data.data;

    return lectures;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecture records');
  }
};

export const getNewEvent = async () => {
  try{
    const response = await axios.post(`${API_URL}/schedule`,{value});
    return response.data;
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}

export const addEvent = async (EventName, startDatetime, endtime) => {
  const eventData = {
  title: EventName,
  start: startDatetime,
  end: endtime,
  };
  try {
  const response = await axios.post(`${API_URL}/addSchedule`, {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(eventData),
  });
  if (!response.ok) {
  throw new Error('Failed to add event');
  }
  } catch (error) {
  console.error(error);
  }
};