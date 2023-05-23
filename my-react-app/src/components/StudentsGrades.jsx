function StudentsGrades({studentsList}) {
    console.log(studentsList)
    return <div className="wrapper">
        <h1>Students</h1>
        <ul>
            {studentsList.length !== 0 && 
            studentsList.map((item) => (            
            <li>
                <p>{item.studentsName} {item.studentsSurname}</p>
                <div>{item.studentsGrades}</div>
            </li>
            ))} 
        </ul>
    </div>
}
export default StudentsGrades