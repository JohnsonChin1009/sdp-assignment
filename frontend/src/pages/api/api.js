import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Replace with your Laravel API endpoint
//login
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
//logout
export const logout = async () =>{
  try{
    const response = await axios.get(`${API_URL}/logout`);
    return response.data;    
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred while fetching student records');
  }
}
//Display All
export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/displaystudents`);
    const students = response.data.data;

    return students;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching student records');
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
//STUDENT
export const getStudentProfile = async (token) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
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
export const UpdateProfileStu = async (token, newValue) =>{
  try{
    const config = {
      headers: {
        Authorization: 'Bearer ' + token + " " + newValue
      }
    }    
    console.log(config);
    const response = await axios.put(`${API_URL}/updateprofilestu`,config);
    const update = response.data.data;
    console.log(update);    
    return update;
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
export const getStudentStaff = async (token) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayStudentStaff`, config);
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
//PM
export const getPMProfile = async (token) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayPMProfile`, config);
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
export const getPMStudentProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayPMStudentProfile`, config);
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
export const getPMOwnStudents = async (token) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayPMOwnStudents`, config);
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
export const getPMStaff = async (token) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayPMStaff`, config);
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
export const getPMLecturerProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayPMLecturerProfile`, config);
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
//Update
export const getUpdatedStudent = async (token, selectSupervisor, selectSecondMarker) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token + " " + selectSupervisor + " " + selectSecondMarker
      }
    }
    
    console.log(config);
    const response = await axios.get(`${API_URL}/updateStudentInfo`, config);
    const Updated = response.data.data;    
    console.log(Updated);

    return Updated;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
export const AssignLecturers= async (token, value1, value2)=>{
  try{
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
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

export const deleteStudent = async (tp_number) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteStuSup/${tp_number}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error delete Event"
    );
  }
};
//Lecturers
export const getLecturerProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const response = await axios.get(`${API_URL}/displayLecturerProfile`, config);
    const lecturers = response.data.data;
    console.log(lecturers);

    return lecturers;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
// export const getLecturerOwnStudents = async (token) => {
//   try {
    
//     const config = {
//       headers: {
//         Authorization: 'Bearer ' + token
//       }
//     }
//     console.log(config);
//     const response = await axios.get(`${API_URL}/displayLecturerOwnStudents`, config);
//     const PM = response.data.data;
//     console.log(PM);

//     return PM;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
//   }
// }



//Events


export const addSupEvent = async (token, EventName, startDatetime, endtime) => {
  try { 
      const config = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    
    console.log(EventName, startDatetime, endtime);
    const eventData = {
      title: EventName,
      start: startDatetime,
      end: endtime,
    };
    const response = await axios.post(`${API_URL}/addSupSchedule`, eventData, config);
    console.log(config)

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error adding Event"
    );
  }
};
//Anouncement
export const getAllResults = async()=>{
  try{
    const response = await axios.post(`${API_URL}/displayresults`);
    return response.data;
    
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
export const getResultStu = async(token)=>{
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayresults`, config);
    const results = response.data.data;
    console.log(results);

    return results;
  }catch(error){
    
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}


export const addPMEvent = async (token, EventName, startDatetime, endtime) => {
  try { 
      const config = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    
    console.log(EventName, startDatetime, endtime);
    const eventData = {
      title: EventName,
      start: startDatetime,
      end: endtime,
    };
    const response = await axios.post(`${API_URL}/addPMSchedule`, eventData, config);
    console.log(config)

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error adding Event"
    );
  }
};

export const getSupSchedule = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config)
    const response = await axios.get(`${API_URL}/getSupSchedule`, config);
    const lecturers = response.data.data;


    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
//Anouncement
export const getAnnouncements = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const response = await axios.get(`${API_URL}/getAnnouncements`, config);
    const data = response.data.data;
    console.log(data);
    return data;
  } catch (error)
  {
    throw new Error(error.response?.data?.message || 'An error occured while fetching announcements');
  }
}

export const getStudentLec = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const response = await axios.get(`${API_URL}/displayStudentLec`, config);
    const data = response.data.data;
    console.log(data);
    return data;
  } catch (error)
  {
    throw new Error(error.response?.data?.message || 'An error occured while fetching lecturers assigned for this student');
  }
}