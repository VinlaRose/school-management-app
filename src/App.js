
import './App.css';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Student } from './pages/Students';
import { Teachers } from './pages/Teachers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentData, fetchTeachersData } from './redux/action';
import { useEffect } from 'react';
import { IndividualStudent } from './pages/IndividualStudent';
import { IndividualTeacher } from './pages/IndividualTeacher';

function App() {
  
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchStudentData());
    dispatch(fetchTeachersData())
  }, [dispatch]);

  

 

  
  return (
    <div className="App ">
    <nav className="navbar">
      <h3>School Management System</h3>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/students" className="nav-link">Students</Link>
      <Link to="/teachers" className="nav-link">Teachers</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Student />} />
      <Route path="/teachers" element={<Teachers />} />

      <Route path="/students/:studentId" element={<IndividualStudent />} />
<Route path="/teachers/:teacherId" element={<IndividualTeacher />} />

    </Routes>
  </div>
  );
}

export default App;