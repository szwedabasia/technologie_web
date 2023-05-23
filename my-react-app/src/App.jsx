import { useState } from 'react';
import './App.css';
import AddStudentsForm from './components/AddStudentsForm';
import StudentsGrades from './components/StudentsGrades';

function App() {
  const [data,setData] = useState([]);
  // console.log(data)

  return (
      <div className='container'>
        <AddStudentsForm studentsDataObj={(dataFromForm) => {setData((prev) => [dataFromForm, ...prev])}}/>
        <StudentsGrades studentsList = {data}/>
      </div>
  );
  };
export default App
