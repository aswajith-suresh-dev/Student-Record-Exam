let studentData = JSON.parse(localStorage.getItem("studentData")) || [];
function addStudent() {
  let idInput = document.getElementById("student_id");
  let nameInput = document.getElementById("student_name");
  let courseInput = document.getElementById("student_course");
  let id = idInput.value.trim();
  let name = nameInput.value.trim();
  let course = courseInput.value.trim();
  let student = {
    id: id,
    name: name,
    course: course,
  };
  studentData.push(student);
  localStorage.setItem("studentData", JSON.stringify(studentData));
  displayData();
  idInput.value = "";
  nameInput.value = "";
  courseInput.value = "";
}
function displayData() 
{
  result.innerHTML = "";

  studentData.forEach(
    (student, index) =>
      {result.innerHTML+= `<tr>
        <td class="border border-gray-300 text-center">${student.id}</td>
        <td class="border border-gray-300 text-center">${student.name}</td>
        <td class="border border-gray-300 text-center">${student.course}</td>
        <td class="text-center p-2 border border-gray-300 text-center"><button class="border p-2 bg-emerald-600 text-white rounded-lg" onClick="editRecord(${index})">Edit</button>
        <button class="border p-2 bg-red-600 text-white rounded-lg" onClick="deleteRecord(${index})">Delete</button>
        </td>
        </tr>`}
  );
}
function deleteRecord(index)
{
    let val = confirm("Are you sure to delete this record")
    if(val)
    {
        studentData.splice(index,1)
        localStorage.setItem("studentData",JSON.stringify(studentData))
        displayData()
    }
}
function editRecord(index) {

  let oldName = studentData[index].name;
  let oldCourse = studentData[index].course;

  let newName = prompt("Enter new name", oldName);
  let newCourse = prompt("Enter new course", oldCourse);

  if (newName && newCourse) {

    studentData[index].name = newName;
    studentData[index].course = newCourse;
    localStorage.setItem("studentData", JSON.stringify(studentData));
    displayData();
  }
}