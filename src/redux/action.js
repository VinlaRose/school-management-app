export const fetchStudentData = () => async (dispatch) => {
    try {
      const response = await fetch('https://5a1ece93-aa90-49b4-a19b-b3af704a6f63-00-2jejhrwamybei.riker.replit.dev/students');
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      dispatch({ type: "FETCH_STUDENTS", payload: data });
      return data;
    } catch (error) {
      console.error('Error fetching student data:', error);
      dispatch({ type: "FETCH_STUDENTS_FAILURE" });
      throw error;
    }
  };
 

  export const addNewStudent = (studentData) => async (dispatch) => {
    console.log(studentData)
    try {
      const response = await fetch(
        'https://5a1ece93-aa90-49b4-a19b-b3af704a6f63-00-2jejhrwamybei.riker.replit.dev/students',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          
          body: JSON.stringify(studentData), 
        }
      );
    
    
  
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
         dispatch({ type: "ADD_STUDENT", payload: data.data });
      } else {
        console.error("Error adding item. Status:", response.status);
        dispatch({ type: "ADD_STUDENT_FAILURE" });
      }
    } catch (error) {
      console.error("Error adding item:", error);
    dispatch({ type: "ADD_STUDENT_FAILURE" });
    }
  };
  
  export const deleteStudent =  (studentId) => async (dispatch) => {
    try {
      const response = await fetch(`https://5a1ece93-aa90-49b4-a19b-b3af704a6f63-00-2jejhrwamybei.riker.replit.dev/students/${studentId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        dispatch({ type: "DELETE_STUDENT_FAILURE" });
        throw new Error(`Failed to delete student: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      dispatch({ type: "DELETE_STUDENT", payload: data.data });
      return data;
    } catch (error) {
      console.error('Error deleting student:', error);
      dispatch({ type: "DELETE_STUDENT_FAILURE" });
      throw error;
    }
  };
  
  
  
  export const fetchTeachersData = () => async (dispatch) => {
    try {
      const response = await fetch('https://5a1ece93-aa90-49b4-a19b-b3af704a6f63-00-2jejhrwamybei.riker.replit.dev/teachers'); 
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      dispatch({ type: "FETCH_TEACHERS", payload: data }); 
      return data;
    } catch (error) {
      console.error('Error fetching teachers data:', error);
      dispatch({ type: "FETCH_TEACHERS_FAILURE" }); 
      throw error; 
    }
  };

  export const addNewTeacher = (teacherData) => async (dispatch) => {
    console.log(teacherData)
    try {
      const response = await fetch(
        'https://5a1ece93-aa90-49b4-a19b-b3af704a6f63-00-2jejhrwamybei.riker.replit.dev/teachers',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          
          body: JSON.stringify(teacherData), 
        }
      );
    
    
  
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
         dispatch({ type: "ADD_TEACHER", payload: data.data });
      } else {
        console.error("Error adding item. Status:", response.status);
        dispatch({ type: "ADD_TEACHER_FAILURE" });
      }
    } catch (error) {
      console.error("Error adding item:", error);
    dispatch({ type: "ADD_TEACHER_FAILURE" });
    }
  };
  export const deleteTeacher =  (teacherId) => async (dispatch) => {
    try {
      const response = await fetch(`https://5a1ece93-aa90-49b4-a19b-b3af704a6f63-00-2jejhrwamybei.riker.replit.dev/teachers/${teacherId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        dispatch({ type: "DELETE_TEACHER_FAILURE" });
        throw new Error(`Failed to delete student: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      dispatch({ type: "DELETE_TEACHER", payload: data.data });
      return data;
    } catch (error) {
      console.error('Error deleting student:', error);
      dispatch({ type: "DELETE_TEACHER_FAILURE" });
      throw error;
    }
  };
  

  export const filterStudents = (gender) => ({
    type: "FILTER_STUDENTS",
    payload: gender,
  });
  
  export const sortStudents = (criteria) => ({
    type: "SORT_STUDENTS",
    payload: criteria,
  });