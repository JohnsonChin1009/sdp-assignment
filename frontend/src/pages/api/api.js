import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Replace with your Laravel API endpoint
//login--------------------------------------------
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
//logout--------------------------------------------
export const logout = async () =>{
  try{
    const response = await axios.get(`${API_URL}/logout`);
    return response.data;    
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred while fetching student records');
  }
}
//Display All---------------------------------------
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

//STUDENT-------------------------------------------
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
    const response = await axios.put(`${API_URL}/updatestutitle`, {}, config);
    const update = response.data.message;
    console.log(update);    
    return update;
  } catch (error) {
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

export const getStuPMProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayStuPMProfile`, config);
    console.log(response)
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}

export const getStuPMSchedule = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config)
    console.log('Token:', token);
    const response = await axios.get(`${API_URL}/getStuPMSchedule`, config);
    const data = response.data.data;
    console.log(response.data); 
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}

export const getStuLecProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayStuLecProfile`, config);
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}

//PM---------------------------------------
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
    const response = await axios.get(`${API_URL}/displayPMOwnStudents`, config);
    const PM = response.data.data;

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
    const PM = response.data.lecturer;
    console.log(PM); 

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}

export const getUpdatedStudent = async (token, selectSupervisor, selectSecondMarker) => {
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token + " " + selectSupervisor + " " + selectSecondMarker
      }
    };
    const body= {
      supervisor: selectSupervisor,
      secondMarker: selectSecondMarker,
    }
    
    console.log(config);
    const response = await axios.put(`${API_URL}/updateStudentInfo`, body,config);
    const Updated = response.data.data;    
    console.log(Updated);

    return Updated;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
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

//Lecturers-----------------------------------------
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



export const getLecStudentProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displayLecStuProfile`, config);
    const PM = response.data.data;
    console.log(PM);

    return PM;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }}

export const getSupOwnStudents = async (token) => {
  try {   

    const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  console.log(config);
  const response = await axios.get(`${API_URL}/displaySupOwnStudents`, config);
  const PM = response.data.data;
  console.log(PM);

  return PM;
} catch (error) {
  throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
}
}

export const getStudentSup = async (token) => {
  try {   

    const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  console.log(config);
  const response = await axios.get(`${API_URL}/displayStudentSup`, config);
  const PM = response.data.data;
  console.log(PM);

  return PM;
} catch (error) {
  throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
}
}

export const getSecOwnStudents = async (token) => {
  try {   

    const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  console.log(config);
  const response = await axios.get(`${API_URL}/displaySecOwnStudents`, config);
  const PM = response.data.data;
  console.log(PM);

  return PM;
} catch (error) {
  throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
}
}

export const getStudentSec = async (token) => {
  try {   

    const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  console.log(config);
  const response = await axios.get(`${API_URL}/displayStudentSec`, config);
  const PM = response.data.data;
  console.log(PM);

  return PM;
} catch (error) {
  throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
}

}



//Events---------------------------------------------
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

export const getPMSchedule = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config)
    console.log('Token:', token);
    const response = await axios.get(`${API_URL}/getPMSchedule`, config);
    const data = response.data.data;
    console.log(response.data); 
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}
export const getLecSchedule = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config)
    console.log('Token:', token);
    const response = await axios.get(`${API_URL}/getLecSchedule`, config);
    const data = response.data.data;
    console.log(response.data); 
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred while fetching lecturer profile' || token);
  }
}


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

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteEvent/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error delete Event"
    );
  }
};

//Results------------------------------------------
export const getAllResults = async()=>{
  try{
    const response = await axios.post(`${API_URL}/displayresults`);
    return response.data;
    
  }catch(error){
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
export const getStuResults = async(token)=>{
  try {
    
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    console.log(config);
    const response = await axios.get(`${API_URL}/displaysturesults`, config);
    const results = response.data.data;
    console.log(results);

    return results;
  }catch(error){
    
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
export const UpdateStuResult = async (token, newValue) =>{
  try{
    const config = {
      headers: {
        Authorization: 'Bearer ' + token + " " + newValue
      }
    }    
    console.log(config);
    const response = await axios.put(`${API_URL}/updatesturesult`, {}, config);
    const update = response.data.message;
    console.log(update);    
    return update;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
//Submission Part----------------------------------
export const UpdateProgression = async (token,  Pro, IR, Doc, Pre) =>{
  try{
    const config = {
      headers: {
        Authorization: 'Bearer ' + token + " " + Pro + " " + IR + " " + Doc + " " + Pre
      }
    }    
    console.log(config);
    const response = await axios.put(`${API_URL}/updateProgression`, config);
    const update = response.data.update1;
    console.log(update);    
    return update;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
// export const UpdateProgression = async (token, Pro, IR, Doc, Pre) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const response = await axios.put(`${API_URL}/updateProgression`, {
//       Pro: Pro,
//       IR: IR,
//       Doc: Doc,
//       Pre: Pre,
//     }, config);
//     const update = response.data.data;
//     console.log(response);
//     console.log(update);
//     return update;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'An error occurred');
//   }
// };



//Anouncement--------------------------------------
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
export const getAllAnnouncements = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const response = await axios.get(`${API_URL}/getAllAnnouncements`, config);
    const data = response.data.data;
    console.log(data);
    return data;
  } catch (error)
  {
    throw new Error(error.response?.data?.message || 'An error occured while fetching announcements');
  }
}
export const getSpecificAnnouncements = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const response = await axios.get(`${API_URL}/getSpecificAnnouncements`, config);
    const data = response.data.data;
    console.log(data);
    return data;
  } catch (error)
  {
    throw new Error(error.response?.data?.message || 'An error occured while fetching announcements');
  }
}

export const UpdateAnnouncements = async (token, newTitle, newDescription, newName, newDate, newTime, newStatus) =>{
  try{
    const config = {
      headers: {
        Authorization: 'Bearer ' + token +","+newTitle + "," + newDescription + "," + newName + "," + newDate + "," + newTime + "," + newStatus
      }
    }    
    console.log(config);
    const response = await axios.put(`${API_URL}/updateAnnouncements`, {}, config);
    const update = response.data.message;
    console.log(update);    
    return update;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
export const addNewAnnouncements = async (newTitle, newDescription, newName, newDate, newTime, newStatus) => {
  try { 
      const config = {
        headers: {
          Authorization: 'Bearer ' 
        }
      }
    
    console.log(newTitle, newDescription, newName, newDate, newTime, newStatus);
    const AnnouncementData = {
      title: newTitle,
      description:newDescription,
      name: newName,
      date: newDate,
      time: newTime,
      show: newStatus,
    };
    const response = await axios.post(`${API_URL}/addAnnouncements`, AnnouncementData, config);
    console.log(config)

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error adding Announcements"
    );
  }
};




//Search------------------------------------------
export const SearchPM = async (search) => {
  try {

    
    const response = await axios.get(`${API_URL}/SearchPM`, {
      params: {
        result: search,
      },
    });
    const data = response.data.data;
    console.log(response.data); 
    return data;
  } catch (error)
  {
    throw new Error(error.response?.data?.message || 'An error occured while fetching Project Manager info');
  }
};

export const SearchStu = async (search) => {
  try {

    
    const response = await axios.get(`${API_URL}/SearchStu`, {
      params: {
        result: search,
      },
    });
    console.log(response);
    const data = response.data.data;
    console.log(data); 
    return data;
  } catch (error)
  {
    throw new Error(error.response?.data?.message || 'An error occured while fetching Student info');
  }
};

