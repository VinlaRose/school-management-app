import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentData } from "../redux/action";


export const Home = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const [topScorer, setTopScorer] = useState();

  
  useEffect(() => {
    dispatch(fetchStudentData());
  }, [dispatch]);

  useEffect(() => {
    if (students.length > 0) {
      setTopScorer(findTopScorerName());
    }
  }, [students]);

  function findTopScorerName() {
    let topScorer = students[0];
    for (let i = 1; i < students.length; i++) {
      if (students[i].marks > topScorer.marks) {
        topScorer = students[i];
      }
    }
    return topScorer.name;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <div className="data-cards">
        <div className="data">
          <h2>Total Students</h2>
          <div className="num-value">{students.length}</div>
        </div>
        <div className="data">
          <h2>Average marks</h2>
          <div className="num-value">
            {students.length > 0
              ? students.reduce((total, student) => total + student.marks, 0) / students.length
              : 0}
          </div>
        </div>
        <div className="data">
          <h2>Average Attendance</h2>
          <div className="num-value">
            {students.length > 0
              ? students.reduce((total, student) => total + student.attendance, 0) / students.length
              : 0}
          </div>
        </div>
        <div className="data">
          <h2>Top Scorer</h2>
          <div className="num-value">{topScorer}</div>
        </div>
      </div>
      <div className="footer">
  <p> <a href="https://github.com/VinlaRose/school-management-app">Github</a> </p>
</div>
    </div>
  );
};
