import { useState } from "react";

function AddStudentsForm({studentsDataObj}) {
    // const siema = {prop1:1, prop2:2, prop3:"dsqdq"}
    // console.log(siema["prop1"], siema.prop2)
    const[name,setName]=useState("");
    const[surname,setSurname]=useState("");
    const[grades,setGrades]=useState("");

    function nameHandler (event){
        setName(event.target.value);
    }
    function surnameHandler (event){
        setSurname(event.target.value);
    }
    function gradesHandler (event){
        setGrades(event.target.value)
    }
    function submitFormHandler(event) {
        event.preventDefault();
        const studentsData = {studentsName: name, studentsSurname: surname, studentsGrades: grades};
        studentsDataObj(studentsData);
        console.log(studentsData);
        setName("");
        setSurname("");
        setGrades("");
        }


    return (
        <form onSubmit={submitFormHandler}>
            <label>Add Student</label>
            <input onChange={nameHandler} value={name} type="text" placeholder="Name"></input>
            <input onChange={surnameHandler} value={surname} type="text" placeholder="Surname"></input>
            <input onChange={gradesHandler} value={grades} type="text" placeholder="Grades"></input>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddStudentsForm