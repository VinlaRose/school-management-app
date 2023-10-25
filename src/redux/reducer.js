const initialState = {
    students: [],
    teachers: [],
    filteredStudents: [], 
    filterGender: 'All', 
    sortCriteria: 'name',
    loading: false,
    error: null,
  };
  
  export const schoolReducer = (state = initialState, action) => {
    switch (action.type) {
      // Student cases
      case "FETCH_STUDENTS":
        return {
          ...state,
          students: action.payload.data,
          filteredStudents:  action.payload.data,
          loading: false,
          error: null,
        };
      case "FETCH_STUDENTS_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error fetching students",
        };
      case "ADD_STUDENT":
        console.log(state.students)
        return {
          ...state,
          students: [...state.students, action.payload],
          filteredStudents: [...state.students, action.payload],
          filterGender: 'All', 
          sortCriteria: 'name',
          loading: false,
          error: null,
        };
      case "ADD_STUDENT_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error adding student",
        };
      case "DELETE_STUDENT":
        return {
          ...state,
          students: state.students.filter((student) => student._id !== action.payload._id),
          filteredStudents: state.students.filter((student) => student._id !== action.payload._id),
          loading: false,
          error: null,
        };
      case "DELETE_STUDENT_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error deleting student",
        };
      case "UPDATE_STUDENT":
        return {
          ...state,
          students: state.students.map((student) =>
            student._id === action.payload._id ? action.payload : student
          ),
          loading: false,
          error: null,
        };
      case "UPDATE_STUDENT_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error updating student",
        };
  
      // Teacher cases
      case "FETCH_TEACHERS":
        return {
          ...state,
          teachers: action.payload.data,
          loading: false,
          error: null,
        };
      case "FETCH_TEACHERS_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error fetching teachers",
        };
      case "ADD_TEACHER":
        return {
          ...state,
          teachers: [...state.teachers, action.payload],
          loading: false,
          error: null,
        };
      case "ADD_TEACHER_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error adding teacher",
        };
      case "DELETE_TEACHER":
        return {
          ...state,
          teachers: state.teachers.filter((teacher) => teacher._id !== action.payload._id),
          loading: false,
          error: null,
        };
      case "DELETE_TEACHER_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error deleting teacher",
        };
      case "UPDATE_TEACHER":
        return {
          ...state,
          teachers: state.teachers.map((teacher) =>
            teacher._id === action.payload._id ? action.payload : teacher
          ),
          loading: false,
          error: null,
        };
      case "UPDATE_TEACHER_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error updating teacher",
        };
        case "FILTER_STUDENTS":
    
      const filteredStudents =
        action.payload === 'All'
          ? state.students
          : state.students.filter((student) => student.gender === action.payload);
      return {
        ...state,
        filterGender: action.payload,
        filteredStudents: filteredStudents,
      };
    case "SORT_STUDENTS":
      
      const sortedStudents = [...state.filteredStudents].sort((a, b) => {
        if (action.payload === 'name') {
          return a[action.payload].localeCompare(b[action.payload]);
        } else {
          return a[action.payload] - b[action.payload];
        }
      });
      return {
        ...state,
        sortCriteria: action.payload,
        filteredStudents: sortedStudents,
      };
  
      default:
        return state;
    }
  };
  
 
  